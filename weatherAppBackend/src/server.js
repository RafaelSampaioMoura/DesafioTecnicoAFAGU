require('dotenv').config();
import { get, listen } from './app';

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 4000;

// não remova esse endpoint
get('/', (_request, response) => {
  response.send();
});

listen(port, () => console.log('ouvindo porta', port));