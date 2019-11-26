function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst('test'));
console.log(ucfirst('Test'));
console.log(ucfirst('3est'));
console.log(ucfirst('rest rezf'));
console.log(ucfirst(''));
console.log(ucfirst(null));
console.log(ucfirst({}));

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
}

console.log(capitalize('test test'));
console.log(capitalize('Test test'));
console.log(capitalize('3est test'));
console.log(capitalize('rest rezf'));
console.log(capitalize(''));
console.log(capitalize(null));
console.log(capitalize({}));

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}

console.log(camelCase('tést test'));
console.log(camelCase('Test test'));
console.log(camelCase('3est test'));
console.log(camelCase('rest rezf'));
console.log(camelCase(''));
console.log(camelCase(null));
console.log(camelCase({}));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().toString().split(" ");
    var reg = new RegExp("[ ._-]+", "g");
    return array.join("_");
}

console.log(snake_case('tést test'));
console.log(snake_case('Test test'));
console.log(snake_case('3est test'));
console.log(snake_case('rest rezf'));
console.log(snake_case(''));
console.log(snake_case(null));
console.log(snake_case({}))