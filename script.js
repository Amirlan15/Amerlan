
let name = "Amirlan";
let age = 13;

console.log(name);
console.log(age);
let stop = document.querySelector("#stop");
let sdf = document.querySelector("#sdf");

sdf.addEventListener('click', () => {
    stop.textContent = "Зачем нажал!?";
});
    stop.style.color = "#3138389c"
    stop.style.fontWeight = "700"

    sdf.addEventListener("click", function() {
        stop.textContent = "Зачем нажал!?";
        stop.style.color = "#e53935";
        stop.style.fontWeight = "700";
    });
let form = document.querySelector("#from");
let formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent="Спасибо! Сообщение отправлено.";
    formMessage.style.color="green";

    form.reset();
})