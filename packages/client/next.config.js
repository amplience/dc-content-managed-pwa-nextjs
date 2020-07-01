const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'labs.cdn.content.amplience.net'
    },
    poweredByHeader: false,
    target: 'serverless'
}