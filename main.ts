/**  Unchanged Magicians: Start with your work from Exercise 40. Call the function 
make_great() with a copy of the array of magicians’ names. Because the original 
array will be unchanged, return the new array and store it in a separate array. Call 
show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name. */

let magicianceNames2 = ["Charle", "David", "Bratlee", "Hook"]
let magicianceNamesCopy = [...magicianceNames2];

function show_magicians(greet: string) {
    let withGreetings = "";

    for(let item of magicianceNamesCopy){
        withGreetings += `${greet} ${item}\n`;

    }
    return withGreetings;
};
let myGreetings = show_magicians("Hello");
let makeArry = myGreetings.split('\n');
console.log(makeArry);

console.log(magicianceNames2);
