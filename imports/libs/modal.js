import { ReactiveDict } from "meteor/reactive-dict";

export default new ReactiveDict({
  modalEditProvider: {
    open: false,
  },
  modalEditClient: {
    open: false,
  },
  modalAddSkill: {
    open: false,
  },
});
