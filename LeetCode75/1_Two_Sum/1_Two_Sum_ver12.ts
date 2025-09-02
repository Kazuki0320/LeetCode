function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
			const implement = target - nums[i];

			if (map.has(implement)) {
					return [map.get(implement)!, i];
			} else {
					map.set(nums[i], i);
			}
	}

	return [];
}

/**
 * 確認すべきこと
 * ・ Map自体のインスタンスについての理解
 * ・ このメソッドがどんな場面で使用されるのか
 * ・ 補数の概念についての理解
 */