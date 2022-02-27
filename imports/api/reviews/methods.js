import { Meteor } from "meteor/meteor";
import { ReviewsCollection } from "./reviews";

Meteor.methods({
  "ReviewsCollection.insert"(
    serviceId,
    userId,
    toId,
    firstName,
    lastName,
    value
  ) {
    ReviewsCollection.insert({
      serviceId,
      userId,
      toId,
      text: "",
      firstName,
      lastName,
      value,
      date: Date.now(),
    });
  },
  "ReviewsCollection.update"(id, value) {
    ReviewsCollection.update(id, { $set: { value } });
  },
});
