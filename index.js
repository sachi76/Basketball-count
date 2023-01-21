let homeEl =document.getElementById("pls1")
let guestEl =document.getElementById("guest")

let count = 0;
let countG = 0;

function plusOne(){
    count +=1
    homeEl.textContent = count
    
}
function plusTwo(){
    count +=2
    homeEl.textContent = count

    
}
function plusThree(){
    count +=3
    homeEl.textContent = count   
}

function plusOne1(){
    countG +=1
    guestEl.textContent = countG
    
}
function plusTwo2(){
    countG +=2
    guestEl.textContent = countG

    
}
function plusThree3(){
    countG +=3
    guestEl.textContent = countG  
}
