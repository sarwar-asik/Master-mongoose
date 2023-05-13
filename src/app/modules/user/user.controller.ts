import { NextFunction, Request, Response } from "express";
import { createUserService, getUserService } from "./user.services";

export const createUserController =async (req: Request,res: Response,next: NextFunction) => {
  //   res.send({ run: "success", message: "Server is running on 5000" });
  //   next();
  const data =req.body
  const user =await createUserService(data);

  res.status(200).json({
    status:"success",
    data:user
  })
};

export const getUserController = async (req:Request,res:Response)=>{
    const getUsersData  = await getUserService()
    res.status(200).json(getUsersData)
}