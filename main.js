var login = prompt ('Кто пришел?');
if (login == 'Админ') {
	var pass = prompt ('Пароль?');
	if (pass == 'Чёрный Властелин'){
		alert('Добро пожаловать');
	}
	else if (pass = null){
		alert('Вход отменен');
	}
	else {
		alert('Пароль неверен');
	}
}

if (login != 'Админ'){
	alert('Я вас не знаю');
}



