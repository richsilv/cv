// Pull data from Github, render a test version with PdfLayer and write it either to local disk or S3 depending on env
const build = require('./build')

let writeData

if (process.env.ACCESS_KEY_ID) {
  writeData = require('./write-to-s3')
} else {
  writeData = require('./write-to-disk')
}

build(writeData, { test: 1 }, (err, res) => {
  if (err) return console.error(err)
  console.log('Success!', res)
})
