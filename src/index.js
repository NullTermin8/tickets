let STATE = {};

$(function(){
	if($('body').hasClass('loginPage')){
		loginButton.onclick = function(e) {
      e.preventDefault();
			const loginForm = document.getElementById('loginMenu');

      lib.lasfter.db['@dev'].login({email: loginForm.email.value, password: loginForm.password.value})
        .then(data => STATE = data)
        .then(() => window.history.pushState(STATE, "dashboard", "event_dashboard.html"))
        .catch(err => console.log(err));
		} 
	}
});
