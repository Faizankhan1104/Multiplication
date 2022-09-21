const num1 = Math.ceil (Math.random() * 10);
const num2 = Math.ceil (Math.random() * 10);

const questionEl = document.getElementById('question');
const inputE1 = document.getElementById('input');
questionEl.innerText = `what is ${num1} multiply by ${num2}?`;
const formE1 = document.getElementById('form');
const scoreE1 = document.getElementById('score')
let score = JSON.parse(localStorage.getItem('score'));
   if(!score){
        score = 0;
}

scoreE1.innerText = `Score: ${score}`

const correctAns = num1 * num2;
formE1.addEventListener("submit" , () => {
    const userAns = +inputE1.value;
    if(userAns === correctAns){
        score++;
        updatelocalStorage()
    }else{
        score--;
        updatelocalStorage()
    }
});
function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
