document.addEventListener("DOMContentLoaded", function () {
    let paragraph = document.createElement('p');
    let text = document.createTextNode('This is a text');
    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase";
    paragraph.className = "some-paragraph";
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click me!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    document.addEventListener('click', function () {
        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode("I've been clicked!");

        h2.appendChild(h2Text);
        document.body.appendChild(h2);

    });
});
