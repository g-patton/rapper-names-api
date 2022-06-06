const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors())

const rappers = {
    '21 savage':{
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthlocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthlocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthlocation': 'Dylan'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase();
    if (rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! 
    Better go catch it...`)
});

