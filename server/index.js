const express = require('express')
const app = express()
const ctrl = require('./controllers/message_controller')
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));
app.listen(3001, () => {console.log('Running on port 3001')})


app.post('/api/messages', ctrl.create)
app.get('/api/messages', ctrl.read)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)