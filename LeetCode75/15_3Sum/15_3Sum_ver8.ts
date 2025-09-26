function threeSum(nums:number[]): number[][] {
	const result: number[][] = []
	const len = nums.length

	if (len < 3) return [];
	nums.sort((a,b) => a-b)

	for (let i = 0; i < len; i++) {
		let left = i+1
		let right = len - 1

		// Two-Pointerを利用するのに、leftからrightまでのループが抜けていた
		while (left<right) {
			let sum = nums[i] + nums[left] + nums[right]
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]])
	
				while (left < right && nums[left] === nums[left+1]) left++;
				while (left < right && nums[right] === nums[right-1]) right ++
	
				left++;
				right--;
			} else if (sum < 0){
				left++
			} else {
				right--
			}
		}
	}
	return result
}

/**
 * 目的：配列から和が0になるユニークな値を探す
 * 発想：配列をソート、二分探索ではなくTwo-Pointerを使用
 * 理由：
 * - ソートで重複を回避できる
 * - ポインタを動かすだけで効率的に探索ができる
 */