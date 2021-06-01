document.addEventListener("DOMContentLoaded", function () {

    //creating the button
    let buttonAddSquare = document.createElement('button');
    buttonAddSquare.id = "buttonAddSquare";
    let buttonAddSquareText = document.createTextNode('Add Square');
    buttonAddSquare.appendChild(buttonAddSquareText);
    document.body.appendChild(buttonAddSquare);

    document.getElementById("buttonAddSquare").addEventListener('click', function () {

        //creating box and class
       let div = document.createElement('div');
       div.className = "black-box";

       // setting box id
       const increment = () => {
           if (sessionStorage.clickcount) {
               sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
           } else {
               sessionStorage.clickcount = 1;
           }
           div.id = sessionStorage.clickcount.toString();
       }
       increment();

       //box styling
       div.style.backgroundColor = "black";
       div.style.height = "50px";
       div.style.width = "50px";
       div.style.margin = "1em";
       div.style.display = "inline-block";

       //dom printing
       document.body.appendChild(div);

        //random color function
        const setRandomColor = () => {
            const randomColor = Math.floor(Math.random()*1677215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
        }
        //updating the box itself
        document.getElementById(div.id).addEventListener('click', setRandomColor);

        //on double click, remove child node
        document.getElementById(div.id).addEventListener('dblclick', function () {
            if (div.id % 2 === 0) {
                let elementID = parseInt(div.id) + 1;
                let element = document.getElementById(elementID);
                if (element == null) {
                    alert(`Square with ID ${elementID} does not exist.`)
                } else {
                    element.parentNode.removeChild(element)
                }
            } else {
                let elementID = parseInt(div.id) - 1;
                let element = document.getElementById(elementID);
                if (element == null) {
                    alert(`Square with ID ${elementID} does not exist.`)
                } else {
                    element.parentNode.removeChild(element);
                }
            }
        });
    });

    //
    // let divClicked = document.getElementsByTagName("div");
    // let divCount = divClicked.length;
    // let clickedDivId
    //
    // for (let i = 0; i < divCount; i+=1) {
    //     divClicked[i].onclick = function (e) {
    //         clickedDivId = this.id;
    //     }
    // }

});


window.onbeforeunload = function (e) {
    sessionStorage.clear();
};
