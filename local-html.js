// Pull data from a local file, render it to HTML but not pdf and write it to local disk
const fs = require('fs')
const CV = require('./cv')

fs.readFile('./data.json', (err, buf) => {
  if (err) return console.error(err)

  const data = JSON.parse(buf.toString('utf8'))
  const html = CV(data)
  fs.writeFile('output/cv.html', html, (err) => {
    if (err) return console.error(err)
    console.log('Success!')
  })
})
