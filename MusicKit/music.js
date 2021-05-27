const btns = document.querySelectorAll(".btn");
const main = document.body;
//system mouse click and mobile touch
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        keyCode = e.currentTarget.textContent;
        switch(keyCode) {
            case 'A':
                document.getElementById("boom").play();
                break;
            case 'S':
                document.getElementById("clap").play();
                break;
            case 'D':
                document.getElementById("hihat").play();
                break;
            case 'F':
                document.getElementById("kick").play();
                break;
            case 'G':
                document.getElementById("openhat").play();
                break;
            case 'H':
                document.getElementById("ride").play();
                break;
            case 'J':
                document.getElementById("snare").play();
                break;
            case 'K':
                document.getElementById("tink").play();
                break;
            case 'L':
                document.getElementById("tom").play();
                break;
        }
    });
});

//laptop ya computer ke keyboard ke liye
main.addEventListener("keydown", function(e){
    keyCode = e.keyCode;
    switch(keyCode) {
        case 65:
            document.getElementById("boom").play();
            document.querySelector(".boom").style.border = "7px red solid"
            break;
        case 83:
            document.getElementById("clap").play();
            document.querySelector(".clap").style.border = "7px green solid"
            break;
        case 68:
            document.getElementById("hihat").play();
            document.querySelector(".hihat").style.border = "7px darkblue solid"
            break;
        case 70:
            document.getElementById("kick").play();
            document.querySelector(".kick").style.border = "7px yellow solid"
            break;
        case 71:
            document.getElementById("openhat").play();
            document.querySelector(".openhat").style.border = "7px orange solid"
            break;
        case 72:
            document.getElementById("ride").play();
            document.querySelector(".ride").style.border = "7px maroon solid"
            break;
        case 74:
            document.getElementById("snare").play();
            document.querySelector(".snare").style.border = "7px hotpink solid"
            break;
        case 75:
            document.getElementById("tink").play();
            document.querySelector(".tink").style.border = "7px purple solid"
            break;
        case 76:
            document.getElementById("tom").play();
            document.querySelector(".tom").style.border = "7px indigo solid"
            break;
        default:
            console.log("Wrong Key");
    }
});
//jab ek key dabane ke bad dusri dabao toh d=style hatjaye
main.addEventListener("keyup",function(){
    document.querySelectorAll(".btn").forEach(function(e){
        e.style.border = "none";
    }); 
});