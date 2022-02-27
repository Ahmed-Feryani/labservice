import { Meteor } from "meteor/meteor";
import { ServicesCollection } from "./services";

Meteor.methods({
  "ServicesCollection.insert"(
    address,
    city,
    postalCode,
    state,
    description,
    phone_user,
    provider,
    seeker
  ) {
    return ServicesCollection.insert({
      address_user: {
        address,
        city,
        postalCode,
        state,
      },

      description,
      isFinished: false,
      phone_user,
      provider,
      seeker,
      createdAt: Date.now(),
      finishedAt: "",
    });
  },
  "ServicesCollection.Finished.update"(id) {
    ServicesCollection.update(id, {
      $set: { isFinished: true, finishedAt: Date.now() },
    });
  },
});
