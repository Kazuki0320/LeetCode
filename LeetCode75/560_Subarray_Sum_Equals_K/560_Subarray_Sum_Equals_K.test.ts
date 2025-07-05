import { subarraySum } from './560_Subarray_Sum_Equals_K';

describe('subarraySum', () => {
	test('部分配列の和がk=2となる個数を正しく数える', () => {
		const  nums: number[] = [1,1,1];
		const k = 2;

		const result = subarraySum(nums, k);

		expect(result).toEqual(2);
	})

	test('部分配列の和がk=3となる個数を数える', () => {
		const nums: number[] = [1,2,3];
		const k = 3;

		const result = subarraySum(nums, k);
		expect(result).toEqual(2);
	})
})