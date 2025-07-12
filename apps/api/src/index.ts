import { connect } from './lib/connection'
import { server } from './main'

const start = async () => {
  await connect({
    url: 'mongodb://bookuser:bookpassword@localhost:27017/',
    db: 'bookstore'
  })

  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })
}

start()
