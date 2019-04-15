const env = process.env.__ENV

export const TOKEN_NAME = 'token'
export const API_HOST = env === 'production' ? 'http://192.168.80.103:7001' : (env === 'uat' ? 'http://192.168.50.190:7001' : 'http://172.16.0.41:7001')
