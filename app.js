//Generates a silly story when the "Generate random story" button is pressed.

//Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.

//Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the     generate button is pressed.

//Generates a new random silly story every time the button is pressed.

const customNameEl=document.getElementById("customname");
const usEl = document.getElementById("us");
const ukEl = document.getElementById("uk");
const generateBtn = document.getElementById("generate");
const storyEl = document.getElementById("story-field");

generateBtn.addEventListener("click", () => {
    console.log("should generate");
    storyEl.style.visibility = "visible";
    storyEl.innerText = "should generate";
})

function Generate(){
    
}

