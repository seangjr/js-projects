document.addEventListener("DOMContentLoaded", function () {

    let headerContainer = document.createElement('div');
    headerContainer.className = "header-container";
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    h1.className = ("h1");
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    h2.className = ("h2");
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    h3.className = ("h3");
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    h4.className = ("h4");
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    h5.className = ("h5");
    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    h6.className = ("h6");

    h1.appendChild(h1Text);
    h2.appendChild(h2Text);
    h3.appendChild(h3Text);
    h4.appendChild(h4Text);
    h5.appendChild(h5Text);
    h6.appendChild(h6Text);
    headerContainer.appendChild(h1);
    headerContainer.appendChild(h2);
    headerContainer.appendChild(h3);
    headerContainer.appendChild(h4);
    headerContainer.appendChild(h5);
    headerContainer.appendChild(h6);

    let ol = document.createElement('ol');
    ol.id = "myList";
    document.body.appendChild(headerContainer);

    const setColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        h1.style.color = "#" + randomColor;
    }

    document.addEventListener("dblclick", setColor);
    setColor();


    document.getElementById("myBtn").addEventListener('click', function () {
        let li = document.createElement("li");
        let liText = document.createTextNode(`This is list item`);
        li.appendChild(liText);
        ol.appendChild(li);
        document.body.appendChild(ol);

        const setColorListItem = () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            li.style.color = '#'+randomColor;
        }

        document.addEventListener('click', setColorListItem);
        setColorListItem();

    });

});

// nothing line