const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			window.scrollTo(0,0);
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();


var swiper = new Swiper(".swiper-promotions", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".swiper-gallery", {
	slidesPerView: 1,
	spaceBetween: 19,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
	
	breakpoints: {
		// when window width is <= 499px
  
		1440: {
		  slidesPerView: 2,
		  spaceBetween: 40,
		},
  
		991: {
		  slidesPerView: 2,
		  spaceBetween: 19,
		},

		800: {
			slidesPerView: 2,
			spaceBetween: 19,
		},
  
		// 580: {
		//   slidesPerView: 3,
		//   spaceBetween: 10,
		// },
  
		// 380: {
		//   slidesPerView: 2,
		//   spaceBetween: 10,
		// },
	}
  });

  var swiper = new Swiper(".swiper-stock", {
	slidesPerView: 1,
	spaceBetween: 19,
    navigation: {
      nextEl: ".swiper-button__stock-next",
      prevEl: ".swiper-button__stock-prev",
    },
	breakpoints: {
		// when window width is <= 499px
  
		1440: {
		  slidesPerView: 3,
		  spaceBetween: 19,
		},

		400: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
  
		// 580: {
		//   slidesPerView: 3,
		//   spaceBetween: 10,
		// },
  
		// 380: {
		//   slidesPerView: 2,
		//   spaceBetween: 10,
		// },
	},
  });

// var swiper = new Swiper('.swiper-gallery', {
// 	nextButton: '.swiper-button-next',
// 	prevButton: '.swiper-button-prev'
//  });

function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hide_password2(target){
	var input = document.getElementById('password-input2');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}