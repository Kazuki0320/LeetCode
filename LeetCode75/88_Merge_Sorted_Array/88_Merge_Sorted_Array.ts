/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // nums1 と nums2 を後ろから比較してマージ
    let p1 = m - 1; // nums1の有効部分の最後のインデックス
    let p2 = n - 1; // nums2の最後のインデックス
    let p = m + n - 1; // nums1の最後のインデックス（全体の長さ）

    // nums1とnums2の要素を後ろから比較して、大きい方を nums1 に格納
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // nums2に要素が残っている場合、nums1の先頭部分にコピー
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
