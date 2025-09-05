import { isValid } from "./20_Valid_Parentheses_ver2";

describe("isValid", () => {
	test('基本的なケース1', () => {
		expect(isValid("()")).toEqual(true);
	})

	test("基本的なケース2", () => {
		expect(isValid("()[]{}")).toEqual(true);
	})

	test("間違ったケース1", () => {
		expect(isValid("(]")).toEqual(false);
	})
	
	test("基本的なケース3", () =>{ 
		expect(isValid("({})")).toEqual(true);
	})

	test("間違ったケース2", () => {
		expect(isValid("([)])")).toEqual(false);
	})
})