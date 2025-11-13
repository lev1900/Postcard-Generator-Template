const dropDown = document.getElementById('states');
const postCard = document.getElementById('postcard');
const greetText = document.getElementById('greeting');
const stateHead = document.getElementById('state-heading');

dropDown.addEventListener('change', function() {
    const selectedState = dropDown.value;
    console.log(selectedState);
    if (selectedState){
        document.getElementById('greeting').textContent = `Greetings from ${selectedState}!`;
        document.getElementById('state-heading').textContent = selectedState;
        postCard.style.backgroundImage = `url('imgs/${selectedState.toLowerCase()}.jpg')`;

   } 
}
);
