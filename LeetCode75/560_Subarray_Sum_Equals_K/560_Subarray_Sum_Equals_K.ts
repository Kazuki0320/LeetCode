export function subarraySum(nums: number[], k: number): number {
	let sum = 0;
	let count = 0;
	const map = new Map<number, number>(); // 累積の和と出現回数
	map.set(0, 1); // 0の累積和が1回出ているとみなす

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		const complement = sum - k;
		if (map.has(complement)) {
			count += map.get(complement)!;
		}
		map.set(sum, (map.get(sum) ?? 0) + 1);
	}

	return count;
}