import { longestConsecutive } from "./128_Longest_Consecutive_Sequence";

describe('test', () => {
	test('連続した数値をカウントして返す', () => {
		const nums = [100, 4, 200, 1, 3, 2];
		const result = longestConsecutive(nums);

		expect(result).toEqual(4);
	})
})