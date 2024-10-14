  var questions = [ 

	{

		question: "как зовут главную героиню фильма "Сумерки"?",

		answer: "белла"

	},

	{

		question: "От кого Эдвард спас Беллу в 1 части?",

		answer: "насильников"

	},

	{

		question: "Блюдо какой кухни готовили Каллены для знакомства с Беллой?",

		answer: "итальянской"

	},

	{

		question: "Марка машины Эдварда?",

		answer: "volva"

	},

	{

		question: "И давно тебе 17?",

		answer: "уже да"

	}

]
for(i = 0; i < questions.length; i++) {

	q = questions[i].question

	document.getElementById('question' + [i]).textContent = q

}



function testResults() {

	var correct = 0;

	var incorrect = 0;

	for(i = 0; i < questions.length; i++) {	

		var answer = questions[i].answer

		var guess = document.getElementById('answer' + [i]).value

		var questionSpot = document.getElementById('question' + [i])

		if(answer == guess) {

			questionSpot.className = 'correct'

			correct++

		} else {

			questionSpot.className = 'incorrect'

			incorrect++

		}

	}

	document.getElementById('correct').textContent = correct

	document.getElementById('incorrect').textContent = incorrect

}
