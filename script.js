const globe = document.querySelector("#globe");
const button= document.querySelector("#shake");
const message= document.querySelector(".message");

const messages= [
    "you are someone's favouraite person to sit next to.",
    "someone thinks about you when they are happy",
    "Trusting yourself was your greatest asset",
    "hot choclate tastes better after working hard on your passion. You've earned it",
    "Failure is the reason we become good in it , don't get disheartened.",
];

button.addEventListener("click",() => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"),600);
    
  const pick= Math.floor(Math.random()* messages.length);
  message.textContent =messages[pick];
});



