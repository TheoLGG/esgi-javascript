function type_check_v1(value, type) {
    if (value == null && type == null || typeof value == undefined && type == undefined) {
        return true;
    }
    if (typeof input === type) {
        if (input === null && type === "object") {
            return false
        }
        return true
    }
    if (type === "array" && input.constructor === Array ) {
        return true
    }

    return false
}
