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

    });
});


window.onbeforeunload = function (e) {
    sessionStorage.clear();
};
