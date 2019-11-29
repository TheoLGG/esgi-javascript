function type_check_v1(vari, type) {
    switch(typeof vari){
        case 'object':
            if(Array.isArray(vari)) return type === "array";
            if(vari === null) return type === "null";
        default:
            return typeof  vari === type;
    }

}

function type_check_v2(vari, conf) {
    // for(key in conf){
    //     switch (key) {
    //         case 'type':
    //             if(!type_check_v1((vari,conf[key]))) return false;
    //             break;
    //         case 'value':
    //             if(!type_check_v1((vari,conf[key]))) return false;
    //             break;
    //         case 'enum':
    //             if(!type_check_v1((vari,conf[key]))) return false;
    //             break;
    //     }
    // }
}

function type_check() {

}