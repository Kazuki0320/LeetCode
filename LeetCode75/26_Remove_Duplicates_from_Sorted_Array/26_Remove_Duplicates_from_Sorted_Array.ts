function removeDuplicates(nums: number[]):number {
    if (nums.length === 0) return 0

    let k = 0

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[k-1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

// const nums = [1,1,2,2]
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
