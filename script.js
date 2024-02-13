const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YES!! Thank you <3";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s1OTc3eGcyeXZsanB3cGFlbGZuMnFmbWdocDRpcnhkOGRkbXV1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xWTNfEu9uAXBnFQIa5/giphy.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Are you sure?";
  gif.src = "https://media.giphy.com/media/huPOZgjL4SWzLkJwH2/giphy.gif";
  
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
