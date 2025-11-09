class TwoSumVer21 {
	public int[] twoSumVer21(int[] nums, int target) {
		int numLen = nums.length;
		for (int i = 0; i < numLen; i++) {
			for (int j = i + 1; j < numLen; j++) {
				if (nums[j] == target - nums[i]) {
					return new int[] { i, j };
				}
			}
		}
		return new int[] {};
	}
}