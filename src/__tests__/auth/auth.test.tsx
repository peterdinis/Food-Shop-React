import { describe, expect, it } from 'vitest';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getErrorMessage } from '../mocks/testErrorMessage';
import { auth } from '../../firebase/init';

describe('Firebase authentication tests', () => {
  describe('Firebase register tests', () => {
    it('Try to register user to application', async () => {
      try {
        await signInWithEmailAndPassword(auth, 'test@gmail.com', '1234');
      } catch (err) {
        getErrorMessage(err);
      }
    });

    it('Could not register user to app because credentials are wrong', async () => {
      try {
        await signInWithEmailAndPassword(auth, 2222, 2222);
      } catch (err) {
        getErrorMessage(err);
      }
    });
  });

  describe('Firebase login tests', () => {
    it('Try to login', async () => {
      return;
    });

    it("Try to login but credentials are wrong", async () => {
        return;
    })
  });


  describe("Get user after login tests", () => {
    it("Try to get user data after successfully login to app", async() => {
        return;
    })

    it("Try to get user data but requested user does not exists", async() => {
        return;
    })
  })


  describe("Firebase auth logout tests", async() => {
    return;
  })
});
