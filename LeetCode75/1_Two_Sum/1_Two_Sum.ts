function twoSum(nums: number[], target: number): number[] {
    const arr: number[] = [];
    const arrLen = nums.length;
    for (let i = 0; i < arrLen; i++) {
        for (let j = arrLen-1; j > 0; j--) {
            if (i === j) continue;
            let sum = 0;
            sum = nums[i] + nums[j];
            if (target === sum) {
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }
    return arr;
};

/**
・前後で、操作して見つけるのが効率良さそう
・[0]と[3]とか
    - この場合、[3]の求め方として全体の要素数から-1を引けばいい
    - nums.length
    - 前からは+1で、後ろからは-1の走査
・sumの変数は必要
 */
