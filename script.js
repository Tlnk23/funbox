window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let cardsList = document.querySelector('.cards-section'),
        cardElement = document.querySelectorAll('.cards-section__card-img'),
        cardSlogan = document.querySelectorAll('.cards-section__card-slogan'),
        cardDiscription = document.querySelectorAll('.cards-section__card-discription'),
        cardCircle = document.querySelectorAll('.cards-section__circle'),
        cardBuy = document.querySelectorAll('.cards-section__card-discription-buy'),
        cardText = ['Печень утки разварная с артишоками.', 'Головы щучьи с чесноком да свежайшая сёмгушка.', 'Филе из цыплят с трюфелями в бульоне.'];

        cardsList.addEventListener('click', function(cardClick) {
            let target = cardClick.target;

            if (target.classList.contains('cards-section__card-discription-buy')) {
                return;
            } else {
                while ((target.classList[0] != 'cards-section__card-img')) {
                    target = target.parentNode;
                }
            }

            if (target && target.classList.contains('cards-section__card-img') && target.classList.contains('cards-section__card-img--active')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardElement[i].classList.remove('cards-section__card-img--active');
                        cardCircle[i].classList.remove('cards-section__circle--active');
                        cardDiscription[i].innerHTML = 'Чего сидишь? Порадуй котэ, <p class="cards-section__card-discription-buy">купи.</p>';
                        cardSlogan[i].innerHTML = 'Сказочное заморское яство';
                        cardSlogan[i].classList.remove('cards-section__card-slogan--hover')
                        cardCircle[i].classList.remove('cards-section__circle--active-hover');
                        break;
                    }
                }
            } else if (target && target.classList.contains('cards-section__card-img')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardElement[i].classList.add('cards-section__card-img--active');
                        cardCircle[i].classList.add('cards-section__circle--active');
                        cardDiscription[i].innerHTML = cardText[i];
                        break;
                }
            }
        }
        });

        cardsList.addEventListener('mouseover', function(cardHoverIn) {
            let target = cardHoverIn.target;
            
            if (target.classList.contains('cards-section__card-discription-buy')) {
                return;
            } else {
                while ((target.classList[0] != 'cards-section__card-img')) {
                    target = target.parentNode;
                }
            }

            if (target && target.classList.contains('cards-section__card-img--active')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.add('cards-section__circle--active-hover');
                        cardCircle[i].classList.remove('cards-section__circle--active');
                        cardSlogan[i].innerHTML = 'Котэ не одобряет?';
                        cardSlogan[i].classList.add('cards-section__card-slogan--hover')
                        break;
                    }
                }
            } else if (target && target.classList.contains('cards-section__card-img')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.remove('cards-section__circle');
                        cardCircle[i].classList.add('cards-section__circle--hover');
                        break;
                    }
                }
            }
        });

        cardsList.addEventListener('mouseout', function(cardHoverOut) {
            let target = cardHoverOut.target;

            if (target.classList.contains('cards-section__card-discription-buy')) {
                return;
            } else {
                while ((target.classList[0] != 'cards-section__card-img')) {
                    target = target.parentNode;
                }
            }
            
            if (target && target.classList.contains('cards-section__card-img--active')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.remove('cards-section__circle--active-hover');
                        cardCircle[i].classList.add('cards-section__circle--active');
                        cardSlogan[i].innerHTML = 'Сказочное заморское яство';
                        cardSlogan[i].classList.remove('cards-section__card-slogan--hover')
                        break;
                    }
                }
            } else if (target && target.classList.contains('cards-section__card-img')) {
                for(let i = 0; i < cardElement.length; i++) {
                    if (target == cardElement[i]) {
                        cardCircle[i].classList.add('cards-section__circle');
                        cardCircle[i].classList.remove('cards-section__circle--hover');
                        break;
                    }
                }
            }
        });

    console.log(cardBuy.length);    
    cardsList.addEventListener('click', function(cardBuyClick) {
        let target = cardBuyClick.target;
        console.log(target);
        if (target.classList.contains('cards-section__card-discription-buy')) {
            console.log(target);
            for(let i = 0; i < cardBuy.length; i++) {
                if (target == cardBuy[i]) {
                    cardElement[i].classList.add('cards-section__card-img--active');
                    cardCircle[i].classList.add('cards-section__circle--active');
                    cardDiscription[i].innerHTML = cardText[i];
                    break;
            }
        }
        }
    });

});