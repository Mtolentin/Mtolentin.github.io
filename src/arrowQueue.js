function ArrowQueue(context) {
    this.arrows = [];
}

ArrowQueue.prototype.spawn = function spawn(direction, bpm) {
    let arrow = {
        direction: direction,
        pos: 600,
        spd: bpm,
        combo: true
    }
    this.arrows.push(arrow);

}

ArrowQueue.prototype.move = function move(canvas) {
    this.arrows.forEach( arrow => {
        arrow[pos] -= spd;
        if (arrow[pos] <= 0) {
            this.arrows.splice(this.arrows.indexOf(arrow),1);
            //draw 'missed' using context
        }
    });
}

ArrowQueue.prototype.judge = function judge(key) {

}




module.exports = ArrowQueue;