let userName = "SEAN";
const statesInUS = 50;
let sum = 5+4;
// The objective of this lab assignment is to practice using the fundamentals of JavaScript that were explored in lecture.
function sayHello() {
    let alertBox = alert("Hello World!");
}
sayHello();

function checkAge(personName, age) {
    age < 21 ? alert(`Sorry ${personName} you aren't old enough to view this page!`) : alert(`Ok! ${personName} you may view the page!`);
}
checkAge("Abby", 27);
checkAge("Charles", 21);
checkAge("James", 18);
checkAge("John", 17);


let veggieFav = ['Spinach', 'Potato', 'Carrot'];
veggieFav.forEach(function (entry) {
    console.log(entry);
});

let pet = {
    firstName: "Coco",
    breed: "Golden Retriever"
};
console.log(`${pet.firstName}, ${pet.breed}`);

const people = [
    {
        'firstName': "Sean",
        'age': 17
    },
    {
        'firstName': "Jasmine",
        'age': 13
    },
    {
        'firstName': "Bob",
        'age': 19
    },
    {
        'firstName': "Matthew",
        'age': 21
    },
    {
        'firstName': "Jesse",
        'age': 23
    },
];
for (let i = 0; i <= people.length; i++) {
    checkAge(people[i].firstName, people[i].age);
}

function getLength(string) {
    return string.length;
}

const evenString = getLength("Hello World!");
evenString % 2 === 0 ? console.log("The world is nice and even!") : console.log("The world is an odd place!");