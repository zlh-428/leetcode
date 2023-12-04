var maxArea = function (height) {
    let max = 0;
    let l = 0;
    let r = height.length;

    while (l < r) {
        const area = (height[l] < height[r] ? height[l] : height[r]) * (r - l);

        max = area > max ? area : max;

        height[l] < height[r] ? l++ : r--;
    }

    return max;
};