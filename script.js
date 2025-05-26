function init() {
    var searchInput = document.getElementById('name');
    var bookCards = document.getElementsByClassName('book-card');
 
    for (var i = 0; i < bookCards.length; i++) {
        (function(card) {
            card.addEventListener('click', function() {
                if (card.classList.contains('flipped')) {
                    card.classList.remove('flipped');
                } else {
                    card.classList.add('flipped');
                }
            });
        })(bookCards[i]);
    }

    searchInput.addEventListener('input', function() {
        var query = searchInput.value.toLowerCase();

        for (var i = 0; i < bookCards.length; i++) {
            var card = bookCards[i];
            var titleElem = card.getElementsByClassName('book-title')[0];
            var authorElem = card.getElementsByClassName('book-front')[0].getElementsByTagName('p')[1];
            var backElem = card.getElementsByClassName('book-back')[0];

            var title = titleElem.textContent.toLowerCase();
            var author = authorElem.textContent.toLowerCase();
            var backDetails = backElem.textContent.toLowerCase();

            if (title.indexOf(query) !== -1 || author.indexOf(query) !== -1 || backDetails.indexOf(query) !== -1) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

init();
