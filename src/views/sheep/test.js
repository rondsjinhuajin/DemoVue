

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

const list = [
    {
        "one": [
            {
                "oneSub": [
                    0,
                    0,
                    1,
                    1
                ],
                "full": true
            },
            {
                "oneSub": [
                    0,
                    1
                ]
            },
            {
                "oneSub": [
                    2
                ]
            }
        ]
    },
    {
        "one": [
            {
                "oneSub": [
                    3,
                    2
                ]
            },
            {
                "oneSub": [
                    2,
                    3
                ]
            },
            {
                "oneSub": [
                    3
                ]
            }
        ]
    },
    {
        "one": [
            {
                "oneSub": [
                    4,
                    5
                ]
            },
            {
                "oneSub": [
                    5,
                    4
                ]
            },
            {
                "oneSub": [
                    4,
                    5
                ]
            }
        ]
    }
]

function juge(list) {
    let temp = []
    list.forEach(element => {
        element.one.forEach(sub => {
            temp = [...temp, ...sub.oneSub]
        })
    });
    return temp
}
console.log(juge(list), 'jugelist')