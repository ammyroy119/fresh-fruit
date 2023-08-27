import express from 'express'

const app = express();
const PORT = 8000;


app.get('/', (req ,res) => {
    res.status(200).send('Welcome to the Fresh fruit server!')
})

app.listen(PORT, ()=> {
    console.log(`Server is running at port- ${PORT}`)
})