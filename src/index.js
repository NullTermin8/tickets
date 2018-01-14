$(function(){
	if($('body').hasClass('loginPage')){
		loginButton.onclick = function() {
			var loginMenu = document.getElementById('loginMenu');
			loginForm = new FormData(loginMenu);

			for (var value of loginForm.values()) {
				console.log(value);
			}
			// console.log(loginForm.getAll('email'));
		} 
	}
});
