// получение элемента
const canvas0 = document.getElementById('canvas');
const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');

// для работы с canvas необходимо получить контекст
const context = canvas0.getContext('2d');
const context1 = canvas1.getContext('2d');
const context2 = canvas2.getContext('2d');

// создание линейного градиента градиента 
const gradient = context.createLinearGradient(20, 20, 120, 120)
// создание градиента по кругу
const gradientCircle = context.createRadialGradient(70, 70, 0, 70, 70, 70, 70)

// задаем цвета градиента
gradient.addColorStop(0, '#4a96fa');
gradient.addColorStop(1, '#125c03');
// цвет кругового градиента
gradientCircle.addColorStop(0, '#4a96fa');
gradientCircle.addColorStop(1, '#125c03');

// цвет заливки (можно указать как цвет так и градиент)
context.fillStyle = gradient;

// создаем прямоугольник
context.fillRect(20, 20, 100, 100);

//
context.strokeStyle = 'rgb(130,50,40)'
// прямоугольник не закрашенный
context.strokeRect(140, 20, 100, 100)

// прозрачный квадрат
context.clearRect(45, 45, 50, 50)

// сложные фигуры
context1.beginPath();
// перемещение по холсту
// context1.moveTo(150, 0);
// рисуем линию
// context1.lineTo(175, 125);
// ширина линии
context1.lineWidth = '3';
// цвет линии
context1.strokeStyle = '#4a96fa';
// рисуем окружность
context1.moveTo(75, 50);
context1.arc(50, 50, 25, 0, angle(360), false);

// рисуем плавные линии
context1.moveTo(180, 50);
context1.lineTo(290, 50);
context1.moveTo(290, 60);
context1.arcTo(235, 10, 180, 60, 50)


context1.stroke();

// функция получения радианов
function angle(degrees) {
    return (Math.PI / 180) * degrees
}


// кривые безье
context2.beginPath();
context2.moveTo(100, 100);
context2.bezierCurveTo(200, 0, 200, 200, 300, 100)
// пишем текст
// для начала указываем размер шрифта
context2.font = '30px Sans-serif';
context2.fillStyle = 'green';

context2.fillText('JavaScript', 50, 50, 200);


context2.stroke();


// paint
const paint = document.getElementById('paint');
const color = document.getElementById('color');
const width = document.getElementById('width');
const ctx = paint.getContext('2d');

color.addEventListener('input', () => ctx.strokeStyle = color.value)
width.addEventListener('change', () => ctx.lineWidth = width.value)

paint.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const mx = e.movementX;
    const my = e.movementY;

    if (e.buttons > 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - mx, y - my);
        ctx.stroke();
        ctx.closePath();
    }

})

// olimp
const canvas = document.getElementById('olimp').getContext('2d');
const radius = 50;

const circles = [
    { color:'blue',   x: 2*radius - radius/2, y: 2*radius, q: [1,2,3,0] },
    { color:'black',  x: 4*radius,            y: 2*radius, q: [2,0,1,3] },
    { color:'red',    x: 6*radius + radius/2, y: 2*radius, q: [2,0,1,3] },
    { color:'yellow', x: 3*radius - radius/4, y: 3*radius, q: [3,0,1,2] },
    { color:'green',  x: 5*radius + radius/4, y: 3*radius, q: [3,0,1,2] }
];

function drawArc(canvas, circle, q) {
    var s = (circle.q[q]+0.5)/2 * Math.PI,
        e = (circle.q[q]-0.5)/2 * Math.PI;

    canvas.lineWidth = 10;
    canvas.strokeStyle = 'white';
    canvas.beginPath();
    canvas.arc( circle.x, circle.y, radius, s, e, true );
    canvas.stroke();

    canvas.lineWidth = 10;
    canvas.strokeStyle = circle.color;
    canvas.beginPath();
    canvas.arc( circle.x, circle.y, radius, s, e, true );
    canvas.stroke();
}

for ( let q = 0; q < 4; ++q ){
    circles.forEach(function(circle){
        drawArc( canvas, circle, q );
    })
}
