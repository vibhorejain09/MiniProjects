const btns = document.querySelectorAll(".btn");
const watch = document.querySelector(".watch");
timeStart();
var timeInterval;
function timeStart() {
    var day = new Date();
    var hour = day.getHours();
    var min = day.getMinutes();
    var sec = day.getSeconds();
    hour = timeLessThanTen(hour);
    min = timeLessThanTen(min);
    sec = timeLessThanTen(sec);
    /*console.log(h);
    console.log(m);
    console.log(s);*/
    document.querySelector(".time").innerHTML = hour + ":" + min + ":" + sec;
    timeInterval = setTimeout(timeStart, 1000);
}
function timeLessThanTen(n) {
    if (n < 10) 
    {
        n = "0" + n;
    }
    return n;
}

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const classList = e.currentTarget.classList;
        if (classList.contains("black"))
            watch.src = "black.png"
        if (classList.contains("blue"))
            watch.src = "blue.png"
        if (classList.contains("pink"))
            watch.src = "pink.png"
        if (classList.contains("purple"))
            watch.src = "purple.png"
        if (classList.contains("red"))
            watch.src = "red.png"
        if (classList.contains("timeshow")) {
            timeStart();
        }
        if (classList.contains("heartrate")) {
            document.querySelector(".time").innerHTML = "<img src='heartrate.png' id='rate'><br>83";
            clearTimeout(timeInterval);
        }
    });
});
