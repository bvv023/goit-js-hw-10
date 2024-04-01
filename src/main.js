
import validator from "validator";

console.log(
  "Is mango@mail.com a valid email?: ",
  validator.isEmail("bvv023@mail.com")
); // Is bvv023@mail.com a valid email?: true

console.log(
  "Is bvv023dogmail.com a valid email?: ",
  validator.isEmail("bvv023dogmail.com")
); // Is bvv023@mail.com a valid email?: false
