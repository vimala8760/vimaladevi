var input = document.getElementById("input");
function add(v) {
    input.value += v;
}

function clear() {
    input.value = "";
}

function result() {
    input.value = eval(input.value);
}

function cancel() {
    input.value = input.value.substr(0, input.value.length - 1);
}