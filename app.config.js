let env =  process.env.__ENV

console.log('env:',process.env.__ENV)

module.exports = {
  API_ROOT: env === 'prod' ? 'https://example.com' : (env === 'uat' ? 'https://example.com' : 'http://localhost:3000')
}
