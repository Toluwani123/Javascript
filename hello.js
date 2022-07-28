const coll1 = ["I got married", "I wrote my first code", "I started on Codecademy", "I became a fullstack engineer"]
const message = () => {
    let string = "I clearly remeber the day" + " " + coll1[Math.floor(Math.random() * coll1.length)];
    return string
}

console.log(message())

