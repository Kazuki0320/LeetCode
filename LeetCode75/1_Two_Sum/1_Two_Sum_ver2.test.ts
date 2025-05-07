import { twoSum } from './1_Two_Sum_ver4';

describe('twoSum', () => {
	test('基本的なケース1', () => {
		const nums = [2,7,11,15];
		const target = 9;
		const result = twoSum(nums, target);
		expect(result).toEqual([0,1]);
	})

	test('空の配列', () => {
		const nums: number[] = [];
		const target = 0;
		const result = twoSum(nums, target);
		expect(result).toEqual([])
 	})

	test('基本的なケース2', () => {
		const nums = [3,2,4];
		const target = 6;
		const result = twoSum(nums, target);
		expect(result).toEqual([1,2]);
	})
})