characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


  console.log("--------question 1.1 --------------------------------------");
  characters.filter(character => 
    {
    if(character.eye_color == "blue") 
    console.log(character.name)

    });


console.log("----------question 1.2  -------------------------------------");
characters.filter(character => {
    if(character.mass > 50)
        console.log(character.gender)
});

console.log("----------question 1.3  -------------------------------------");
characters.filter(character => {
    if(character.height <200)
        console.log(character)
});
  


console.log("-----------question 1.4--------------------------------------");
characters.filter(character => {
    if(character.gender == "male")
        console.log(character)
});



console.log("-----------question 1.5--------------------------------------");
console.log(characters.map(character => character.name));



console.log("-----------question 1.6--------------------------------------");
console.log(characters.map(character => character.height));



console.log("-----------question 1.7--------------------------------------");
console.log(characters.slice().sort((a, b) => a.mass - b.mass));



console.log("-----------question 1.8--------------------------------------");
console.log(characters.slice().sort((a, b) => a.height - b.height));




console.log("-----------question 1.9--------------------------------------");
console.log(characters.every(character => character.mass <= 40));



console.log("-----------question 1.10--------------------------------------");
console.log(characters.every(character => character.height <= 200));



 console.log("-----------question 1.11--------------------------------------");
 console.log(characters.some(character => character.eye_color == "blue"));



 console.log("-----------question 1.12--------------------------------------");
 console.log(characters.some(character => character.height <= 210));
