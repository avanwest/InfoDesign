


function move() {
    var time = new Date();
    var hour = time.getHours() % 12;
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var millisecond = time.getMilliseconds();

  
    var hourHand = document.querySelector("div.hour-hand");
    var hourRotate = 30 * hour + (30 / 60);
    hourHand.style.transform = "rotate(" + hourRotate + "deg)";

    var minuteHand = document.querySelector("div.minute-hand");
    var minuteRotate = 6 * minute + (0.1 * second);
    minuteHand.style.transform = "rotate(" + minuteRotate + "deg)";

    var secondHand = document.querySelector("div.second-hand");
    var secondRotate = 6 * second + 0.006 * millisecond;
    secondHand.style.transform = "rotate(" + secondRotate + "deg)";

    var millisecondHand = document.querySelector("div.millisecond-hand");
    var millisecondRotate = 0.36 * millisecond;
    millisecondHand.style.transform = "rotate(" + millisecondRotate + "deg)";

    requestAnimationFrame(move);
}

// timeOfDay();
move();




