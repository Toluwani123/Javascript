
const message = () => {
    const msg = ['How are you doing', 'Where are you from', 'When will you visit']
    valueToUse = msg[Math.floor(Math.random() * msg.length)];
    return valueToUse
}

console.log(message())

