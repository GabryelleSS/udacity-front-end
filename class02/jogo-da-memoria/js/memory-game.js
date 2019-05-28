const memoryGame = (function() {

    let letters = document.querySelectorAll('li');
    let  numberCardsPlays = document.querySelector('span')
    // let numberPlays = 0;

    function _listLetters() {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                letter.classList.toggle('--is-visible');
            })
            _quantityPlays(0);
        })
    }

    function _quantityPlays(numberPlays) {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                numberPlays++;

                if(numberPlays === 0) {
                    numberCardsPlays.textContent = " "
                    console.log(numberPlays)
                }
                if(numberPlays === 1) {
                    numberCardsPlays.textContent = `${numberPlays} Move`
                }
                else {
                    numberCardsPlays.textContent = `${numberPlays} Moves`
                }
            })
        })
    }

    function _refresh() {
        let arrowRefresh = document.querySelector('.arrow-refresh');

        arrowRefresh.addEventListener('click', function() {
            letters.forEach(function(letter) {
                letter.classList.remove('--is-visible');
            })
            _quantityPlays(0);
            numberCardsPlays.textContent = " ";
        })
    }

    function init() {
        _listLetters();
        _refresh();
    }

    return {
        init,
    }
}());