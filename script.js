//Slider

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
	showSlides(slideIndex += 1);
}

function previousSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('slider__slide');

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let slide of slides) {
		slide.style.display = 'none';
	}
	slides[slideIndex - 1].style.display = 'flex';
}

//Scroll Up

const btnUp = {
	el: document.querySelector('.btn-up'),
	scrolling: false,
	show() {
		if (this.el.classList.contains('btn-up--hide') && !this.el.classList.contains('btn-up--hiding')) {
			this.el.classList.remove('btn-up--hide');
			this.el.classList.add('btn-up--hiding');
			window.setTimeout(() => {
				this.el.classList.remove('btn-up--hiding');
			}, 300);
		}
	},
	hide() {
		if (!this.el.classList.contains('btn-up--hide') && !this.el.classList.contains('btn-up--hiding')) {
			this.el.classList.add('btn-up--hiding');
			window.setTimeout(() => {
				this.el.classList.add('btn-up--hide');
				this.el.classList.remove('btn-up--hiding');
			}, 300);
		}
	},
	addEventListener() {
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			if (this.scrolling && scrollY > 0) {
				return;
			}
			this.scrolling = false;
			if (scrollY > 400) {
				this.show();
			} else {
				this.hide();
			}
		});
		document.querySelector('.btn-up').onclick = () => {
			this.scrolling = true;
			this.hide();
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}

btnUp.addEventListener();