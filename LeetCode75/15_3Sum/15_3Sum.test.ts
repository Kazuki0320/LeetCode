import { threeSum } from './15_3Sum';

describe('threeSum', () => {
	test('空の配列の場合', () => {
		const nums: number[] = [];
		const result = threeSum(nums);
		expect(result).toEqual([]);
	})

	test('3つの数の和が0になる場合', () => {
		const nums: number[] = [-1, 0, 1, 2, -1, -4];
		const result = threeSum(nums);
		expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]]);
	})

	test('重複する組み合わせが存在する場合', () => {
		const nums: number[] = [0, 0, 0, 0];
		const result = threeSum(nums);
		expect(result).toEqual([[0, 0, 0]]);
	})
})