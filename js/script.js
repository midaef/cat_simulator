
var m = 50;
	ms = 1;
	health = 100
	fun = 100
var	timer
var	lifetimer

window.onload = function() {
	
	document.getElementById("fun").style.width = fun + '%';
	document.getElementById("h").style.width = health + '%';
	timer = window.setInterval(work, 1500);
	lifetimer = window.setInterval(life, 2200)
	// ----------------------------------------------------------------------------------------
	cookiem = document.cookie.replace(/(?:(?:^|.*;\s*)m\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookiems = document.cookie.replace(/(?:(?:^|.*;\s*)ms\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookieh = document.cookie.replace(/(?:(?:^|.*;\s*)health\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookief = document.cookie.replace(/(?:(?:^|.*;\s*)fun\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookien = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	if (cookien == '') {
		var name = prompt('Name of your cat:' , 'Bob')
		if (name == "" || name == null) {
			location = location
		}
		document.cookie = 'name=' + name + ';'
	} else {
		name = cookien
	}
	if (cookiem == '') {
		m = 0
		document.cookie = 'm=' + m + ';'
	} else {
		m = parseInt(cookiem)
	}

	if (cookiems == '') {
		ms = 1
		document.cookie = 'ms=' + ms + ';'
	} else {
		ms = parseInt(cookiems)
	}

	if (cookieh == '') {
		health = 48
		document.cookie = 'health=' + health + ';'
	} else {
		health = parseInt(cookieh)
	}

	if (cookief == '') {
		fun = 52
		document.cookie = 'fun=' + fun + ';'
	} else {
		fun = parseInt(cookief)
	}

	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('name').innerHTML = 'Name: ' + name;

	// ----------------------------------------------------------------------------------------
}


function work() {
	m = m + 10
	elem = document.getElementById('score')
	elem.innerHTML = 'MONEY: ' + m
	document.cookie = 'm=' + m + ';'
}

function life() {
	if (health > 0 && fun > 0) {
		fun = fun - 1
		health = health - 0.5
		if (fun < 0) {
			fun = 0
		} 
		document.getElementById("fun").style.width = fun + '%';
		document.getElementById("h").style.width = health + '%';
		document.cookie = 'fun=' + fun + ';'
		document.cookie = 'health=' + health + ';'
	} else {
		alert('Your cat died! :(', title='CAT SIMULATOR')
		window.clearInterval(lifetimer);
		window.clearInterval(timer);
		location = location
	}
}
	

function showmenu() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('menu').style.display = 'block';
	document.getElementById('status').style.display = 'none';
	document.getElementById('ch').style.display = 'none';
	document.getElementById('rn').style.display = 'none';
	document.getElementById('settings').style.display = 'none';
	document.getElementById('cp').style.display = 'none';
	document.getElementById('about').style.display = 'none';
	document.getElementById('start').style.display = 'none';
	document.getElementById('market').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'CAT SIMULATOR';
	document.getElementById('exit').innerHTML = '';
}

function showgame() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('start').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('about').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'CAT';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
}

function money3() {
	element = document.getElementById('start')
	element.setAttribute('src', 'img/cat1.gif')
}

function showmarket() {
	var elem = document.getElementById('score')		
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('menu').style.display = 'none';
	document.getElementById('status').style.display = 'block';
	document.getElementById('status').innerHTML = 'STATUS: NONE';
	document.getElementById('market').style.display = 'block'
	document.getElementById('about').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'MARKETPLACE';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
	document.getElementById('plus');
}

function about() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('about').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'ABOUT';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
}

function set() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('settings').style.display = 'block';
	document.getElementById('rn').style.display = 'block';
	document.getElementById('about').style.display = 'none';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'SETTINGS';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
}

function competitions() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('cp').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'COMPETITIONS';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
}

function ch() {
	var e = document.getElementById('h').style.width = health + '%'
	var e = document.getElementById('fun').style.width = fun + '%'
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('ch').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'CHARACTERISTICS';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
}

function moneyplus() {
	element = document.getElementById('plus')
	if (m >= 500) {
		ms = ms + 1;
		m = m - 500;
		document.cookie = 'm=' + m + ';'
		document.cookie = 'ms=' + ms + ';'
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You bought improved!'
		var elem1 = document.getElementById('score')
		elem1.innerHTML = 'MONEY: ' + m
	}
	else {
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: Not enough money!'
	}
}

function walk() {
	var e = document.getElementById('w')
	if (fun < 91) {
		fun = fun + 10
		document.cookie = 'fun=' + fun + ';'
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You went for a walk!'
	} else {
		elem1 = document.getElementById('status')
		elem1.innerHTML = 'STATUS: Your cat is very cheerful!'
	}
}

function heal() {
	var e = document.getElementById('he');
	if (health < 91 && m >=70) {
		m = m - 70
		document.cookie = 'm=' + m + ';'
		document.cookie = 'health=' + health + ';'
		health = health + 10
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You bought improved!'
	} else if (health > 90 && m>=70) {
		elem1 = document.getElementById('status')
		elem1.innerHTML = 'STATUS: Your cat is very healthy!'

	} else {
		elem2 = document.getElementById('status')
		elsem2.innerHTML = 'STATUS: Not enough money!'
	}
}

function rn() {
	var name = prompt('Name of your cat:' , 'Bob')
	if (name == "" || name == null) {
		location = location
	}
	document.getElementById('name').innerHTML = 'Name: ' + name;
	document.cookie = 'name=' + name + ';'
}

function travel() {
	var e = document.getElementById('he');
	if (m >=1000 && fun < 20) {
		m = m - 1000
		fun = fun + 70
		document.cookie = 'm=' + m + ';'
		document.cookie = 'fun=' + fun + ';'
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You bought improved!'
	} else if (fun > 20 && m >=1000) {
		elem1 = document.getElementById('status')
		elem1.innerHTML = 'STATUS: Your cat is very cheerful!'

	} else {
		elem2 = document.getElementById('status')
		elem2.innerHTML = 'STATUS: Not enough money!'
	}
}

function show_money() {
	money3()
	m = m + ms
	document.cookie = 'm=' + m + ';'
	var elem = document.getElementById('score')
	elem.innerHTML = 'MONEY: ' + m
}