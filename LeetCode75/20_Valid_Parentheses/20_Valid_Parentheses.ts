function isValid(s: string): boolean {
    const map = new Map<string, string>([
        ["]", "["],
        [")", "("],
        ["}", "{"]
    ]);

    const stack: string[] = [];

    for (const char of s) {
        if (map.has(char)) {
            const topElement = stack.length > 0 ? stack.pop() : '#';

            if (map.get(char) !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

/**

<わからないこと>
    - valueが等しい場合、keyでの比較ができるのかわからない
 */
