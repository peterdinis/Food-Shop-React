import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as stripe from 'stripe';
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(cors({
  origin: true
}));
app.use(express.json());

// testing route


// example firebase function
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
