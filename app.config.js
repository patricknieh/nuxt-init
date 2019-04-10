let env =  process.env.__ENV

console.log('env: %o',process.env.__ENV)

module.exports = {
  domain: env === 'production' ? 'https://example.com' : (env === 'uat' ? 'https://example.com' : 'http://localhost:3000')
}
