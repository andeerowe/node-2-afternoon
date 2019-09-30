let message = []
let id = 0

module.exports = {
    create: (req,res) => {
        let {text, time} = req.body
        let myMessage = {
            text: text,
            time: time,
            id:id
        }
        message.push(myMessage)
        id ++
        res.status(200).send(message)
    },

    read: (req, res) => {
        res.status(200).send(message)
    },

    update: (req, res) => {
        const {text} = req.body
        const updateId = req.params.id
        const messageIndex = message.findIndex(e => e.id === +updateId)
        let newMessage = message[messageIndex]
        // console.log(newMessage)
        message[messageIndex] = {
            id: newMessage.id,
            text: text || newMessage.text,
            time: newMessage.time
        }
        res.status(200).send(message)
    },

    delete: (req, res) => {
        let {id} = req.params
        let deletedMessage = message.findIndex((element) => {
            return element.id === +id
        })
        message.splice(deletedMessage, 1)
        res.status(200).send(message)
    }
    
    

}
