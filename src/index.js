function generatePoem(event){
event.preventDefault();


new Typewriter("#poem", {
  strings: "I do not love you except because I love you;",
  autoStart: true,
  delay: 1,
  cursor:"",
});

}




let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem)