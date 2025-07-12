import mongoose from 'mongoose'

type ConnectionProps = {
  url: string
  db: string
}

export const connect = async ({ url, db }: ConnectionProps) => {
  try {
    await mongoose.connect(url, {
      dbName: db
    })

    console.info('Database connected successfully')
  } catch (e) {
    console.error('Error connecting to the database:', e)
    throw e
  }
}
