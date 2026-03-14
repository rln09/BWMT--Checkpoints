function performAction() {
    let displayElement = document.getElementByID("display"); // Wrong method name
    displayElement.innerHTML = "Button Clicked!"
    console.log("Action performed")
}