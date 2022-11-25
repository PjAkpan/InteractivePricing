const input = document.querySelector(".range-input");
const output = document.querySelector(".value");
const range = document.querySelector(".range-input");
const check = document.querySelector(".toggle");
const period = document.querySelector(".period");

input.value = 16;
check.checked = false;

let amt = input.value, x = 1;

output.innerHTML = `$${amt}`;

check.addEventListener("click", ()=>{
    if(check.checked == true){
        x = 9;
        period.textContent = " / year";
        outValue();
    }else{
        x = 1;
        period.textContent = " / month";
        outValue();
    }
})

input.addEventListener("input", ()=>{
    let per = 100*input.value/32;
    range.style.background = "linear-gradient(90deg ,hsl(174, 77%, 80%) " + per + "%, hsl(224, 65%, 95%) " + per + "%)";
    outValue();
})

function outValue(){
    amt = input.value*x;
    output.innerHTML = `$${amt}`;
}