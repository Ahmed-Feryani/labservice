import { Meteor } from "meteor/meteor";
import { Notification } from "./notification";

Meteor.methods({
  "notification.insert"(subject, recId, serviceId) {
    Notification.insert({
      sender: this.userId,
      recId,
      subject,
      seen: false,
      serviceId,
    });
  },
  "notification.remove"(id) {
    Notification.remove(id);
  },
});
