class Drop {
    constructor() {
        this.x = random(0, width);
        this.y = random(-(height / 2), 0);
        this.yspeed = random(5, 20);
        this.width = this.yspeed / 4;
        this.height = this.yspeed * 1.2

    }
    display() {
        fill('#14ec16');
        rect(this.x, this.y, this.width, this.height);
    }
    fall() {
        this.y = this.y + this.yspeed;
        if (this.y > height) {
            this.y = random(-(height / 2), 0);
            this.yspeed = random(5, 20);
            this.width = this.yspeed / 4;
            this.height = this.yspeed * 1.2
        }
    }
};