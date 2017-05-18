# CV

A series of scrips for building a pdf CV from JSON data.  Comments in the .js files describe what each does.

## Environment variables

These are required to access remote data (if reading from Github) and build the pdf via [PdfLayer](https://pdflayer.com/) (which builds 100 pdfs per month on the free tier).

```sh
GITHUB_USER=richsilv
GITHUB_REPO=cv
GITHUB_DATA_PATH=data.json
PDFLAYER_ACCESS_KEY=******************
```

## Deploying as a Lambda on AWS

```sh
npm i --production
zip -r cv-maker.zip .
```

Now you can upload the created zip as an AWS Lambda and it will store the resulting pdf in the S3 bucket given by the following environment variables:

```sh
S3_BUCKET=richsilv
S3_KEY=cv.pdf
```

### Extra required steps

1. Add required permissions for the Lambda function to write to the supplied S3 bucket.
2. Add an AWS API Gateway endpoint which calls your Lambda function on POST requests.
3. Add a webhook to your Github project to call the API endpoint on pushes.