import { createQRCode } from './qrCodeCreator/qr_creator.js';
import * as qrPacked from './qrCodeReader/qr_packed.js';
import * as qrCodeReader from './qrCodeReader/qrCodeReader.js';

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
	
	$('#generateQR').click(function() {
		console.log("print");
		createQRCode(document.getElementById('fromID').value,document.getElementById('cost').value,document.getElementById('eventID').value,document.getElementById('TTL').value);
	});

	if($('body').hasClass('signupPage')){
		signupButton.onclick = function(e) {
      e.preventDefault();
			const signupForm = document.getElementById('signupMenu');

      $("body").css("cursor", "wait");
      $(e.target).css("cursor", "wait");
      lib.lasfter.db.signup({email: signupForm.email.value, password: signupForm.password.value})
        .then(data => document.cookie = JSON.stringify(data))
        .then(() => window.location = "landing.html")
        .catch(err => {
          $("body").css("cursor", "default");
          $(e.target).css("cursor", "default");
          console.log(err);
        });
		} 
	}

	if($('body').hasClass('landing')){
		// if(JSON.parse(document.cookie))
		var details = JSON.parse(document.cookie);
		var attending = [];
		var organizing = [];
		lib.lasfter.db.reload_user_data(details.token, details.user.id)
			.then(function(events) { for (var i of events){
				if (events[i].user_id == details.user.id) {
					attending.push(events[i]);
				} else {
					organizing.push(events[i]);
				}}})
			.then(() => console.log(attending))
			.then(() => console.log(organizing));
	}
});
