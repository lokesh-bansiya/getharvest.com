function navbar() {
  window.onscroll=function(e) {
    if(window.pageYOffset>5){
      document.querySelector('header').style.boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
    }else{
      
      document.querySelector('header').style.boxShadow="none";

    }
  }


  return `<div id="navbar">
    <div>
      <img id="orange" src="https://i.ibb.co/pXRS2p3/image.png" alt="" />
      <img id="black" src="https://i.ibb.co/qCVbqVB/image.png" alt="" />
      <a href="about.html">Why Harvest?</a>
      <a href="features.html">Features</a>
      <a href="customers.html">Customers</a>
    </div>
    <div>
      <a href="login.html" id='user'>Sign in</a>
      <button class="signup"><a href="signup.html">Try Harvest free</a></button>
      <button id="menu">
        <img id="openmenu"
          src="http://dce.rocketausgate.com/_images/menu-icon.png"
          alt=""
        />
        <img id="closemenu" src="https://flexitauctions.com/wp-content/uploads/2019/01/white-x-png-2.png" alt="">
        Menu
      </button>
    </div>
  </div>
  <div id="menudiv">
    <div>
      <div><a href="about.html"> Why Harvest?</a></div>
      <div><a href="features.html"> Features</a></div>
      <div><a href="customers.html"> Customers</a></div>
    </div>

    <div>
      <button class="menuBtn"><a href="login.html">Sign in</a></button>
      <button class="menuBtn"><a href="signup.html">Try Harvest free</a></button>
    </div>
  </div>`;
}

function openMenu() {
  document.getElementById("menudiv").style.display = "inherit";
  document.getElementById("openmenu").style.display = "none";
  document.getElementById("closemenu").style.display = "inherit";
}

function closeMenu() {
  document.getElementById("menudiv").style.display = "none";
  document.getElementById("closemenu").style.display = "none";
  document.getElementById("openmenu").style.display = "inherit";
}


function checklogin() {
  
  let username=localStorage.getItem('username');

  if(username){
  let user=document.querySelector('#user');
  user.href='#';
  user.innerText=`Hi, ${username}`;

  let logout=document.querySelector('.signup');
  logout.innerHTML='';
  logout.innerText='Logout';
  logout.onclick=function(e) {
    localStorage.removeItem('username');
    window.location.href='login.html';

  }
}
}

export { navbar, openMenu, closeMenu ,checklogin};
