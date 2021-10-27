const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color= document.querySelector('.color');

btn.addEventListener('click', ()=>{
    const randomNumber = getRandom();
    // console.log(randomNumber) // to check the random numbers from colors length
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 
})
function getRandom(){
    return Math.floor(Math.random()*colors.length)
}
