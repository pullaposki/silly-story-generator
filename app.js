const customNameElement = document.getElementById("customname");
const usRadioButton = document.getElementById("us");
const ukRadioButton = document.getElementById("uk");
const generateButton = document.getElementById("generate");
const storyField = document.getElementById("story-field");

const characterNames = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const locations = ["the soup kitchen", "Disneyland", "the White House"];
const situations = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

const US_WEIGHT = 300;
const US_TEMPERATURE = 94;
const UK_WEIGHT = 1;
const UK_TEMPERATURE = 9;

generateButton.addEventListener("click", () => {
    handleClick();
})

function handleClick(){
    let customName = chooseName(customNameElement.value);    
    let weight = chooseWeight();
    let temperature = chooseTemperature();

    storyField.style.visibility = "visible";
    storyField.textContent = generateStory(customName, weight, temperature);
}

function generateStory(customName, weight, temperature) {
    const characterName = randomValueFromArray(characterNames);
    const location = randomValueFromArray(locations);
    const situation = randomValueFromArray(situations);

    return `It was ${temperature} fahrenheit outside, so ${characterName} went for a walk. When they got to ${location}, they stared in horror for a few moments, then ${situation}. ${customName} saw the whole thing, but was not surprised — ${characterName} weighs ${weight} pounds, and it was a hot day.`;
}

function randomValueFromArray(arrayToSelectFrom) {
    const randomNumber = Math.floor(Math.random() * 2);
    return arrayToSelectFrom[randomNumber];
}

function chooseWeight() {
    if (ukRadioButton.checked) return UK_WEIGHT;
    return US_WEIGHT;
}

function chooseTemperature() {
    if (ukRadioButton.checked) return UK_TEMPERATURE;
    return US_TEMPERATURE;
}

function chooseName(customNameElementValue) {
    if(customNameElementValue !== ""){
        return customNameElementValue;
    }

    return "Bob";
}