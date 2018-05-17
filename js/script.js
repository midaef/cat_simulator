
var m = 0;
	ms = 1;
	health = 100
	fun = 100
var	timer
var	lifetimer

window.onload = function() {
	document.getElementById("fun").style.width = fun + '%';
	document.getElementById("h").style.width = health + '%';
	// timer = window.setInterval(work, 1000);
	lifetimer = window.setInterval(life, 1400)
	lifetimer = window.setInterval(life, 1400)
}

function life() {
	fun = fun - 0.4
	health = health - 0.2
	if (fun < 0) {
		fun = 0
	}
	document.getElementById("fun").style.width = fun + '%';
	document.getElementById("h").style.width = health + '%';
}

function showmenu() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('menu').style.display = 'block';
	document.getElementById('ch').style.display = 'none';
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

function show_money() {
	money3()
	m = m + ms
	document.cookie = 'm=' + m + ';'
	var elem = document.getElementById('score')
	elem.innerHTML = 'MONEY: ' + m
}