document.addEventListener('DOMContentLoaded', function() {
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




//@obuhdaniel modal implementation
document.getElementById('register').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        fetch('https://ideate.szone.com.ng/submit-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            showModal();
            document.getElementById('email').value = '';
            errorMessage.style.display = 'none';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    } else {
        errorMessage.style.display = 'block';
    }
});

    const modal = document.getElementById("successModal");
    const closeBtn = document.querySelector(".close");
    const closeButton = document.querySelector(".btn-close");
    closeBtn.addEventListener("click", function() {
        closeModal();
    });
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            closeModal();
        });
    }
    
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
    function closeModal() {
        modal.style.opacity = "0";
        setTimeout(function() {
            modal.style.display = "none";
            modal.style.opacity = "1";
        }, 300);
    }
    function showModal() {
        modal.style.display = "block";
    }
    
});