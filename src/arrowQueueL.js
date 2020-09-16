function ArrowQueue() {
    this.arrows = [];
    this.scribe = [];
}

ArrowQueue.prototype.spawn = function spawn(direction, bpm, hitTime) {
    let arrow = {
        direction: direction,
        pos: 10,
        spd: bpm / 4,
        combo: true,
        hitTime: hitTime
    }
    this.arrows.push(arrow);
    console.log(arrow.hitTime);

}

ArrowQueue.prototype.move = function move(context, origin) {
    if (this.arrows[0]) {
        this.arrows.forEach( arrow => {
            arrow.pos += arrow.spd;
            if (arrow.pos >= 600) {
                let delay = Date.now() - arrow.hitTime;
                console.log(
                    [arrow.hitTime, delay, arrow.hitTime - delay]);
                this.scribe.push([arrow.hitTime - delay, arrow.direction]);
                this.arrows.splice(this.arrows.indexOf(arrow),1);
            }
        });
    }
}

ArrowQueue.prototype.judge = function judge(key) {

}




module.exports = ArrowQueue;