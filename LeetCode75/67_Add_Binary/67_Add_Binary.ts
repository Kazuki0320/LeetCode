function addBinary(a: string, b: string): string {
    const sum = parseInt(a, 2) + parseInt(b, 2)
    return sum.toString(2)
}

const a = "11"
const b = "1"
console.log(addBinary(a, b))
