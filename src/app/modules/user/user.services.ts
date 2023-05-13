import IUser from "./user.interface";
import { UserModel } from "./user.model";
import "colors";

export const createUserService = async (payload: IUser): Promise<IUser> => {
  console.log("hit in services".red);
  const user = await new UserModel(payload);
  //   console.log(user, "save from".blue.bold);
  await user.save();
  return user;
};

export const getUserService = async () => {
  const users = await UserModel.find();
  return users;
};
