window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let cardsList = document.querySelector('.cards-section'),
        cardElement = document.querySelectorAll('.cards-section__card-img'),
        cardSlogan = document.querySelectorAll('.cards-section__card-slogan'),
        cardDiscription = document.querySelectorAll('.cards-section__card-discription'),
        cardCircle = document.querySelectorAll('.cards-section__circle'),
        cardText = ['Печень утки разварная с артишоками.', 'Головы щучьи с чесноком да свежайшая сёмгушка.', 'Филе из цыплят с трюфелями в бульоне.'];

        cardsList.addEventListener('click', function(cardClick) {
            let target = cardClick.target;
            
            if (target && target.classList.contains('cards-section__card-img')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardElement[i].classList.remove('cards-section__card-img');
                        cardElement[i].classList.add('cards-section__card-img--active');
                        cardCircle[i].classList.remove('cards-section__circle');
                        cardCircle[i].classList.add('cards-section__circle--active');
                        cardDiscription[i].innerHTML = cardText[i];
                        break;
                    }
                }
            } else if (target && target.classList.contains('cards-section__card-img--active')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardElement[i].classList.add('cards-section__card-img');
                        cardElement[i].classList.remove('cards-section__card-img--active');
                        cardCircle[i].classList.add('cards-section__circle');
                        cardCircle[i].classList.remove('cards-section__circle--active');
                        cardDiscription[i].innerHTML = 'Чего сидишь? Порадуй котэ, <a class="cards-section__card-discription-buy">купи.</a>';
                        cardSlogan[i].innerHTML = 'Сказочное заморское яство';
                        cardSlogan[i].classList.remove('cards-section__card-slogan--hover')
                        cardCircle[i].classList.remove('cards-section__circle--active-hover');
                        break;
                    }
                }
            }
        });

        cardsList.addEventListener('mouseover', function(cardClick) {
            let target = cardClick.target;
            
            if (target && target.classList.contains('cards-section__card-img')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.remove('cards-section__circle');
                        cardCircle[i].classList.add('cards-section__circle--hover');
                        break;
                    }
                }
            } else if (target && target.classList.contains('cards-section__card-img--active')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.add('cards-section__circle--active-hover');
                        cardCircle[i].classList.remove('cards-section__circle--active');
                        cardSlogan[i].innerHTML = 'Котэ не одобряет?';
                        cardSlogan[i].classList.add('cards-section__card-slogan--hover')
                        break;
                    }
                }
            }
        });

        cardsList.addEventListener('mouseout', function(cardClick) {
            let target = cardClick.target;
            
            if (target && target.classList.contains('cards-section__card-img')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.add('cards-section__circle');
                        cardCircle[i].classList.remove('cards-section__circle--hover');
                        break;
                    }
                }
            } else if (target && target.classList.contains('cards-section__card-img--active')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.remove('cards-section__circle--active-hover');
                        cardCircle[i].classList.add('cards-section__circle--active');
                        cardSlogan[i].innerHTML = 'Сказочное заморское яство';
                        cardSlogan[i].classList.remove('cards-section__card-slogan--hover')
                        break;
                    }
                }
            }
        });



});