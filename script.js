const quiz = {
  q: 'What is 2 + 2?',
  options: ['3','4','5'],
  correct: 1
};

document.getElementById('q').innerText = quiz.q;
document.querySelectorAll('button').forEach((b,i)=>{
  b.innerText = quiz.options[i];
});

function answer(i){
  document.getElementById('result').innerText =
    i === quiz.correct ? 'Correct!' : 'Wrong!';
}
