//routes - provides mapping between URL and actual JS function when a particular URL is called - have the definations of all the URL's and which controller function has to be called
import itemsRouter from "./toDoItem-router.js";
//to initialize all routes in this file , ex- login,payment, etc
export default (app) => {
  app.use("/", itemsRouter);
};
