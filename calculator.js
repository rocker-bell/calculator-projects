
const display = document.getElementById("display")

function Appendtodisplay(input) {
    display.value += input;
}


function Calculate() {

    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = "ERROR"
    }
    
}

function ClearDisplay() {
    display.value = "";
}

