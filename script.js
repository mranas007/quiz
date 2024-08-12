const qiuzDB = [
    {
        question: "Q1: whats the full form of HTML?",
        a: "hello to my land",
        b: "HyperText Makeup Language",
        d: "Hey text Markup language",
        c: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: whats the full form of css?",
        a: "Cascading style sheet",
        b: "Cascading style sheep",
        d: "Cartoon style sheets",
        c: "Cascading super sheet",
        ans: "ans1"
    },
    {
        question: "Q3 : what is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Text Protocol",
        d: "Hey Transfer Protocol",
        c: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "Javasuper",
        d: "JustScript",
        c: "JordenShoes",
        ans: "ans1"
    },
    {
        question: "Q5: What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cascading Stylish Sheets",
        d: "Cute Style Sheets",
        c: "Cool Style Sheets",
        ans: "ans1"
    },
    {
        question: "Q6: What is the file extension of a JavaScript file?",
        a: ".java",
        b: ".script",
        d: ".js",
        c: ".javascript",
        ans: "ans3"
    },
    {
        question: "Q7: What is the purpose of the 'head' element in HTML?",
        a: "To define the body of the document",
        b: "To provide metadata about the document",
        d: "To display content on the webpage",
        c: "To define a header for a section",
        ans: "ans2"
    },
    {
        question: "Q8: Which of the following is NOT a valid data type in JavaScript?",
        a: "String",
        b: "Boolean",
        d: "Character",
        c: "Number",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
const hideDisplay = document.querySelectorAll('#display')
const scroeShow = document.querySelector('#scroeShow');


let quetionCount = 0;
let score = 0;

// showing the question and option Answers 

const loadQuetion = () => {
    let questionList = qiuzDB[quetionCount];
    question.innerText = questionList.question
    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d
}
loadQuetion();


// getting the answer ids 

const getCheckAnswer = () => {
    let answer;
    answers.forEach((crntAnsChecked) => {
        if (crntAnsChecked.checked) {
            answer = crntAnsChecked.id
        };
    });
    return answer
};


submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();

    if (checkAnswer === qiuzDB[quetionCount].ans) {
        score++
    };
    if (quetionCount < qiuzDB.length - 1) {
        quetionCount++;
    } else {
        scroeShow.style.display = "flex";
        scroeShow.innerHTML = `<h1>Your Total Score: ${score} / ${qiuzDB.length}</h1> <button id="playAgainBtn">Play Again</button>`;
        const playAgainBtn = document.getElementById('playAgainBtn');
        playAgainBtn.addEventListener('click', () => {
            quetionCount = 0;
            score = 0;
            scroeShow.style.display = "none";
            loadQuetion();
        });
    }

    answers.forEach((check) => {
        check.checked = false;
    })

    loadQuetion();
});


