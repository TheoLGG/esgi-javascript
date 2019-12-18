function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}


function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
}


function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    for (let j = 0; j < str.length; j++) {
        str = str.replace(/[^A-Za-z0-9]/gi, " ");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}


function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '_');
}

function prop_access(obj, str) {

    if (str === "" || str === null || typeof obj !== "object") {
        return obj;
    }

    let access = str.trim().split('.');

    let temp = obj;

    for (let i = 0; access.length; i++) {

        if (i == access.length) {
            return temp;
        }

        if (!Object.prototype.hasOwnProperty.call(temp, access[i])) {
            console.log(str + " not exist");
            return false;
        }


        temp = temp[access[i]];

    }
    return temp;

}


function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str.replace(/[aeiouy]/ig, function(car) {
        switch (car) {
            case "A":
            case "a":
                return 4;
            case "E":
            case "e":
                return 3;
            case "I":
            case "i":
                return 1;
            case "O":
            case "o":
                return 0;
            case "U":
            case "u":
                return (_);
            case "Y":
            case "y":
                return 7;
        }
    });
}

function verlan(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str.split(" ").map(function(word) {
        return word.split("").reverse().join('');
    }).join(" ");
}

function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(" ").reverse().join(" ");
}

function vig(str, code) {
    if (typeof str !== "string" || str.length === 0) return "";
    while (code.length < str.length) {
        code += code;
    }
    let codeIndex = 0;
    return str.split("").map(function(car) {
        car = car.toLowerCase();
        const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

        if (carCode < 0 || carCode > 25) return car;
        const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);

        const encodedCode = (carCode + codeCode) % 26;

        return String.fromCharCode(encodedCode + 'a'.charCodeAt(0));
    }).join('');
}