const fastify = require('fastify')({
  logger: true
});
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const urlDB = ‘mongodb://localhost/mygarage’;

mongoose.connect(urlDB)
 .then(() => console.log(‘MongoDB connected…’))
 .catch(err => console.log(err));

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

const start = async () => {
  try {
    await fastify.listen(port);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();