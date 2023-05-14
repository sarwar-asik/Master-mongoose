import IUser from "./user.interface";
import { UserModel } from "./user.model";
import "colors";

export const createUserService = async (payload: IUser): Promise<IUser> => {
  console.log("hit in services".red);
  const user = await new UserModel(payload);
  console.log(user.fullName(), "save from userController".blue.bold);
  await user.save();
  return user;
  //   user.fullName()
};

export const getUserService = async (): Promise<IUser[]> => {
  const users = await UserModel.find();
  return users;
};

export const getUserByIdService = async (
  payload: string
): Promise<IUser | null> => {
  const user = await UserModel.findOne(
    { id: payload },
    {
      name: 1,
      birthDate: 1,
    }
  );
  return user;
};

export const getStaticAdminService =async ():Promise<IUser>=>{

  const admins = await UserModel.getStaticAdminUser()

  return admins

}