const colors = ["#6A5ACD", "#0000FF", "#87CEFA", "#008B8B", "#00FA9A", "#ADFF2F", "#A0522D", "#7B68EE", "#4B0082", "#C71585", "#FF4500"]

const btn = document.getElementById("btn")

const color = document.querySelector(".color")

btn.addEventListener("click", function () {

    const ramdomNumber = getRamdomNumber();
    console.log(ramdomNumber)
    document.body.style.backgroundColor = colors[ramdomNumber]
    color.textContent = colors[ramdomNumber];
})

function getRamdomNumber() {
    return Math.floor(Math.random() * colors.length);
}