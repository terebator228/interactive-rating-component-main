const numbers = document.querySelectorAll('.rating__circle'),
      sum = document.querySelector('.rating__sum span'),
      btn = document.querySelector('.btn'),
      thanksModal = document.querySelector('.rating_thanks');

let rating = 5;

function activeNumber(i = 4) {
    numbers.forEach(item => {
        item.classList.remove('rating__circle_active');
    })
    numbers[i].classList.add('rating__circle_active');
}

function showThanksModal() {
    thanksModal.style.display = 'block'
}

numbers.forEach((item, i) => {
    item.addEventListener('click', e => {
        rating = +e.target.getAttribute('id')
        activeNumber(rating - 1)
    })
})

btn.addEventListener('click', e => {
    showThanksModal();
    sum.textContent = rating;
})

activeNumber();