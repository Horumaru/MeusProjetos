

// help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// [1, 9, 9, 0]
// [2, 0, 0, 8]

// [   M,   D,   C,  L,  X, V, I]
// [1000, 500, 100, 50, 10, 5, 1]

function solution(num) {
    String(num)
    // Define the Roman numeral values and their corresponding strings
    var val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ]
    var syms = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ]

    roman_numeral = ''
    i = 0

    while (num > 0) {
        // Determine how many times the current value can be subtracted from num
        for (i in range(num/val[i])){
            roman_numeral += syms[i]
            num -= val[i]
        }
        i += 1
    }
    return roman_numeral
}