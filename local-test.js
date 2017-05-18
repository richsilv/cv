const fs = require('fs')
const { buildCV } = require('./build')

let writeData

if (process.env.ACCESS_KEY_ID) {
  writeData = require('./write-to-s3')
} else {
  writeData = require('./write-to-disk')
}

fs.readFile('./data.json', (err, buf) => {
  if (err) return console.error(err)

  const data = JSON.parse(buf.toString('utf8'))
  buildCV(data, { test: 1 }, (err, buf) => {
    if (err) return console.error(err)

    writeData(buf, (err, res) => {
      if (err) return console.error(err)

      console.log('Success!')
    })
  })
})
