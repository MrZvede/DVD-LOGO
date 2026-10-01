const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let sam = {
    pos: {x: 100, y: 100},
    size: {w: 50, h: 50}
};

let border = {
    x: 400,
    y: 600
};

let dir = { x: 1, y: 1 };

function move(pos, dir){
    pos.x += dir.x;
    pos.y += dir.y;
};

function update(){
    move(sam.pos, dir);
    check(sam.pos, border, dir, sam.size);
};

function check(pos, border, dir, size){
    if (pos.x > border.x - size.w || pos.x < 0){
        dir.x *= -1
    }
    if (pos.y > border.y - size.h || pos.y < 0){
        dir.y *= -1
    }
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(sam.pos.x, sam.pos.y, sam.size.w, sam.size.h);
};


function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
loop();
