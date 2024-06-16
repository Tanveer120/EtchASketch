let container = document.querySelector("#container");
let range = document.querySelector("#myRange");
let pixelDiv = document.querySelectorAll(".pixelDiv");
let reset = document.querySelector("button");
let BgColor = document.querySelector("#BgColor");
let GridColor = document.querySelector("#GridColor");
let count = document.querySelector(".count");

updateDrawArea();
range.addEventListener("input",updateDrawArea)

// let pix = prompt("Enter the Number of Pixels in drawboard");
function updateDrawArea() {
    count.textContent = range.value;
    container.innerHTML = ""
    pixelDiv = "";
    let pix = range.value;
    let pixhw = (640 / pix) - 2;

    for (let i = 0; i < pix; i++) {
        for (let j = 0; j < pix; j++) {
            let div = document.createElement("div");
            div.classList = "pixelDiv";
            div.style.cssText = `height : ${pixhw}px; width: ${pixhw}px; background-color: ${BgColor.value}; border: 1px solid black;`;
            container.appendChild(div);
        }
    }
    
    pixelDiv = document.querySelectorAll(".pixelDiv");
}

container.addEventListener("mouseenter", changeClr);

function changeClr() {
    for(let indDiv of pixelDiv){
        indDiv.addEventListener("mouseenter",()=> {
            indDiv.style.backgroundColor = `${GridColor.value}`;
        });
    }
}

BgColor.addEventListener("change", () => {
    for(let indDiv of pixelDiv){
            indDiv.style.backgroundColor = `${BgColor.value}`;
    }
})

reset.addEventListener("click", () => {
    for(let indDiv of pixelDiv){
        indDiv.style.backgroundColor = `white`;
        BgColor.value = "#ffffff";
        GridColor.value = "#000000"
        
}
})

console.log(pixelDiv);

