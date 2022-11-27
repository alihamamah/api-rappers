const express = require('express')
const app = express()
const PORT = 8000


const rappers ={ '21 savage':{
        'birrthname': 'SADSAD',
        'age': 23,
        'birthLocation': 'London'
        }, 
    'chance':{
        'birrthname': 'bcnvbnxcv',
        'age': 23,
        'birthLocation': 'Amreka'
        },
    'unkown':
    {
        'birrthname': 'unkown',
        'age': 0,
        'birthLocation': 'unkown'
    }
    }
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName])
    {
        response.json(rappers[rapperName])
    }
    else
    {
        response.json(rappers['unkown'])

    }
})

app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
})

