import express from "express"
import { Request, Response } from "express";
const app = express();


app.get("/",(req: Request, res: Response)=>{
    res.send("Hello app is running and this is my happines");
})

app.listen(3000,()=>console.log("App is running on 3000"))