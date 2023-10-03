const button = document.getElementById("button");
// The button cannot be inside a function!
button.addEventListener('click', addInput);

function addInput() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let age = document.getElementById("age").value;
    let results = document.getElementById("results");

    // let inputArr = [firstName, lastName, age];

    if (firstName.length < 5) {
        console.log("green");
        this.style.color = "green";
    } else {
        console.log("nooo");
        this.style.color = "red";
    }

    results.innerHTML += `<ul><li>${firstName}</li><li>${lastName}</li><li>${age}</li></ul>`
}

