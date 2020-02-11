String.prototype.ucfirst = function () {
    if (typeof this !== "string" || this.length === 0) return "";
    return this[0].toUpperCase() + this.substring(1);
}

String.prototype.camelCase = function () {
    var str = this;
    if (typeof str !== "string" || str.length === 0) return "";
    for (let j = 0; j < str.length; j++) {
        str = str.replace(/[^A-Za-z0-9]/gi, " ");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = array[i++].ucfirst();
    }
    return array.join("");
};


Object.prototype.prop_access = function (str) {

    if (str === "" || str === null) {
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

String.prototype.interpolate = function (obj) {
    var debut = this.search(/\{\{/);
    if(debut != -1){
        var fin = this.search(/\}\}/);
        var key = this.slice(debut + 2, fin).trim();
        return this.replace(/\{\{.*\}\}/, obj.prop_access(key));
    }
    return this;

};

String.prototype.type_check_v1 =  function(value) {
    switch (typeof value) {
        case 'object':
            if (Array.isArray(value)) return this === "array";
            if (value === null) return this === "null";
        default:
            return typeof value === this;
    }
};

Object.prototype.type_check_v2 = function(value) {
    for(let key in this){
        switch (key) {
            case 'type':
                if(!this[key].type_check_v1(value)) return false;
                break;
            case 'value':
                if(value != this[key]) return false;
                break;
            case 'enum':
                if(this[key].indexOf(value) == -1) return false;
                break;
        }
    }
    return true;
};