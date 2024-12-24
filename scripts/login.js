const showlogin = document.querySelector(".dangnhap")
const hidelogin = document.querySelector(".form-login .fa-solid")
showlogin.addEventListener("click",() =>{
  document.body.classList.toggle("showlogin");
});
hidelogin.addEventListener("click",()=>showlogin.click());


const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginBox = document.querySelector('.login-box.loginn');
const signupBox = document.querySelector('.login-box.signup');

signupLink.addEventListener('click', () => {
    loginBox.style.display = 'none';
    signupBox.style.display = 'flex';
});

loginLink.addEventListener('click', () => {
    signupBox.style.display = 'none';
    loginBox.style.display = 'flex';
});

