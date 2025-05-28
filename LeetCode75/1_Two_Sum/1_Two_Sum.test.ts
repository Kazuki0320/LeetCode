import { twoSum } from './1_Two_Sum_ver5';

describe('twoSum', () => {
	test('基本的なケース1', () => {
		expect(twoSum([1, 2, 3], 3)).toEqual([0, 1]);
	})

	test('基本的なケース2', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	})

	test('空の配列', () => {
		expect(twoSum([], 0)).toEqual([]);
	})
})