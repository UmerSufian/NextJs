const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'jtegmnnbbvt9',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'c_0Rp0x4oDWeknJWrifUuyrN4we9tnrd8nP8ZdtldBQ'
})

