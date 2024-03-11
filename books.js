const mongoose = require('mongoose');
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

/* Schema Validations and SchemaType Options */

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, "Price is too less" /*Customized error message for validation*/]
    },
    discount: {
      type: Number,
      default: 0
    },
    category: {
      type: String,
      enum: ["fiction","non-fiction"]
    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title:"Maths for JEE",
    author: "RD Sharma",
    price: 399,
    category: "non-fiction" 
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* Validation in Updation and Deletion */

Book.findByIdAndUpdate("65ef1255d66e00af3620c7c1", {price: -100}, {runValidators: true}  /*Validation in Updation*/)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  })

Book.deleteOne({title: "Marvel Comics"}, {runValidators: true} /*Validation in Deletion*/)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });