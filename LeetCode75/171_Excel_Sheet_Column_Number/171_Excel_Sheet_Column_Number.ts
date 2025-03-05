function titleToNumber(columnTitle: string): number {
    let result = 0

    for (let i = 0; i < columnTitle.length; i++) {
        result = result * 26 + (columnTitle.charCodeAt(i) - 64)
    }
    return result
}

const columnTitle = "A"
console.log(titleToNumber(columnTitle))

/**
 * charCodeAtは、文字列の数分
 */
