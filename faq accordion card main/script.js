const qAndA = document.querySelectorAll('.question-and-answer');
const arrow = document.querySelectorAll('.arrow-icon');
for (let i = 0; i < qAndA.length; i++) {
	qAndA[i].addEventListener('click', function() {
		this.classList.toggle('active');
		this.classList.toggle('turn-around')
	})
}

