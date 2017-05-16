const build = require('./build')

let writeData

if (process.env.ACCESS_KEY_ID) {
  writeData = require('./write-to-s3')
} else {
  writeData = require('./write-to-disk')
}

build(writeData, (err, res) => {
  if (err) return console.error(err)
  console.log('Success!', res)
})
