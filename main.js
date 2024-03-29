function start() {
    let domFirstLight = document.getElementById('first_light')
    let domSecondLight = document.getElementById('second_light')
    let domThirdLight = document.getElementById('third_light')

    domFirstLight.style.backgroundColor = '#10b519'
    domSecondLight.style.backgroundColor = '#f7f411'
    domThirdLight.style.backgroundColor = '#a83232'
   
}
var positionCar1 =0
var positionCar2 =0
var x1=100
var x2=100
document.addEventListener("keydown",function (event){
    let domCar_1 = document.getElementById('car_1')
    let domCar_2 = document.getElementById('car_2')
console.log(event.key);
switch(event.key){
    case'ArrowRight':
    positionCar1 += 10;
    domCar_2.style.marginLeft = positionCar1 +'px';
    x1 -= 2;
    xang1.style.width = x1 + "px";
    break;

    case'd':
    positionCar2 += 10;
    domCar_1.style.marginLeft = positionCar2 +'px';
    x2 -= 2;
    xang2.style.width = x2 + "px";
    break;
}})
let car1Finished = false;
let car2Finished = false;

// Lắng nghe sự kiện keydown
document.addEventListener("keydown", function(event) {
    let domCar_1 = document.getElementById('car_1');
    let domCar_2 = document.getElementById('car_2');

    switch (event.key) {
        case 'ArrowRight':
            positionCar1 += 10;
            domCar_2.style.marginLeft = positionCar1 + 'px';
            x1 -= 2;
            xang1.style.width = x1 + "px";

            // Kiểm tra nếu xe car_2 đã đạt đích
            if (positionCar1 >= 1600/* Thay 500 bằng vị trí đích của xe */) {
                car2Finished = true;
                showWinnerMessage('Car 2');
            }
            break;

        case 'd':
            positionCar2 += 10;
            domCar_1.style.marginLeft = positionCar2 + 'px';
            x2 -= 2;
            xang2.style.width = x2 + "px";

            // Kiểm tra nếu xe car_1 đã đạt đích
            if (positionCar2 >= 1600 /* Thay 500 bằng vị trí đích của xe */) {
                car1Finished = true;
                showWinnerMessage('Car 1');
            }
            break;
    }
});

function showWinnerMessage(winner) {
    if (car1Finished || car2Finished) {
        alert(`Xe ${winner} đã về đích!`);
    }
}

function repeat() {
    positionCar1 = 0;
    positionCar2 = 0;
    x1 = 100; // Reset lại giá trị x1 ban đầu
    x2 = 100; // Reset lại giá trị x2 ban đầu

    let domCar_1 = document.getElementById('car_1');
    let domCar_2 = document.getElementById('car_2');

    domCar_1.style.marginLeft = positionCar1 + 'px'; // Đưa xe 1 về vị trí ban đầu
    domCar_2.style.marginLeft = positionCar2 + 'px'; // Đưa xe 2 về vị trí ban đầu
    xang1.style.width = x1 + "px"; // Đưa thanh tiến độ của xe 1 về lại đầu
    xang2.style.width = x2 + "px"; // Đưa thanh tiến độ của xe 2 về lại đầu
    car1Finished = false; // Đặt lại biến kiểm tra đích của xe 1
    car2Finished = false; // Đặt lại biến kiểm tra đích của xe 2
}
