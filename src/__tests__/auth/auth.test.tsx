import { describe, it, expect } from "vitest";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getErrorMessage } from "../mocks/testErrorMessage";
import {auth} from "../../firebase/init"

describe("Firebase authentication tests", () => {
    it("Try to register user to application", async () => {
        try {
          await signInWithEmailAndPassword(auth, "test@gmail.com", "1234")
        } catch (err) {
            getErrorMessage(err)
        }
    });
})