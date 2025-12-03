import path from 'path'

const SQLITE_FILENAME = path.join(__dirname, '..', '..', '.tmp/data.db')

export default () => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: SQLITE_FILENAME,
    },
    useNullAsDefault: true,
  },
})
