import express from "express";
import cors from "cors";

import { secureEngine } from "./middleware/secureEngine.js";
import clipPlanRoute from "./routes/clipPlan.js";

const app = express();
app.use(cors());
app.use(express.json());

// activate protection
app.use(secureEngine);

// ROUTES
app.use("/api/demo", clipPlanRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running on port", PORT));