import { Meteor } from "meteor/meteor";
import { ReviewsCollection } from "./reviews";

Meteor.publish("reviews", function () {
  return ReviewsCollection.find();
});

Meteor.publish("myReviews", function (id) {
  console.log(id, "backkkk");
  return ReviewsCollection.find({ toId: id });
});
