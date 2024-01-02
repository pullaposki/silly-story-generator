const customNameEl=document.getElementById("customname");
const usEl = document.getElementById("us");
const ukEl = document.getElementById("uk");
const generateBtn = document.getElementById("generate");
const storyEl = document.getElementById("story-field");

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
const insertY = ["the soup kitchen","Disneyland","the White House"];
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


generateBtn.addEventListener("click", () => {

    if(customNameEl.value !== '') {
        const name = customNameEl.value;
    }

    let weight = 300;
    let temperature = 94;

    if(ukEl.checked) {
        weight = 1; 
        temperature = 9; 
    }  

    storyEl.style.visibility = "visible";

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    let newStory = `It was ${temperature} fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${customNameEl.value} saw the whole thing, but was not surprised — ${xItem} weighs ${weight} pounds, and it was a hot day.`;

    storyEl.textContent = newStory;
})

function randomValueFromArray(arrayToSelectFrom) {
    const randomNumber = Math.floor(Math.random() * 2);
    
    const selectedElement = arrayToSelectFrom[randomNumber];
    
    return selectedElement;
}