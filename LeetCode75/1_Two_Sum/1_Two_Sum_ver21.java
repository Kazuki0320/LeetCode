class TwoSumVer21 {
	public int[] twoSumVer21(int[] nums, int target) {
		int numLen = nums.length;
		for (int i = 0; i < numLen; i++) {
			int comp = target - nums[i];
			for (int j = i + 1; j < numLen; j++) {
				if (nums[j] == comp) {
					return new int[] { i, j };
				}
			}
		}
		return new int[] {};
	}
}