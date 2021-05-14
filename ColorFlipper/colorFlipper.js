const colors =["blue", "red", "green", "yellow", "rgba(133,122,200)", "#f15025"];
const hexColors =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hex= document.querySelector('#hex');
const simple= document.querySelector('#simple');
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

hex.addEventListener('click', function(){
    btn.classList.toggle('hexColors');
    document.getElementById('current').textContent='Hex';
})

simple.addEventListener('click', function(){
    btn.classList.toggle('hexColors');
    document.getElementById('current').textContent='Simple';
})

btn.addEventListener('click', function(){
    if(btn.classList.contains('hexColors'))
    {
        let newColor = "#";
        for (let i=0; i<6; i++) {
            newColor += hexColors[getRandomNumberHex()]
        }
        document.body.style.backgroundColor = newColor;
        color.textContent = newColor;
    }
    else{
    const randomNumber = getRandomNumber(); //get random number in the array colors
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    }    
})

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}
function getRandomNumberHex () {
    return Math.floor(Math.random() * hexColors.length);
}