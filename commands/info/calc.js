const math = require('mathjs')

function calculate(msg) {
    let str = msg.toString()
    let q = str.split(' ')[1]
    let answer = math.evaluate(q)
    return answer.toString()
}

module.exports = {
    name: "calc",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        // let eq = message.split(' ')[1]
        message.reply(calculate(message))
    }
}