import { groupAnagrams } from "./49_Group_Anagrams";

describe('groupAnagram', () => {
	test('各要素の文字列をグルーピング', () => {
		const strs = ['abc', 'bca', 'aaa'];
		const result = groupAnagrams(strs);

		// 結果の配列を文字列の長さでソートして比較
		const sortedResult = result.sort((a, b) => a[0].length - b[0].length);
		expect(sortedResult).toEqual([['abc', 'bca'], ['aaa'],]);

		// グループの数を確認
		expect(result.length).toBe(2);

		// 各グループの要素数を確認
		expect(result.find(group => group.includes('aaa'))?.length).toBe(1);
		expect(result.find(group => group.includes('abc'))?.length).toBe(2);
	});

	test('空の配列', () => {
		expect(groupAnagrams([])).toEqual([]);
	});
});