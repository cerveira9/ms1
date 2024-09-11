import express from 'express'
import cors from 'cors'

const app = express()
const dados = []

app.use(express.json({ type: ['text/*', '*/json']}))
app.use(cors())

app.post('/', (req, res) => {
    console.log('Nova mensagem recebida... (POST)')

    if(req.body.SubscribeURL) {
        console.log('-> URL para inscrição: ' + req.body.SubscribeURL)
    }

    if(req.body.Message) {
        console.log('Mensagem: ' + req.body.Message)
    }

    dados.push({
        message: req.body.Message,
        timestamp: Date.now()
    })

    res.send({ok: true})
})

app.get('/', (req, res) => {
    console.log('Obtendo estatísticas... (GET)')
    res.send(dados)
})

app.listen(3005, () => {
    console.log('Microserviço em execução!')
})