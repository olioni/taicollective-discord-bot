const wd = require("word-definition")

function split(msg) {
    let word = msg.toString().split(' ')[1]
    return word
}

module.exports = {
    name: "define",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let word = split(message)
        wd.getDef(word, "en", null, function(def) {
            message.reply(def.definition)
        })
        // message.reply(define(message))
    }
}