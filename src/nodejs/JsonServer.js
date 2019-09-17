const jsonServer = require('json-server')
const { isDemo } = require('./dev/dev-config')

let dbFilePath;
if (isDemo) {
  dbFilePath = 'src/nodejs/dev/demo.json';
} else {
  dbFilePath = 'src/nodejs/prod/db.json';
}
const server = jsonServer.create()
const router = jsonServer.router(dbFilePath)
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use((req, res, next) => {
//   if (req.url === '/exit') {
//     console.log('Exiting...');
//     process.exit();
//   }
//   next();
//  })
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
