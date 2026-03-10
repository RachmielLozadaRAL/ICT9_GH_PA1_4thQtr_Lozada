// JavaScript Conditional

function identify_sign() {
    const num1 = parseFloat(document.getElementById("input1").value);
    if (num1 > 0) {
        document.getElementById('output').innerHTML = "It is positive.";
    } else if (num1 === 0) {
        document.getElementById('output').innerHTML = "It is zero.";
    } else {
        document.getElementById('output').innerHTML = "It is negative.";
    }
}

function odd_or_event() {
    const num1 = parseInt(document.getElementById('input1').value, 10);
    if (!isNaN(num1)) {
        if (num1 % 2 === 0) {
            window.alert('It is an even number');
        } else {
            window.alert('It is an odd number');
        }
    } else {
        window.alert('Please enter a valid integer.');
    }
}