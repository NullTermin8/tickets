$(function(){
  if($('body').is('.loginPage')){
    var loginMenu = document.getElementById('loginMenu');
    loginForm = new FormData(loginMenu);

    loginButton.onclick = function() {
      loginForm.append(loginMenu);
      // console.log(loginMenu);
      console.log(loginForm);
    }    //call specific functions
  }
});
