
const message = () => {
    const msg = ['How are you doing', 'Where are you from', 'When will you visit']
    string = msg[Math.floor(Math.random() * msg.length)];
    return string
}

console.log(message())

