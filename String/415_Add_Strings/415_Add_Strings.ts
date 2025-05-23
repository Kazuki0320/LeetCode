function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1
    let j = num2.length - 1
    let carry = 0
    let result = ""
    
    while(i >= 0 || j >=0 || carry > 0) {
        const digit1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0
        const digit2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0

        const sum = digit1 + digit2 + carry
        carry = Math.floor(sum / 10)
        const currentDigit = sum % 10

        result = String.fromCharCode(currentDigit + 48) + result

        i--
        j--
    }
    return result
};

const num1 = "11"
const num2 = "123"
console.log(addStrings(num1, num2))

