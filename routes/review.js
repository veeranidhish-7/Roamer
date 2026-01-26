const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
// const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listings.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Reviews
//Post Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

// Delete Review Route
router.delete(
  "/:reviewID",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
