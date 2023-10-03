const button = document.getElementById("button");
// The button cannot be inside a function!
button.addEventListener('click', addInput);

function addInput() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let age = document.getElementById("age").value;
    let results = document.getElementById("results");

    results.innerHTML += `<ul><li>${firstName}</li><li>${lastName}</li><li>${age}</li></ul>`

    if (firstName.length > 5) {
        console.log("green");
        results.querySelectorAll
    } else {
        console.log("nooo");
    }
}

