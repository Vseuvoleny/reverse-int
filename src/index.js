module.exports = function reverse(n) {
    let string = String(n);
    if(string[0] === '-'){
        string = string.slice(1)
    }
    return +Array.from(string)
        .reverse()
        .join("");
};
