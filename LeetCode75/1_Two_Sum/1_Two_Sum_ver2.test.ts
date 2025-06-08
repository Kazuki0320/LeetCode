import { twoSum } from './1_Two_Sum_ver6';

describe('twoSum', () => {
	test('基本的なケース', () => {
		const nums: number[] = [2,7,0,9];
		const target = 9;
		const result = twoSum(nums, target);
		expect(result).toEqual([0,1]);
	})

	test('空の配列', () => {
		const nums: number[] = [];
		const target = 0;
		const result = twoSum(nums, target);
		expect(result).toEqual([]);
	})
})