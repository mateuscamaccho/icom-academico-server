import express, { Request, Response, urlencoded } from 'express';
import axios, { AxiosResponse, AxiosError } from 'axios';
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

// listar jogos
app.get('/list/games', async (req: Request, res: Response) => {
    await axios.get('https://academico.espm.br/testeapi/jogo')
        .then(function (response: AxiosResponse) {
            res.json(response.data)
        })
        .catch(function (error: AxiosError) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.status,
                    message: error.message
                })
            }
        })
})

// jogo individual
app.get('/list/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    await axios.get(`https://academico.espm.br/testeapi/jogo/${id}`)
        .then(function (response: AxiosResponse) {
            res.json(response.data);
        })
        .catch(function (error: AxiosError) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.status,
                    message: error.message
                })
            }
        })
})

app.post('/create', async (req: Request, res: Response) => {
    const { nome, descricao, produtora, ano, idadeMinima } = req.body

    if (descricao.length > 100) {
        return res.status(400).json({ error: 400, message: `Descrição muito longa (${descricao.length} caracteres), o limite é de 100 caracteres!` })
    }

    await axios.post('https://academico.espm.br/testeapi/jogo', {
        nome,
        descricao,
        produtora,
        ano,
        idadeMinima
    })
        .then(function (response: AxiosResponse) {
            res.json(response.data);
        })
        .catch(function (error: AxiosError) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.status,
                    message: error.message
                })
            }
        })
})

app.put('/alter/game', async (req: Request, res: Response) => {
    const { id, nome, descricao, produtora, ano, idadeMinima } = req.body
    if (descricao.length > 100) {
        return res.status(400).json({ error: 400, message: `Descrição muito longa (${descricao.length} caracteres), o limite é de 100 caracteres!` })
    }
    await axios.put('https://academico.espm.br/testeapi/jogo', {
        id,
        nome,
        descricao,
        produtora,
        ano,
        idadeMinima
    })
        .then(function (response: AxiosResponse) {
            console.log(response);
            res.json(response.data);
        })
        .catch(function (error: AxiosError) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.status,
                    message: error.message
                })
            }
        })
})

app.delete('/delete/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    axios.delete(`https://academico.espm.br/testeapi/jogo/${id}`)
        .then(function (response: AxiosResponse) {
            res.json(response.data)
        })
        .catch(function (error: AxiosError) {
            console.error("Error", error.message)
        })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});