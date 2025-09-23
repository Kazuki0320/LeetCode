type ValidationResult =
  | { valid: true }
  | { valid: false; message: string };

function validParentheses(s: string): ValidationResult {
  const map = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      const needElement = map.get(char); // string | undefined（理論上undefinedにならないがts的にガード）
      const top = stack.pop();

      if (!top) {
        return {
          valid: false,
          message: `予期しない閉じ括弧 '${char}'（index ${i}）`,
        };
      }

      if (needElement === undefined || top !== needElement) {
        // needElement は char に対応する“あるべき開き括弧”
        // top.char は実際に直前に積まれていた開き括弧
        return {
          valid: false,
          message: `不一致：'${char}' に対応するのは '${needElement ?? "?"}' ですが、直前は '${top}' でした`,
        };
      }
    } else {
      stack.push(char);
    }
  }

  if (stack.length > 0) {
    const top = stack.pop()!;
    return {
      valid: false,
      message: `未クローズの括弧 '${top}'`,
    };
  }

  return { valid: true };
}

const s1 = "["
console.log("開き括弧のみ", validParentheses(s1))

const s2 = "}"
console.log("とじ括弧のみ", validParentheses(s2))

const s3 = "[]"
console.log("期待値", validParentheses(s3))