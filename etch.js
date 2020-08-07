const main = document.querySelector("body");
const mainDiv = document.createElement("div");

main.appendChild(mainDiv);
mainDiv.style.display = "flex";
mainDiv.style.flexWrap = "wrap";
mainDiv.style.height = "600px";
mainDiv.style.width = "600px";

const clearButton = document.createElement("button");
clearButton.innerHTML = "Clear the picture.";
main.appendChild(clearButton);
clearButton.addEventListener('click', reset);

function makeGrid(n){
    let divPercent = 100/n;
    let strPercent = `${divPercent}%`
    for (let i=0; i<n*n; i++){
        let gridDiv = document.createElement("div");
        gridDiv.style.height = strPercent;
        gridDiv.style.width = strPercent;
        gridDiv.style.boxSizing = "border-box";
        gridDiv.style.backgroundColor = "gray";
        gridDiv.style.border = "1px solid black";
        gridDiv.addEventListener('mouseover', () => gridDiv.style.backgroundColor = setRandomColor());
        mainDiv.appendChild(gridDiv);
    }
}

function setRandomColor(){
    let randomColor = "#"
    let hexvals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for(let i=0; i<6; i++){
        randomColor += hexvals[Math.floor(Math.random()*16)]
    }
    return randomColor;
}

function reset(){
    divs = document.getElementsByTagName("div");
    for(let i=0; i<divs.length; i++){
        divs[i].style.backgroundColor = "gray";
    }
    let squares = prompt("How many squares each way this time?", "4");
    mainDiv.innerHTML = "";
    makeGrid(squares);
}

makeGrid(4);



