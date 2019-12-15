const mongoose = require("mongoose");
const Register = require("../models/registerModel");
//create test suite
describe("registration model test", () => {
  //set up: run before any test; in this case to create out testdb
  beforeAll(async () => {
    try {
      await mongoose.connect(
        "mongodb://localhost:27017/test-db",
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
          console.log("Connected to DB");
        }
      );
      await Register.deleteMany({});
    } catch (err) {
      console.log("database error" + err);
    }
  });
  //an assertion/test.....asserting that the expected output should be ----
  test("should be able to save", async () => {
    const register = new Register({ firstname: "maria" });
    // save data using scheme collection name 'Register' to database
    try {
      await register.save();
      const items = await Register.find();
      expect(items.length).toBe(1);
    } catch (err) {
      console.log("database error" + err);
    }
  });


 //an assertion/test.....asserting that the expected output should be ----
 //system should not save if first name field is empty
test("should not save when firstname is empty", async ()=>{
  try{
    await new Register({ lastname: "angella"}).save();
  }
  catch(err){
    console.log("database error" + err)
    expect(err.toString()).toBe("ValidationError: firstname: Please Enter first name");
  }
  const items=await Register.find({});
  expect(items.length).toBe(0);
})


 //test tear down:some finishing work that needs to happen after the tests
  afterEach(async()=>{
    try{
        await Register.deleteMany({})
    }
    catch(err){
        console.log("database error" + err)
    }
})
});





