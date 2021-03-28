const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

let rappers = {
 '21 savage': { 
     ' age': 28,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},
  'chance the rapper':{
    ' age': 27,
    'birthName': 'Chancelor Jonathon Bennett',
    'birthLocation': 'Chicago, Illinios'
  },
  'dylan':{
    ' age': 26,
    'birthName': 'dylan',
    'birthLocation': 'dylan'
  }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/rappers/:rapperName', (request, response)=>{
    const rapName = request.params.rapperName.toLocaleLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
    response.json(rappers[rapName])

    } else
    response.json(rappers['dylan'])
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})