import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema,model } from "mongoose";

const app: Application = express();

app.use(cors());
// parse data ///
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   res.send({ run: "success", message: "Server is running on 5000" });
  //   next();
  interface IUser {
    id: string;
    email: string;
    role: string;
    password: string;
    name: {
      fistName: string;
      lastName: string;
    };
    birthDate?: string;
    gender?: string;
    contact?: string;
    address: string;
  }
  const userSchema = new Schema()<IUser>({
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
  const user = model<IUser> ('User',userSchema)

  
});

export default app;
