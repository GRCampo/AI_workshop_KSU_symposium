document.addEventListener('DOMContentLoaded', () => {
	const decks = document.querySelectorAll('.slide-deck');
	if (!decks.length) return;

	decks.forEach((deck) => {
		const slides = [...deck.querySelectorAll('.slide-deck-slide')];
		if (!slides.length) return;

		const prev = deck.querySelector('.slide-deck-prev');
		const next = deck.querySelector('.slide-deck-next');
		const counter = deck.querySelector('.slide-deck-counter');
		let index = 0;

		const render = () => {
			slides.forEach((slide, i) => {
				slide.hidden = i !== index;
			});
			if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
			if (prev) prev.disabled = index === 0;
			if (next) next.disabled = index === slides.length - 1;
		};

		// Clamped, never modulo: the deck stops at both ends.
		const go = (target) => {
			const clamped = Math.min(Math.max(target, 0), slides.length - 1);
			if (clamped === index) return;
			index = clamped;
			render();
		};

		slides.forEach((slide) => {
			slide.addEventListener('click', () => go(index + 1));
		});
		if (prev) prev.addEventListener('click', () => go(index - 1));
		if (next) next.addEventListener('click', () => go(index + 1));

		deck.addEventListener('keydown', (event) => {
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				go(index + 1);
			} else if (event.key === 'ArrowLeft') {
				event.preventDefault();
				go(index - 1);
			}
		});

		deck.classList.add('slide-deck--ready');
		render();
	});
});
