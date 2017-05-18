const AWS = require('aws-sdk')

if (process.env.ACCESS_KEY_ID) {
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  })
}

const s3Bucket = process.env.S3_BUCKET
const s3Key = process.env.S3_KEY


const s3 = new AWS.S3()
module.exports = (buf, cb) => {
  if (!s3Bucket || !s3Key) return cb(new Error('Missing S3 bucket or key'))

  console.log('Writing file to AWS')
  s3.putObject({
    Bucket: s3Bucket,
    Key: s3Key,
    Body: buf
  }, cb)
}
