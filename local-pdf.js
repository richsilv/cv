const fs = require('fs')
const HTMLToPDF = require('html5-to-pdf')

const CV = require('./cv')

fs.readFile('data.json', (err, buf) => {
  if (err) return console.error(err)

  const data = JSON.parse(buf.toString('utf8'))
  const html = CV(data)
  const htmlToPDF = new HTMLToPDF({
    inputBody: html,
    outputPath: 'output/cv.pdf',
    renderDelay: 2000
  })
  htmlToPDF.build((err) => {
    if (err) return console.error(err)
    console.log('Success!')
  })
})
