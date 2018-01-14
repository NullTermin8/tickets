$(function(){
	if($('body').hasClass('loginPage')){
		loginButton.onclick = function(e) {
      e.preventDefault();
			const loginForm = document.getElementById('loginMenu');

      $("body").css("cursor", "wait");
      $(e.target).css("cursor", "wait");
      lib.lasfter.db.login({email: loginForm.email.value, password: loginForm.password.value})
        .then(data => document.cookie = JSON.stringify(data))
        .then(() => window.location = "landing.html")
        .catch(err => console.log(err));
		} 
	}

	if($('body').hasClass('signupPage')){
		signupButton.onclick = function(e) {
      e.preventDefault();
			const signupForm = document.getElementById('signupMenu');

      $("body").css("cursor", "wait");
      $(e.target).css("cursor", "wait");
      lib.lasfter.db.signup({email: signupForm.email.value, password: signupForm.password.value})
        .then(data => document.cookie = JSON.stringify(data))
        .then(() => window.location = "login.html")
        .catch(err => {
          $("body").css("cursor", "default");
          $(e.target).css("cursor", "default");
          console.log(err);
        });
		} 
	}

	// reloadUserData for events page
	if($('body').hasClass('landing')){
		// call reloadUserData
	}
});
