let adviceContainer = document.querySelector('#adviceContainer');
let btnGetAdvice = document.querySelector('#btnGetAdvice');



function getAdvice() {

    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObject = adviceData.slip;
        adviceContainer.innerHTML = adviceObject.advice;    
    }).catch(err => {
        adviceContainer.innerHTML = "Error ⛔";
    })
}


window.onload = () => {
    getAdvice();
};


btnGetAdvice.addEventListener('click' , () => {
    getAdvice();
});
