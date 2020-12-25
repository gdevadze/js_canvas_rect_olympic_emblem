function city(myCanvas) {
    let c = document.getElementById(myCanvas);
    let ctx = c.getContext("2d");

    let Hw = 50;
    let Hh = 100;
    let Rh = 50;
    let Fh = Hh - Rh;
    let X0 = 20;
    let Y0 = 20;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    for (let X = X0; X < 500; X += Hw + 10) {
        for (let Y = Y0; Y < 500; Y += Hh + 10) {
            ctx.moveTo(X, Y + Rh);
            ctx.lineTo(X + Hw, Y + Rh);
            ctx.lineTo(X + Hw / 2, Y);
            ctx.lineTo(X, Y + Rh);
            ctx.lineTo(X, Y + Hh);
            ctx.lineTo(X + Hw, Y + Hh);
            ctx.lineTo(X + Hw, Y + Rh);
        }
    }
    ctx.stroke();
}

function olympiEmblem(myCanvas) {
    var canvas = document.getElementById('myCanvas').getContext('2d');
    var radius = 50;

    var circles = [{
        color: 'blue',
        x: 2 * radius - radius / 2,
        y: 2 * radius,
        isTop: true
    }, {
        color: 'black',
        x: 4 * radius,
        y: 2 * radius,
        isTop: true
    }, {
        color: 'red',
        x: 6 * radius + radius / 2,
        y: 2 * radius,
        isTop: true
    }, {
        color: 'yellow',
        x: 3 * radius - radius / 4,
        y: 3 * radius,
        isTop: false
    }, {
        color: 'green',
        x: 5 * radius + radius / 4,
        y: 3 * radius,
        isTop: false
    }];

    function drawArc(canvas, color, x, y, start, end) {
        if (color !== 'white') drawArc(canvas, 'white', x, y, start, end);

        canvas.lineWidth = color === 'white' ? 16 : 10;
        canvas.strokeStyle = color;

        canvas.beginPath();
        canvas.arc(x, y, radius, start - Math.PI / 2, end - Math.PI / 2, true);
        canvas.stroke();
    }

    circles.forEach(function(circle) {
        drawArc(canvas, circle.color, circle.x, circle.y, 0, Math.PI * 2);
    });

    circles.forEach(function(circle) {
        if (circle.isTop) {
            drawArc(canvas, circle.color, circle.x, circle.y, Math.PI, Math.PI * 2 / 3);
            drawArc(canvas, circle.color, circle.x, circle.y, Math.PI * 5 / 3, Math.PI * 4 / 3);
        } else {
            drawArc(canvas, circle.color, circle.x, circle.y, 0, Math.PI / 3);
            drawArc(canvas, circle.color, circle.x, circle.y, Math.PI * 2 / 3, Math.PI / 3);
        }
    });
}

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// 
// 
// ctx.stroke();