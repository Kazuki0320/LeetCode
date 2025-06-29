import { containsDuplicate } from './217_Contains_Duplicate';

describe('containsDuplicate', () => {
	test('重複が存在する場合', () => {
		const nums: number[] = [1,2,3,1];
		const result = containsDuplicate(nums);

		expect(result).toEqual(true);
	})
})

