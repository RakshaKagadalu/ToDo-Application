import app from "./api/app.js";

const port = 9000;

//app start's here , where app.listen binds the application server to a particular port in your local machine and starts listening to the messages on that port
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
