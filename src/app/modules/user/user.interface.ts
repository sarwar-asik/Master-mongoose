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

 export interface IUserMethods {
    fullName(): string;
  }
  

  export default IUser