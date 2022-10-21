document.querySelector('#logo').addEventListener('click',()=>{
    window.location.href='index.html';
  });
  
let RegisterUser = JSON.parse(localStorage.getItem("RegisterUser"))||[];


document.querySelector("form button").addEventListener("click", verify);


function verify() {
    event.preventDefault();
    
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let flag=false;
    let username;
    for(let i=0; i<RegisterUser.length; i++) {
        if(RegisterUser[i].email==email && RegisterUser[i].password==password) {
           flag=true;
           username=RegisterUser[i].firstName;
        }
    }

    if(flag) {
        alert('Login Successfull');
        localStorage.setItem('username', username);
        window.location.href = 'index.html';
    }else{
        alert('Please check the credential or sign up first');
        return;
    }
}