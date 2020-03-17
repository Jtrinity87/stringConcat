function myFunction(){
    let greeting = "Hello";
    let firstName = "Sandra";
    let lastName = "Dee";
    let msg = greeting.concat(firstName, lastName);
    console.log(msg)
}

myFunction.call("greeting", "firstName", "lastName");