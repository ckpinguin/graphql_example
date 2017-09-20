const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()

const port = 4000

const schema = require('./schema.js')

// key: MG8pOgmx22SeEgothH6Q
// secret: sDGhaCna2HO3lvTrh7sP9x0XDoItlSh2HGAhngpXB3U
app.use('/graphql', graphqlHTTP(
    {
        schema,
        graphiql: true    
    }
))

app.listen(port)

console.log('Listening on port ', port , '...')