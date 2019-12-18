String.prototype.ucfirst = function () {
    if (this.length === 0) return "";
    return this[0].toUpperCase() + this.substring(1);
};

//console.log("theo".ucfirst());

String.prototype.capitalize = function () {
    if (typeof this !== "object" || this.length === 0) return "";
    const array = this.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
};

String.prototype.camelCase = function () {
    if (typeof this !== "object" || this.length === 0) return "";
    var str = this;
    for (let j = 0; j < this.length; j++) {
        str = this.replace(/[^A-Za-z0-9]/gi, " ");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = array[i++].ucfirst();
    }
    return array.join("");
};


Object.prototype.prop_access = function (str) {

    if (str === "" || str === null ) {
        return this;
    }

    let access = str.trim().split('.');

    let temp = this;

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
//console.log({animal:{type:{name:"chien"}}}.prop_access("animal.type.name"));
