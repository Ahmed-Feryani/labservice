import { Meteor } from "meteor/meteor";
import "../imports/api/publications";
import "../imports/api/services/publications";
import "../imports/api/services/methods";
import "../imports/api/reviews/publications";
import "../imports/api/reviews/methods";
import "../imports/api/notification/methods";
import "../imports/api/notification/publications";

Meteor.startup(() => {});
