import { convertTitle } from "./168_Excel_Sheet_Column_Title_ver2";

describe('convertTitle', () => {
	test('基礎のケース', () => {
		const number = 1;
		const result = convertTitle(number);
		expect(result).toEqual('A');
	})
})