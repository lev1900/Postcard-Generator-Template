let dropDown = document.getElementById("states");
let postCard = document.getElementById("postcard");

dropDown.addEventListener("change", updatePostCard);

function updatePostCard(){
    var selectedState = dropDown.options[dropDown.selectedIndex].text;
    var stateAbbr = dropDown.value;
    document.getElementById("greeting").textContent = "Greetings from";
    document.getElementById("state-heading").textContent = selectedState;
    postCard.style.backgroundImage = `url('img/${stateAbbr}.jpg')`;
}

