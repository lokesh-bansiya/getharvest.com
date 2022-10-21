document.querySelector('#logo').addEventListener('click',()=>{
  window.location.href='index.html';
});


document.querySelector("form button").addEventListener("click", Register);

let RegisterUser = JSON.parse(localStorage.getItem("RegisterUser")) || [];

function Register() {
  event.preventDefault();
  
  let form = document.querySelector("form");

  class User {
    constructor(first, last, company, email, password) {
      this.firstName = first;
      this.lastName = last;
      this.companyName = company;
      this.email = email;
      this.password = password;
    }
  }

  let userinfo = new User(
    form.first.value,
    form.last.value,
    form.company.value,
    form.email.value,
    form.password.value
  );
  
  if(userinfo.password.length<8){
    alert("Password must be at least 8 characters");
    return;
  }

  let str = "!@#$%^&*";
  let flag = false;

  for (let i = 0; i < str.length; i++) {
    if ((userinfo.password).includes(str[i])) {
      flag=true;
    }
  }

if(flag){

    let isRegistered = false;

    for(let i=0;i<RegisterUser.length;i++) {

        if(RegisterUser[i].email==userinfo.email){
            isRegistered=true;
            break;
        }
    }

    if(isRegistered){
        alert('User already registered');
        return;
    }else{

        RegisterUser.push(userinfo);
        
        localStorage.setItem("RegisterUser", JSON.stringify(RegisterUser));
        alert("User registration successful");
        window.location.href='login.html';
    }

    
}else{
    alert("Password must include special characters");
    return;

}
}
