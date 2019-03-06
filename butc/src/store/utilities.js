
export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export function getSum(values) {
    return values.reduce(function (sum, value) {
        return sum + value;
    }, 0);
}

export function count(values, target) {
    var counts = 0
    for (var key in values) {
        if (values[key] === target) {
            counts += 1
        }
    }
    return counts
}
