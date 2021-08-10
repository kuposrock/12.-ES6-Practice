const name = "John";
const age = 101;

function runForLoop(pets) {
    var petObjects = [];
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] };
        let name;
        if (pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log("pet name: ", name);
        pet.name = name;
        petObjects.push(pet);
    }
    console.log("man name: ", name);
    return petObjects;
}

runForLoop(["cat", "dog"]);
const carrots = ["bright orange", "ripe", "rotten"]
console.log(mapVegetables(carrots));
function mapVegetables(arr) {
    return arr.map(carrot=>{
        return { type: "carrot", name: carrot };
    });
}

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
];
console.log(filterForFriendly(people));
function filterForFriendly(arr) {
    return arr.filter(person=> {
        return person.friendly;
    });
}

doSomeMath = (a,b) => {
    return a+b;
};

produceProduct = (a, b)=> {
    return a * b;
};

printString =(firstName="Jane",lastName="Doe",age2=100)=>{
return `Hi ${firstName} ${lastName}, how does it feel to be ${age2}?`;
};
console.log(printString());

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
filterForDogs = arr => { return (arr.filter(animal =>(animal.type=="dog")?true:false));} 
 
console.log(filterForDogs(animals));

var input = require('readline-sync');
var name3 = input.question('What is your name?');
var location = input.question('Where would you like to go?');

 console.log( `Welcome to ${location}!\nI hope you enjoy your stay ${name3}.`);

