function exampleFunction(_) {
    var y;
    var line = "exampleLine"; // Assuming 'line' is some default value or defined elsewhere

    return arguments.length ? (y = typeof _ === "function" ? _ : constant$3(+_), line) : y;
}

function constant$3(value) {
    return function() {
        return value;
    };
}

// Example Usages:
console.log(exampleFunction(5)); // ["exampleLine"]
console.log(exampleFunction(function() { return 10; })); // ["exampleLine"]
console.log(exampleFunction()); // undefined
