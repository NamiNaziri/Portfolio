require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express()
const Person = require('./models/person')

app.use(express.static('dist'))

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}


app.use(cors())
app.use(express.json())
app.use(requestLogger)

morgan.token('body', (req) => JSON.stringify(req.body))
//app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

  app.get('/api/persons', (request, response) => {
    Person.find({}).then(result => {
      response.json(result)
    } )
  })

  app.get('/api/info', (request, response) => {
    const currentTime = new Date().toString();
    // content = `<p>Phonebook has info for ${persons.length} people</p>
    //             <p>${currentTime}</p>`
    Person.find({}).then(result => {
      content = `<p>Phonebook has info for ${result.length} people</p>
            <p>${currentTime}</p>`
      response.send(content)
    } )
  })

  app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
      if(person)
      {
        response.json(person)
      }
      else
      {
        response.status(404).end()
      }
      
    }).catch(error => next(error))

  })

  app.delete('/api/persons/:id', (request, response) => {

    Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  })

  app.post('/api/persons', (request, response, next) => {
    const body = request.body
    console.log('hi')

    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }

    if (!body.number) {
        return response.status(400).json({ 
          error: 'number missing' 
        })
      }
      
    // const existingPerson = persons.find((person)=> person.name.toLowerCase() === body.name.toLowerCase())
    // if(existingPerson){
    //     return response.status(400).json({ 
    //       error: 'name must be unique'
    //     })
    //   }

    const person = new Person({
        name:  body.name,
        number: body.number,
    })

    person.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => next(error))

  })

  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name:  body.name,
      number: body.number,
  }
  
    Person.findByIdAndUpdate(request.params.id, person, 
      { new: true, runValidators: true, context: 'query' })
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
  })

  app.use(unknownEndpoint)
  app.use(errorHandler)
  
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })