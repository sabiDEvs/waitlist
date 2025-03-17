const div = document.querySelector('.menu');
const header = document.querySelector('header');
div.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
    
    if(document.querySelector('.nav').className === 'nav active'){
        document.querySelector('header').style.marginBottom = '20vh'; 
    }
    else{
        document.querySelector('header').style.marginBottom = '0';
    }
});
header.appendChild(div);