// 产生一个连续的以start初始值递增step的数组
export const getIncreaceArray = (n: number, start: number, step = 1) => {
    return new Array(n).fill(start).reduce((res, val, i) => {
        res.push(i == 0 ? val : res[i-1] + step)
        return res;
    }, [])
}