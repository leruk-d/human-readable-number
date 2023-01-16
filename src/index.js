module.exports = function toReadable(number) {
    let arr10 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    let arr20 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    // console.log (arr20[number]);
    let arrDozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    // console.log (arrDozens[number]);
    if (number < 10) {
        return arr10[number];
    } else if (number < 20) {
        return arr20[Array.from(String(number))[1]];
    } else if (number < 100) {
        return arr10[Array.from(String(number))[1]] == "zero"
            ? arrDozens[Array.from(String(number))[0]]
            : arrDozens[Array.from(String(number))[0]] +
                  " " +
                  arr10[Array.from(String(number))[1]];
    } else if (number < 1000) {
        return arr10[Array.from(String(number))[1]] === "zero" &&
            arr10[Array.from(String(number))[2]] === "zero"
            ? arr10[Array.from(String(number))[0]] + " " + "hundred"
            : arr10[Array.from(String(number))[1]] === "zero"
            ? arr10[Array.from(String(number))[0]] +
              " " +
              "hundred" +
              " " +
              (arr10[Array.from(String(number))[2]] === "zero"
                  ? ""
                  : arr10[Array.from(String(number))[2]])
            : arr10[Array.from(String(number))[0]] +
              " " +
              "hundred" +
              " " +
              (arr10[Array.from(String(number))[1]] == "one"
                  ? arr20[Array.from(String(number))[2]]
                  : arrDozens[Array.from(String(number))[1]] +
                    (arr10[Array.from(String(number))[2]] === "zero"
                        ? ""
                        : " " + arr10[Array.from(String(number))[2]]));
    }
};
