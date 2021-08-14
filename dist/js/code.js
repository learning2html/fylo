const form = document.querySelectorAll('form');
const submits = document.querySelectorAll('.submit');

submits.forEach((submit) => {
    submit.addEventListener('click', () => {
        const subBtn = event.target;
        if(subBtn.previousElementSibling.value != ""){
            // console.log(event.target);
            // const span = document.createElement('span');
            // span.innerText = 'Please check your email';           
            // subBtn.parentElement.appendChild(span);
            subBtn.nextElementSibling.classList.add('show-span');
        }
        else{
            subBtn.nextElementSibling.classList.remove('show-span');
        }
    });
});
