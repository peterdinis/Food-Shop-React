import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

// some middlewares
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

// testing route
app.get('/example', (request, response) => {
  response.send('Hi i am backend');
});

exports.app = functions.https.onRequest(app);

// example firebase function
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
