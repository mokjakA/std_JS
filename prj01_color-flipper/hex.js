const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hexbtn = document.getElementById('btn');
const hexColor = document.querySelector('.color');

hexbtn.addEventListener('click',function(){
    //get random number between 0 - 15
    let hexRandomNumber = '#'; //이러면 string 타입이 되는건가?
    for(let i=0;i<6;i++){
        hexRandomNumber += hexColors[getRandomNumber()];
    }
    // console.log(hexRandomNumber);
    document.body.style.backgroundColor = hexRandomNumber;
    hexColor.textContent = hexRandomNumber;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hexColors.length);
}