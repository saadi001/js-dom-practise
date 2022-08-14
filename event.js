// Important 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
function reset(){
    document.body.style.backgroundColor = 'white';
}
function makeblue(){
    document.body.style.backgroundColor = 'blue';
}
function makeblack(){
    document.body.style.backgroundColor = "#0D0D0D";
}

// evenlistener 
const makePurple = document.getElementById('purple');

makePurple.addEventListener('click', function makePurple(){
    document.body.style.backgroundColor = 'purple';
});

// important 
// another way 
document.getElementById('green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
});