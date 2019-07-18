"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


//testowe pierdu pierdu
console.log('siema');
const name = 'Marek';
const age = 41;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat.`);

//zmienia, wstawia tekst do .about-me__paragraph--js
const jsFun = document.querySelector(".about-me__paragraph--js");
console.log(jsFun); //wyświetlenie wszystkiego co znajdyje się między znacznikami oznaczonmymi klasą aboutMe__paragraph--js
jsFun.innerHTML = "Jestem początkującym <b>frontendowcem</b>. Pracuję w <strong>TV reżimowej</strong> na stanowisku <i>programista</i>(sic!).";
console.log(jsFun.innerHTML);


//testowe heheszki
function helloWorld(name, age) {
	console.log("Witaj " + name + '.');
	switch (age) {
		case age < 10:
			console.log("Pozwól, że będę ci mówił: gówniarzu.");
			break;
		case 18:
			console.log("O, kolega/koleżanka jest pełnoletni/a.");
			break;
		case age < 20:
			console.log("Jesteśmy nastolatkiem. Zazdroszczę, zazdroszczę.");
			break;
		case age < 30:
			console.log("Szczytowa forma.");
			break;
			case 41:
				console.log("Całe życie przed tobą. Głowa do góry.");
				break;
		case age < 40:
			console.log("Zbliżamy się do szczytu, spokojnie później to już z górki, szybko pójdzie.");
			break;
			
		default:
			console.log("Widzę, że długo tu nie zostaniesz.");
			break;
	}
	return age;
}

const welcome = (name, age) => {
	console.log("Witaj ${name}, masz ${age} lat.")
}

console.log(helloWorld('Marek', 41));



//Kod do pojawiającego się i znikającego menu, hamburger menu.
const navigationSwitcher = document.querySelector(".navigation__switcher--js");

navigationSwitcher.addEventListener('click', (e)=>{
  const navigationList = document.querySelector(".navigation__list--js");
  navigationList.classList.toggle('navigation__list--visible');
  if(navigationList.classList.contains('navigation__list--visible')){
    navigationSwitcher.innerHTML = 'X';
  }else{
    navigationSwitcher.innerHTML = '&#x2261';
  }
})