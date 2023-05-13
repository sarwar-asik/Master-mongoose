import { Model, Schema, model } from "mongoose";
import IUser, { IUserMethods } from "./user.interface";


type UserModelType = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser,UserModelType,IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  birthDate: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

userSchema.method("fullName",function fullName(){
    return this.name.firstName +' '+ this.name.lastName
})

export const UserModel = model<IUser,UserModelType>("User", userSchema);
