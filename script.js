let dropDown = document.getElementById("states");
let postCard = document.getElementById("postcard");
let greetText = document.getElementById("greeting");
let stateHead = document.getElementById("state-heading");
let stateImage = document.getElementById("states");
dropDown.addEventListener("change", updatePostCard)

function updatePostCard(){
    var selectedState = stateImage.options[stateImage.selectedIndex].text;
    // console.log(selectedState);
    document.getElementById("greeting").textContent = "Greetings from";
    document.getElementById("state-heading").textContent = selectedState;
    postCard.style.backgroundImage = `url('img/${selectedState.value}.jpg')`;
    console.log(`url('img/${selectedState.value}.jpg')`);
}

