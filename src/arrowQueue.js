function ArrowQueue() {
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

ArrowQueue.prototype.move = function move() {
    this.arrows.forEach( arrow => {
        arrow[pos] -= spd;
    });
}

ArrowQueue.prototype.judge = function judge(key) {

}




module.exports = ArrowQueue;