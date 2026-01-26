const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  let s = initData.data.map((obj) => ({
    ...obj,
    owner: "697764f0717c06712f7e2714",
  }));
  await Listing.insertMany(s);
  console.log("Data was initialized");
};

initDB();
