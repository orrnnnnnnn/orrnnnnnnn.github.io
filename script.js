const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Thank you >____<";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjR5dGc3b29yNndvc3JwbHR0ZGY1czdrZ3I0bWhzeHVmd3JsZTJ4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mnEmgej63Z4RIQ/giphy.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Are you sure?";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});
