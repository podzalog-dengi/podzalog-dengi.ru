var s_domain_global = 'https://lk.office-controller.ru'


function getCookie(name) {
	var cookie = ' ' + document.cookie;
	var search = ' ' + name + '=';
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(';', offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
function myload(a1,a2) {
	setTimeout(function() {
		var a3 = document;
		a4 = a3.getElementsByTagName('script')[0];
		a5 = a3.createElement('script');
		a6 = escape(a3.referrer);
		a5.type = 'text/javascript';
		a5.async = true;
		var a10 = 'utf';
		if (document.characterSet == 'windows-1251') {
			a10 = 'win';
		}
		a5.src = a2+'?uid='+a1+'&a6='+a6+'&a7='+location.host+'&a8='+getCookie('my1witid'+a1)+'&a9='+Math.random()+'&a10='+a10;
		a4.parentNode.insertBefore(a5, a4);
	},1)
}

/* --- проверяем включен ли сайт --- */

var s_load_widgets = false;
var s_right_menu = 'off';

setTimeout(function(){
	if(uid_code == 1310){
		uid_code = 1445;
	}
	var xhr = new XMLHttpRequest();
	xhr.open("GET", s_domain_global+'/modal_wt/check.php?callback=&uid='+ uid_code +'&loc='+ location.host, true);
	xhr.onload = function (){
		// 4. Если код ответа сервера не 200, то это ошибка
	if (xhr.status != 200) {
		 // обработать ошибку
		 // alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
	} else {
		if (xhr.responseText != 'off') s_load_widgets = true;
		s_right_menu = xhr.responseText;
	}
	//console.log(s_load_widgets);
	if (s_load_widgets) {
		setTimeout(function() {
			if(uid_code == 1310){
				uid_code = 1445;
			}
		myload(uid_code,s_domain_global+'/php/1.php');
		},100);
		
		setTimeout(function(){
			if(!window.jQuery){
				var body = document.querySelector('body');
				var doc = document;
				var jQuery = doc.createElement('script');
				jQuery.type = 'text/javascript';
				var char = 'utf-8';
				jQuery.charset = char;
				jQuery.src = s_domain_global+'/jquery_plagin.js';
				body.appendChild(jQuery);
			}
		},50);
		// 1. Создаём новый объект XMLHttpRequest

		setTimeout(function(){
			if (xhr.responseText == 'on'){
					var body = document.querySelector('body');
					var right_menu = document.createElement('div');
					var arrow_in = document.createElement('div');
					var arrow_out = document.createElement('div');
					arrow_in.className = 'modal_arrow_in_of_ctr';
					arrow_in.innerHTML = '<img src="https://lk.office-controller.ru/sites/default/files/arrow_in.png" alt="">';

					arrow_out.className = 'modal_arrow_out_of_ctr';
					arrow_out.innerHTML = '<img src="https://lk.office-controller.ru/sites/default/files/arrow_out.png" alt="">';

					right_menu.className = 'right_menu_of_ctr';
					right_menu.appendChild(arrow_in);
					right_menu.appendChild(arrow_out);
					body.appendChild(right_menu);
					
					var doc = document;
					var script = doc.createElement('script');
					var esc = escape(doc.referrer);
					script.type = 'text/javascript';
					var char = 'utf-8';
					script.charset = char;
					script.src = s_domain_global+'/modal_wt/callback_wt.js';
					body.appendChild(script);
			}
		},100);
		setTimeout(function(){
			var fd = new FormData();
			fd.append('uid', uid_code);
			fd.append('loc', location.host);
			fd.append('all_loc', location);
				jQuery.ajax({
					type: 'POST',
					url: s_domain_global+'/modal_wt/leed.php',
					data: fd,
					contentType: false,
					processData: false,
					success(data){
						jQuery('body').append(data);
					}
				});
		},100);
		}
	}
	xhr.send(null);
	
	
	// fcm google notification system
	
	if (location.host == 'segaweb.ru' /*|| location.host == 'polymerkub.ru'*/) {
		var body = document.querySelector('body');
		var doc = document;
		var script = doc.createElement('script');
		var esc = escape(doc.referrer);
		script.type = 'text/javascript';
		var char = 'utf-8';
		script.charset = char;
		script.src = 'https://www.gstatic.com/firebasejs/6.5.0/firebase-app.js';
		script.addEventListener('load', postLoadFunction);
		body.appendChild(script);
		
		function postLoadFunction() {
			var script = doc.createElement('script');
			var esc = escape(doc.referrer);
			script.type = 'text/javascript';
			var char = 'utf-8';
			script.charset = char;
			script.src = 'https://www.gstatic.com/firebasejs/6.5.0/firebase-messaging.js';
			script.addEventListener('load', postLoadFunction2);
			body.appendChild(script);
		}    
		 
		function postLoadFunction2() {
			var script = doc.createElement('script');
			var esc = escape(doc.referrer);
			script.type = 'text/javascript';
			var char = 'utf-8';
			script.charset = char;
			script.src = s_domain_global+'/sites/all/modules/custom/s_fcm_notify_helper/js/firebase_subscribe.js';
			script.addEventListener('load', postLoadFunction3);
			body.appendChild(script);
		}
		
		function postLoadFunction3() {
			//var script = doc.createElement('script');
			//var inlineScript = document.createTextNode("const messaging = firebase.messaging();");
			//script.appendChild(inlineScript);
			//body.appendChild(script);
		}
		
		//setTimeout(function(){
			//var script = doc.createElement('script');
			//var esc = escape(doc.referrer);
			//script.type = 'text/javascript';
			//var char = 'utf-8';
			//script.charset = char;
			//script.src = 'https://lk.office-controller.ru/sites/all/modules/custom/s_fcm_notify_helper/js/firebase-messaging.js';
			//body.appendChild(script);
		//},1000);
		
	}

},50);
