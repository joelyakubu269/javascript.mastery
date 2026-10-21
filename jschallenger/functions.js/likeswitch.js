function like(names) {
    const [a, b, c] = names;
    const n = names.length
    switch (n) {
        case 0:
            return 'no one likes this'
        case 1:
            return '${a} likes this'
        case 2:
            return '${a} and ${b} like this'
        case 3:
            return '${a}, ${b} and {n-2} like this'
    }
}
result = like(["joel", "joan", "josiah", "joseph"])
res = like(["joshua", "jeresiah"])
console.log(result)
console.log(res)