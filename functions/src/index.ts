import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

// example firebase function
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
