let firstName = "Stas";

printName();

// Function declarations are conceptually moved to the top of their scope
// and can be used by all the code in that scope.
function printName() {
    console.log(getName());
}

function getName() {
    return firstName;
}
