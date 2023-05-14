import { Model, Schema, model } from "mongoose";
import IUser, { IUserMethods, StaticUserModel } from "./user.interface";


type UserModelType = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser,StaticUserModel,IUserMethods>({
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
// for instance method
userSchema.method("fullName",function fullName(){
    return this.name.firstName +' '+ this.name.lastName
})
// for static method //
userSchema.static('getStaticAdminUser',async function getStaticAdminUser() {
  const admin =await this.find({role:"admin"})
  return admin
 
});


export const UserModel = model<IUser,StaticUserModel>("User", userSchema);
