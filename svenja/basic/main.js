const button = document.getElementById("button");
// The button cannot be inside a function!
button.addEventListener('click', addInput);

function addInput() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let age = document.getElementById("age").value;
    let prof = document.getElementById("profession").value;

    let results = document.getElementById("result-group");
    let input = [firstName, lastName];
    // console.log(input);

    results.innerHTML += `<ul class="output"></ul>`;
    // console.log(results.innerHTML);
    let outputList = document.querySelector(".output");

    for (i = 0; i < input.length; i++) {
        if (input[i].length > 5) {
            outputList.innerHTML += `<li style="color:blue">${input[i]}</li>`;
        } else {
            outputList.innerHTML += `<li style="color:red">${input[i]}</li>`;
        }
    }
    outputList.innerHTML += `<li>${age}</li>`;

    if (prof == "One") {
        outputList.innerHTML += `<li id="purple">${prof}</li>`;
        document.getElementById("purple").classList.add("bg-purple");
    } else if (prof == "Two") {
        outputList.innerHTML += `<li id="yellow">${prof}</li>`;
    } else {
        outputList.innerHTML += `<li>${prof}</li>`;
    }
}