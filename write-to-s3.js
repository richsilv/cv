const AWS = require('aws-sdk')

if (process.env.ACCESS_KEY_ID) {
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  })
}

const s3 = new AWS.S3()
module.exports = (buf, cb) => {
  console.log('Writing file to AWS')
  s3.putObject({
    Bucket: 'richsilv',
    Key: 'cv.pdf',
    Body: buf
  }, cb)
}
