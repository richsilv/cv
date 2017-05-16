const request = require('request')
const CV = require('./cv')

const {
  GITHUB_USER: githubUser,
  GITHUB_REPO: githubRepo,
  GITHUB_DATA_PATH: githubDataPath,
  PDFLAYER_ACCESS_KEY: pdfLayerAccessKey
} = process.env


const path = `/${githubUser}/${githubRepo}/master/${githubDataPath}`

function getData (cb) {
  if (!githubUser) throw new Error('Missing Github user')
  if (!githubRepo) throw new Error('Missing Github repo name')
  if (!githubDataPath) throw new Error('Missing Github data path')

  request.get(`https://raw.githubusercontent.com${path}`, (err, res, body) => {
    if (err) return cb(err)
    if (res.statusCode !== 200) return cb(body)

    try {
      const parsed = JSON.parse(body)
      cb(null, parsed)
    } catch (err) {
      cb(body)
    }
  })
}

function buildCV (data, cb) {
  if (!pdfLayerAccessKey) throw new Error('Missing PdfLayer access key')

  const html = CV(data)
  request.post({
    url: `http://api.pdflayer.com/api/convert?access_key=${pdfLayerAccessKey}`,
    form: { document_html: html },
    encoding: null
  }, (err, res, body) => {
    if (err) return cb(err)
    if (res.statusCode !== 200) return cb(body)

    cb(null, body)
  })
}

module.exports = (writeData, cb) => {
  getData((err, data) => {
    if (err) return cb(err)
    buildCV(data, (err, buf) => {
      if (err) return cb(err)

      writeData(buf, cb)
    })
  })
}

module.exports.getData = getData
