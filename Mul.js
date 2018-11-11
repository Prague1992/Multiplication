function mul(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
console.log(mul(2)(4)(5))