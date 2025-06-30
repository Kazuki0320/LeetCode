export function containsDuplicate(nums: number[]): boolean {
	const map = new Map<number, boolean>();

	for (const num of nums) {
		if (map.has(num)) {
			return true;
		} else {
			map.set(num, false);
		}
	}
	return false;
}