# NextJS Quiz Website 

## Use deployed version
If you want to use the site, but not deploy it yourself, you can visit https://quiz.aggoatch.people.amazon.dev/.

### Users
There are three different access level accounts: `alfieadmin`, `alfiemoderator`, `alfieuser`
The password for all three accounts is `Password-1`

### instructions to run locally 

1. `npm i`
2. `npm run dev`
3. You will need access to a deployed backend, to do that you will need auth. go to your deployed site and sign in using a known account.
4. Using developer tools, extract the query args which include the JWT token, e.g `#id_token=eyJraWQiOiJPT...jbk8X4Z3y7PA&expires_in=3600&token_type=Bearer`
5. go to `localhost:3000/#id_token=...` with the token you just extracted in the URL
You should be able to use the local dev server as if it was hosted in the lambda at edge!

### To build
`npm run build` bundles the assets so they can be deployed by the [serverless NextJS CDK construct](https://github.com/serverless-nextjs/serverless-next.js/)