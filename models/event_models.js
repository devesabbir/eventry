import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    details: {
      required: true,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
    imageUrl: {
      required: true,
      type: String,
    },
    interested_ids: {
      required: false,
      type: Array,
    },
    going_ids: {
      required: false,
      type: Array,
    },
    swgs: {
      required: false,
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const eventModel =
  mongoose?.models?.events ?? mongoose.model("events", eventSchema);
export default eventModel;
