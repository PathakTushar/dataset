const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const nurseRoutes = require("./routes/nurseRoutes");
const adminRoutes = require("./routes/adminRoutes");
app.use(cors());
// Middleware
app.use(express.json());


// app.get("/", (req, res)=>{
//   res.send("hello")
// })

// Routes
app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/nurses", nurseRoutes);
app.use("/admin", adminRoutes);
// app.use("/appointment", )



mongoose
  .connect("mongodb+srv://mascot:olMyia3VcLmbk7TW@fleeting.1ggv299.mongodb.net/wbd-lab?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to the database");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  });
