import { HydratedDocument } from "mongoose";
import { Model } from "mongoose";

interface IUser {
  id: string;
  email: string;
  role: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  birthDate?: string;
  gender?: string;
  contact?: string;
  address: string;
}

// instance /////
export interface IUserMethods {
  fullName(): string;
}

// statics method of mongoose  ///

// interface StaticUserModel extends Model<IUser> {
//   getAdminUser(): IUser[];
// }
export interface StaticUserModel extends Model<IUser, {}, IUserMethods> {
  getStaticAdminUser(): Promise<HydratedDocument<IUser, IUserMethods>>;
}



export default IUser;
