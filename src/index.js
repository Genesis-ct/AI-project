function displayPoem(response){
    new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
});

}



function generatePoem(event){
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions")



let apikey = "1do19d2a8b01973affe324e2a4t3bf02";
let prompt =   `User instructions: Generate a poem about falling in love ${instructionsInput.value}`;
let context = "You are a romantic poem expect and love to write short poems, your mission is to generate a 4 line poem and separate each line with <br />. Make sure to follow the user instructions.";
let apiURL =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;


let poemElement = document.querySelector("#poem")
poemElement.classList.remove("hidden")

   poemElement.innerHTML = `<div class="generating">⏳ Generating a  poem about ${instructionsInput.value}</div>`;
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);

axios.get(apiURL).then(displayPoem);



}




let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem)