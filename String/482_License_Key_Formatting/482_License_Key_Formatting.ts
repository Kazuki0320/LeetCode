function licenseKeyFormatting(s: string, k: number): string {
    const group: string[] = []

    // 1. "-"を削除
    const noDashes = s.replace(/-/g, "")

    // 2. 大文字に変換
    const uppercased = noDashes.toUpperCase()

    let i = uppercased.length
    // 3. 文字列を末尾から k 文字ずつ区切って配列にする
    while (i > 0) {
        const start = Math.max(0, i - k)
        group.push(uppercased.slice(start, i))
        i -= k
    }

    // 4. 配列を逆順にして "-" で結合して return
    const reversed = group.reverse()
    const result = reversed.join("-")
    return result
};

const s = "5F3Z-2e-9-w"
const k = 4
console.log(licenseKeyFormatting(s, k))
