const submit = document.querySelector('.submit');
const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const rating = document.querySelectorAll('.btn_num');
const score = document.querySelector('.score');
let first_score = 4

submit.addEventListener('click', onsubmit);
rating.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onsubmit(){
    card_1.classList.add('hide');
    score.textContent = first_score;
    card_2.classList.remove('hide');
//console.log('submit click');
}
function handleRatingBtnClick(event){
    rating.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    first_score = event.target.textContent;
    console.log('first_score');
}
//console.log(rating);