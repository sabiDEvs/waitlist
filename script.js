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


document


document.getElementById('register').addEventListener('click', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const loading = document.getElementById('loading');
    const form = document.getElementById('form');
    const registerButton = document.getElementById('register');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none'; 
    }


    registerButton.style.display = 'none';
    loading.style.display = 'block'; 

    fetch('https://ideate.szone.com.ng/submit-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if (response.headers.get('content-type')?.includes('application/json')) {
            return response.json(); 
        } else {
            throw new Error('Invalid response format'); 
        }
    })
    .then(() => {

        showModal(); 
        emailInput.value = '';
        errorMessage.style.display = 'none'; 
    })
    .catch((error) => {
        console.error('Error:', error); 
       
    })
    .finally(() => {
        loading.style.display = 'none';
        form.style.display = 'none';
        // registerButton.style.display = 'inline-block';
    });
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

    function subscribe(email){
        fetch('https://ideate.szone.com.ng/submit-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => {
            if (response.headers.get('content-type')?.includes('application/json')) {
                return response.json(); 
            } else {
                throw new Error('Invalid response format'); 
            }
        })
        .then(() => {
    
           })
        .catch((error) => {
        })
        .finally(() => {
        });
    }
    
});