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

  export default IUser