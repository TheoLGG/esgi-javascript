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


// function camelCase(str) {
//     if (typeof str !== "string" || str.length === 0) return "";
//     const array = str.toLowerCase().split(" ");
//     var re = new RegExp("(?:_))", "g");
//     for (let i = 0; i < array.length;) {
//         array[i] = re.exec(array[i++]);
//     }
//     return array.split("");
// }

// console.log(camelCase('tést_test'));
// console.log(camelCase('Test_test'));
// console.log(camelCase('3est_test'));
// console.log(camelCase('rest_rezf'));
// console.log(camelCase(''));
// console.log(camelCase(null));
// console.log(camelCase({}));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = array[i++];
    }
    return array.join("_");
}

function prop_access() {

}


function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    let voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
    let replace = ['4', '3', '1', '0', '(_)', '7'];
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < voyelle.length; i++) {
            str = str.replace(voyelle[i], replace[i]);
        }
    }
    return str;
}

function verlan(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    var array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split("").reverse().join("");
    }
    return array.join(" ");
}



function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(" ").reverse().join(" ");
}

function vig(str, key) {

}