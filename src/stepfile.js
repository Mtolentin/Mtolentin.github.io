import {engine} from './engine/engine.js';
import Receptor from './receptor.js';

const RECEPTOR_CONTAINER_WIDTH = 500;
const no_fn = function () {};

export default class Game {
    constructor(elem, callback=noop) {
        this._el = element;
        this._cb = callback;
        this._arrows = null;
        this._currentSong = null;

        // Start new game engine
        this._engine = engine;
        // Create new stage
        this._stage = this._engine.createStage(elem.offsetWidth, elem.offsetHeight);
        // Add the stage to the DOM
        elem.appendChild(this._stage.view)

        // Create a container to store all the receptors
        this._arrowContainer = this._stage.createContainer (
            (this._stage.width - RECEPTOR_CONTAINER_WIDTH) / 2, 75);
        // Create an array to store the base receptors
        this._arrowBar = [];

        // Load all the assets
        this._engine.AM.load([{
            name: 'receptor',
            path: 'assets/receptor.png'
        }], (resources) => {
            this._baseReceptors = this._initializeBar([1, 1, 1, 1], this._receptorContainer);
            // Add the static receptors to the top of the stage
            this._stage.addChild(this._receptorContainer);
            this._callback();
        });
    }


    _initializeBar(inputs=[], container, offsetY=0) {
        // Create sprites using the receptor resource
        let receptors = ['left', 'right', 'up', 'down'].map((direction, idx) => {
            if (+inputs[idx]) {
                return new Receptor(direction, offsetY);
            }
        });

        receptors.forEach((receptor) => {
            if (!receptor) { return; }
            container.addChild(receptor.sprite);
        });

        return receptors
    }

    _loadSteps(location='', callback=no_fn) {
        this.currentSong = location;
        this._engine.AM.loadRemote(location, (err, response, body) => {
            this._stepContainer = this._stage.createContainer(0, 75);
            // Put data into useable format
            this._steps = this._parseStepFile(body);

            /* 
             * Iterate over every measure in the step file. Each measure contains 4 beats.
             * Each beat can be broken up into 4th, 8th, 16th, 24th, 32nd, 48th, 64th, and 192nd notes.
             */
            this._steps.measures.forEach((measure, idx) => {
                // Determine number of potential (not every line will contain a note) notes in this measure.
                let numNotes = measure.length;
                let measureContainer = this._stage.createContainer(0, 0);
                let offsetNote = this._stage.height / numNotes;
                let currentOffsetY = 0;

                measureContainer.x = (this._stage.width - 500) / 2;
                measureContainer.y = (this._stage.height) * idx;

                // Iterate over all notes in measure and create a note for each
                measure.forEach((note, idx) => {
                    // There can be between 0 and 4 inputs for each note (left, down, up, right)
                    // Turn note into array so its easier to work with
                    let inputs = note.split('');
                    this._setupReceptors(inputs, measureContainer, currentOffsetY);
                    currentOffsetY += offsetNote;
                    this._stepContainer.addChild(measureContainer);
                });
            });

            this._stage.addChild(this._stepContainer);
            callback();
        });
    }

    _parseStepFile(data={}) {
        var formatted = { meta: {}, measures: [] };

        var measure = [];
        data.split('\n').forEach((row) => {
            let metaInfo;
            if (row === '' || row === '\n') { return; }

            // row that begins with '#' is meta info
            if (row.charAt(0) === '#') {
                row = row.substring(1, row.length - 1);
                metaInfo = row.split(':');
                formatted.meta[metaInfo[0]] = metaInfo[1] || '';
                return;
            }

            if (row === ',' || +row >= 0) {
                if (row !== ',') (measure.push(row))
                formatted.measures.push(measure);
                measure = [];
            }
        });

        return formatted;
    }

    loadSong(location='', callback=noop) {
        this._loadSteps(location, callback);
        this._audio = this._engine.audio.load('songs/Idol/Idol.ogg');
    }

    start() {
        var firstTime = true;
        var isPlaying = false;
        var steps = this._steps;
        var scene = this._stage.scene;
        var frameOffset;

        steps.meta.DISPLAYBPM = +steps.meta.DISPLAYBPM.substring(0, steps.meta.DISPLAYBPM.length - 1);

        function calculateFrameOffset() {
            var BPS = steps.meta.DISPLAYBPM / 60;
            var PixelsPerBeat = this._stage.height / 4;
            return (BPS * PixelsPerBeat) / 60;
        }

        frameOffset = calculateFrameOffset();

        scene.ticker.add((delta) => {
            if (firstTime) {
                // Wait until the audio starts playing begin animating the note stream
                this._audio.once('play', function () {
                    isPlaying = true;
                });
                this._audio.play();
                firstTime = false;
            }

            if (!isPlaying) { return; }

            this._stepContainer.y -= frameOffset;
        });
    }



}


