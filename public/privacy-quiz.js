document.addEventListener('DOMContentLoaded', () => {
	const quiz = document.querySelector('.privacy-quiz');
	if (!quiz) return;

	quiz.querySelectorAll('.privacy-quiz-answer').forEach((panel) => {
		panel.hidden = true;
	});

	quiz.addEventListener('click', (event) => {
		const button = event.target.closest('.privacy-quiz-btn');
		if (!button) return;
		const item = button.closest('.privacy-quiz-item');
		const panel = item && item.querySelector('.privacy-quiz-answer');
		if (panel) {
			panel.hidden = false;
		}
	});
});
