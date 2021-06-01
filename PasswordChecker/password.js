const indicator = document.querySelector(".indicator");
const input = document.querySelector("#passwordvalidate");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
let regexWeak = /[A-Z]/gi;
let regexMedium = /\d+/;
let regexStrong = /.[@,#,&,$,!,%,^,_,?]/; 
let no;
const showBtn = document.querySelector(".showBtn");
function trigger(){
    if(input.value != "")
    {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(input.value.length < 8 && (input.value.match(regexWeak) || input.value.match(regexMedium) || input.value.match(regexStrong)))
            no=1;
        if(input.value.length >= 8 && ((input.value.match(regexWeak) && input.value.match(regexMedium)) || (input.value.match(regexMedium) && input.value.match(regexStrong))  || (input.value.match(regexWeak) && input.value.match(regexStrong))))
            no=2;
        if(input.value.length >= 8 && (input.value.match(regexWeak) && input.value.match(regexMedium) && input.value.match(regexStrong)))
            no=3;
        if(no==1)
        {
            weak.classList.add("active");
            text.style.block = "block";
            text.textContent = "Your Password is too weak";
            text.classList.add("weak");
        }
        if(no==2)
        {
            medium.classList.add("active");
            text.textContent = "Your Password is medium";
            text.classList.add("medium");   
        }
        else{
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if(no==3)
        {
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your Password is strong";
            text.classList.add("strong");   
        }
        else{
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
        showBtn.style.display = "block";
        showBtn.onclick = function(){
            if(input.type == "password")
            {
                input.type= "text";
                showBtn.textContent= "Hide";
            }
            else{
                input.type= "password";
                showBtn.textContent= "Show";
            }
        }
    }
    else{
        indicator.style.display ="none";
        text.style.display = "none";
        showBtn.style.display = "none";
    }
}