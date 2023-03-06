let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    // document.body.style.backgroundColor = color;

    document.querySelector('h1').style.color = color;
    
});
// Gets user input
var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
println("Hello " + name + "!");
println(num + "?! That's my favorite number too!");

// Prints out the variable type
println("Name is a " + typeof name);
println("Num is a " + typeof num);