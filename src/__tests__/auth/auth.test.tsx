import { describe, it } from 'vitest';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getErrorMessage } from '../mocks/testErrorMessage';
import { auth } from '../../firebase/init';

describe('Firebase authentication tests', () => {
  describe('Firebase register tests', () => {
    it('Try to register user to application', async () => {
      try {
        await createUserWithEmailAndPassword(auth, 'test@gmail.com', '1234');
      } catch (err) {
        getErrorMessage(err);
      }
    });

    it('Could not register user to app because credentials are wrong', async () => {
      try {
        await createUserWithEmailAndPassword(auth, 2222, 2222);
      } catch (err) {
        getErrorMessage(err);
      }
    });
  });


  /* TODO: Later create some mocks for this functions */
  /* describe.skip('Firebase login tests', () => {
    it('Try to login', async () => {
      try {

      } catch(err) {
        getErrorMessage(err);
      }
    });

    it("Try to login but credentials are wrong", async () => {
        try {

        } catch(err) {
            getErrorMessage(err);
        }
    })
  });


  describe.skip("Get user after login tests", () => {
    it("Try to get user data after successfully login to app", async() => {
        try {

        } catch(err) {
            getErrorMessage(err);
        }
    })

    it("Try to get user data but requested user does not exists", async() => {
        try {

        } catch(err) {
            getErrorMessage(err);
        }
    })
  })


  describe.skip("Firebase auth logout tests", () => {
     it("Try to logout from application", async() => {
        try {

        } catch(err) {
            getErrorMessage(err);
        }
     })
  }) */
});
