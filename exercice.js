function addition(arg1, arg2) {
    return arg1 + arg2;
}

function soustraction(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    return arg1 / arg2;
}

function calcule() {
    var arg1 = parseInt(prompt('premier argument : '));
    var arg2 = parseInt(prompt('second argument : '));
    alert(addition(arg1, arg2) + '\n' + soustraction(arg1, arg2) + '\n' + multiplication(arg1, arg2) + '\n' + division(arg1, arg2));
}

calcule();