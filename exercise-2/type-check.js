function type_check_v1(type, check) {
    if (typeof check !== "string" || !check) return false;
    if (check === "object" && type === null) return false;
    if (check === "null" && type === null) return true;
    if (check === "array" && Array.isArray(type)) return true;
    if (typeof type === check) {
        return true
    } else return false;
}

function type_check_v2() {

}

function type_check_v3() {

}