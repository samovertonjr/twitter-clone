import { createServer, Model, Factory, trait } from 'miragejs'
import { add, parseISO } from 'date-fns'
import faker, { image, name, internet, lorem } from 'faker'

faker.seed(123)

const startingDate = parseISO('2021-01-01')
export default createServer({
  timing: 1000,
  models: {
    tweet: Model,
  },

  factories: {
    tweet: Factory.extend({
      name() {
        return name.findName()
      },

      username() {
        return internet.userName()
      },

      text() {
        return lorem.sentences()
      },

      avatarUrl() {
        return image.avatar()
      },

      date(i) {
        return add(startingDate, { days: i }).toISOString()
      },

      fromSam: trait({
        name: 'Sam Overton',
        username: 'samovertonjr',
        avatarUrl: 'https://avatars.dicebear.com/4.5/api/bottts/this-is.svg',
      }),
    }),
  },

  routes() {
    this.namespace = 'api'
    this.get('tweets')

    this.namespace = '' // or this.namespace = "/"
    this.passthrough()
  },

  seeds(server) {
    server.create('tweet', 'fromSam', { text: 'just setting up my twitter' })
    server.create('tweet', 'fromSam', { text: 'Hi' })
    server.create('tweet', 'fromSam', {
      text: "I still don't understand useEffect",
    })
    server.createList('tweet', 50)
  },
})
