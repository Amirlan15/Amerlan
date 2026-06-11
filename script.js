
let name = "Amirlan";
let age = 13;

console.log(name);
console.log(age);
let stop = document.querySelector("#stop");
let sdf = document.querySelector("#sdf");

sdf.addEventListener('click', () => {
    stop.textContent = "Зачем нажал!?";
});
    stop.style.color = "#0066ff"
    stop.style.fontWeight = "700"

    sdf.addEventListener("click", function() {
        stop.textContent = "Зачем нажал!?";
        stop.style.color = "#e53935";
        stop.style.fontWeight = "700";
    });