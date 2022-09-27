

const p = [23, 23, 1, 1, 1]

function cliceSplit(list) {
    for (let k = 0; k < list.length - 2; k++) {
        const temp = list;
        const arr = temp.slice(k, k + 3);
        console.log(k, arr)
        if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) {
            list.splice(k + 2)
            list.splice(k + 1)
            list.splice(k, 1)
        }
    }
    return list
}
console.log(cliceSplit(p))