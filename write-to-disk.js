const fs = require('fs')

module.exports = (buf, cb) => {
  console.log('Writing file to disk')
  fs.writeFile('output/cv.pdf', buf, {
    encoding: 'utf8'
  }, cb)
}
