type ValidationResult = 
	| { valid:true }
	| { valid:false; index: number; message: string };

	function validParentheses(s: string): ValidationResult {
		const map = new Map<string, string>([
			[")", "("],
			["}", "{"],
			["]", "["],
		]);
	
		const stack: { char: string; index: number }[] = [];
	
		for (let i = 0; i < s.length; i++) {
			const char = s[i];
	
			if (map.has(char)) {
				const needElement = map.get(char); // string | undefined
				const top = stack.pop();
	
				if (!top) {
					return {
						valid: false,
						index: i,
						message: `Unexpected closing '${char}' at index ${i}`,
					};
				}
	
				// needElement が undefined の可能性をチェック
				if (needElement === undefined || top.char !== needElement) {
					return {
						valid: false,
						index: i,
						message: `Mismatch: expected '${needElement}', got '${char}' at index ${i}`,
					};
				}
			} else {
				stack.push({ char, index: i });
			}
		}
	
		if (stack.length > 0) {
			const top = stack.pop()!;
			return {
				valid: false,
				index: top.index,
				message: `Unclosed '${top.char}' at index ${top.index}`,
			};
		}
	
		return { valid: true };
	}
	