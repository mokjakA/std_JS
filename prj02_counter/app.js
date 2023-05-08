let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

const colorBtn = document.getElementById('colorBtn');
const colorNum = document.querySelector('.color');
let randomNum = 0;
const hexs = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

btns.forEach((btn)=>{ 
    btn.addEventListener("click", function(e){
        // console.log('여기는 옴');
        const styles = e.currentTarget.classList; 
        if(styles.contains('dec')){
            count--;
            // console.log('dec누름 count : '+count);
        }else if(styles.contains('inc')){
            count++;
            // console.log('inc누름 count : '+count);
        }else{
            count = 0;
            // console.log('res누름 count : '+count);
        }

        getRandomNumber();
        value.style.color = randomNum;
        value.textContent = count;
        colorNum.textContent = randomNum;
    })
});

function getRandomNumber(){
    randomNum = '#';
    for(let i=0;i<6;i++){
        randomNum += hexs[Math.floor(Math.random()*hexs.length)];
        // console.log(randomNum);
    } 
}