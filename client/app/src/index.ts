/* eslint-disable @typescript-eslint/no-var-requires */
const app = require('./server.ts');

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => console.log(`Server on port: ${app.get('port')}`));
