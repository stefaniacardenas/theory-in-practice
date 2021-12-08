var isValid = function(s) {
    const closing = {
        ']': '[',
        ')': '(',
        '}': '{'
    }
    let open = []

    const arr1 = s.split("")

    for (let char of arr1) {
        if (!closing[char]) {
            open.push(char)
        }
        else if (closing[char] === open[open.length - 1]) {
            open.pop()
        }
        else {
            return false
        }
    }
    return !open.length
}

module.exports = isValid
