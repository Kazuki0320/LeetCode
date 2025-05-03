import { twoSum } from './1_Two_Sum_ver2';

describe('twoSum', () => {
	test('基本的なケース1', () => {
		const nums = [1, 2, 3];
		const target = 3;
		const result = twoSum(nums, target);
		expect(result).toEqual([0, 1]);
	})
})

describe('twoSum', () => {
	test('基本的なケース2', () => {
		const nums = [2, 7, 11, 15];
		const target = 9;
		const result = twoSum(nums, target);
		expect(result).toEqual([0,1]);
	})
})

describe('twoSum', () => {
	test('空の配列', () => {
		const nums: number[] = [];
		const target = 0;
		const result = twoSum(nums, target);
		expect(result).toEqual([]);
	})
})