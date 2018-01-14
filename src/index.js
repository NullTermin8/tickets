let STATE = {};

$(function(){
	if($('body').hasClass('loginPage')){
		loginButton.onclick = function(e) {
      e.preventDefault();
			const loginForm = document.getElementById('loginMenu');

      lib.lasfter.db.login({email: loginForm.email.value, password: loginForm.password.value})
        .then(data => STATE = data)
        .then(() => window.location = "landing.html")
        .catch(err => console.log(err));
		} 
	}

	if($('body').hasClass('signupPage')){
		signupButton.onclick = function(e) {
      e.preventDefault();
			const signupForm = document.getElementById('signupMenu');

      lib.lasfter.db.signup({email: signupForm.email.value, password: signupForm.password.value})
        .then(data => STATE = data)
        .then(() => window.location = "login.html")
        .catch(err => console.log(err));
		} 
	}

	// reloadUserData for events page
	if($('body').hasClass('landing')){
		// call reloadUserData
	}
});
