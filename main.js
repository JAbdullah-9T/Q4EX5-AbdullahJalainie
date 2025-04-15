function checkOrder() {
    var choice = document.getElementById('inputChoice').value.toUpperCase();

    switch (choice) {
        case "B":
            document.getElementById('choiceResult').innerHTML = "You ordered Burger!";
            break;
        case "F":
            document.getElementById('choiceResult').innerHTML = "You ordered Fries!";
            break;
        case "S":
            document.getElementById('choiceResult').innerHTML = "You ordered Soda!";
            break;
        default:
            document.getElementById('choiceResult').innerHTML = "Invalid Order. Try again :)";
    }
}

