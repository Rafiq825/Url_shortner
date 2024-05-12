"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
// routes
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
const port = process.env.PORT || 5001;
// middlewares
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
// database connection
(0, dbConnect_1.default)();
app.use('/api', shortUrl_1.default);
// listening 
app.listen(port, () => {
    console.log(`Server started successfully on http://localhost:${port}`);
});
