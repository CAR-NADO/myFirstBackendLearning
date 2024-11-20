import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
//This enables Cross-Origin Resource Sharing (CORS) with the specified origin and allows credentials (cookies, HTTP authentication, etc.) to be sent with requests.

app.use(express.json({ limit: "16kb" }));
// Lets your app read JSON data from incoming requests, with a size limit of 16KB.

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// Allows your app to handle form data (URL-encoded), with a size limit of 16KB.

app.use(express.static("public"));
//This serves static files (like HTML, CSS, JS, images) from the public directory.
//Makes files in the public folder available to anyone visiting your app.

app.use(cookieParser());
//This middleware parses cookies from the request, making them accessible via req.cookies.
//Enables your app to read cookies sent by the client.


//  routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
// http://localhost:8000/api/v1/users/register

export { app };
