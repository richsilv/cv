const build = require('./build')
const writeData = require('./write-to-s3')

module.exports.handler = (_, __, cb) => {
  build(writeData, cb)
}
