const bcryptjs = require('bcryptjs')

const userFixtures = async () => {
  const password = await bcryptjs.hash('trummor', 12)

  return [
    {
      email: 'mail.carl.aberg@gmail.com',
      password,
      firstname: 'Carl',
      lastname: 'Åberg'
    },
    {
      email: 'maja@nilsson.com',
      password,
      firstname: 'Maja',
      lastname: 'Nilsson'
    }
  ]
}

module.exports = userFixtures