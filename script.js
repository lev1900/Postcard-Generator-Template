const dropDown = document.getElementById('states');
const postCard = document.getElementById('postcard');
const greetText = document.getElementById('greeting');
const stateHead = document.getElementById('state-heading');

dropDown.addEventListener('change', function() {
    const selectedState = dropDown;
    if (selectedState) {
        greetText.textContent = `Greetings from ${selectedState}!`;

    } else {
        postCard.style.display = 'none';
    }
});
