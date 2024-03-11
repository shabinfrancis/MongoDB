/* Installation & Setup */

const mongoose = require('mongoose');

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  //connecting to the address of DB
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

/* Schema */

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

/* Models */

const User = mongoose.model("User",userSchema);

/* Insert in mongoose */

const user1 = new User({
  name: "Adam",
  email: "adam@gmail.com",
  age: 19,
});

const user2 = new User({
  name: "Eve",
  email: "eve@gmail.com",
  age: 19
});

user1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  
/* Insert Multiple */

User.insertMany([
  {name: "tony", email: "tony@gmail.com", age: 19},
  {name: "andrew", email: "andrew@gmail.com", age: 20},
  {name: "alex", email: "alex@gmail.com", age: 18}
]).then((res) => {
  console.log(res);
});

/* Find in Mongoose */

User.find({age: {$gt: 19}})
  .then((res) => {
    console.log(res[0]);
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOne({name: "andrew"})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findById("65086436385b9ccd75b07605")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* Update in Mongoose */

User.updateOne({name: "andrew"}, {age: 25})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.updateMany({name: "andrew"}, {email: "abc@gmail.com"})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* FindAndUpdate */

User.findByIdAndUpdate(("650865dbdb932b2ef68f8ca0"), {name: "adam"}, {new: true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* Delete in Mongoose */

User.deleteMany({name: "Adam"})
  .then((res) =>{
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  
User.findByIdAndDelete("65edbf7dedf0653988463a2d")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOneAndDelete({name: "andrew"})
  .then((res) => {
    console.log(res);
  });


