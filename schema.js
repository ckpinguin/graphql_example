// const fetch = require('node-fetch')
const {promisify} = require('util')
const xml2js = require('xml2js')
// const parseXML = promisify(xml2js.parseString)

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql')
// key: MG8pOgmx22SeEgothH6Q
// secret: sDGhaCna2HO3lvTrh7sP9x0XDoItlSh2HGAhngpXB3U

// const x = fetch(
//     'https://www.goodreads.com/author/show.xml?id=4432&key=MG8pOgmx22SeEgothH6Q'
// )
// .then(response => response.text())
// .then(parseXML)

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: '...',
    fields: () => ({
        name: {
            type: GraphQLString
        }
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: (root, args) => fetch(
                        `https://www.goodreads.com/author/show.xml?id=${args.id}&key=MG8pOgmx22SeEgothH6Q`
                    )
            }
        })
    })
})