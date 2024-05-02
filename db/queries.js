import eventModel from "@/models/event_models";
import userModel from "@/models/user_models";
import { replaceMongoID, replaceMongoIDObject } from "@/utils/replaceMongoID";
import mongoose from "mongoose";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoID(allEvents);
}

async function getEventById(id) {
  const event = await eventModel.findById(id).lean();
  return replaceMongoIDObject(event);
}

async function createUser(user) {
  const new_user = await userModel.create(user);
  return new_user;
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIDObject(user);
  }

  return null;
}

async function updateInterest(eventId, authId) {
  const event = await eventModel.findById(eventId);

  if (event) {
    const foundUser = event.interested_ids.find(
      (id) => id.toString() === authId
    );

    if (foundUser) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }

    event.save();
  }
}

export {
  getAllEvents,
  getEventById,
  createUser,
  findUserByCredentials,
  updateInterest,
};
