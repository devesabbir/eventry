import eventModel from "@/models/event_models";
import userModel from "@/models/user_models";
import connectDB from "@/services/mongo";
import { replaceMongoID, replaceMongoIDObject } from "@/utils/replaceMongoID";
import mongoose from "mongoose";

async function getAllEvents(query) {
  let allEvents = [];
  if (query) {
    const regex = new RegExp(query, "i");
    allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
  } else {
    allEvents = await eventModel.find().lean();
  }
  return replaceMongoID(allEvents);
}

async function getEventById(id) {
  await connectDB();
  const event = await eventModel.findById(id).lean();
  return replaceMongoIDObject(event);
}

async function createUser(user) {
  await connectDB();
  const new_user = await userModel.create(user);
  return new_user;
}

async function findUserByCredentials(credentials) {
  await connectDB();
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIDObject(user);
  }

  return null;
}

async function updateInterest(eventId, authId) {
  await connectDB();
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

async function updateGoing(eventId, authId) {
  await connectDB();
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));
  event.save();
}

export {
  getAllEvents,
  getEventById,
  createUser,
  findUserByCredentials,
  updateInterest,
  updateGoing,
};
