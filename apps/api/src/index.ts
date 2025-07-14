import { connect } from './lib/connection'
import { server } from './main'

const start = async () => {
  // mongodb://bookuser:bookpassword@localhost:27017/
  await connect({
    url: 'mongodb+srv://jorgequevejob:9f8xZNUlefXdqYgP@book-store.vjs2dxa.mongodb.net/?retryWrites=true&w=majority&appName=book-store',
    db: 'bookstore'
  })

  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })
}

start()
