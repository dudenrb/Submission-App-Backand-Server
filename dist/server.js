"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules from Express and Node.js
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
// Create an Express application
var app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json()); // Parse JSON bodies
app.use((0, cors_1.default)()); // Enable Cross-Origin Resource Sharing (CORS)
// Example endpoint: Ping
app.get('/ping', function (req, res) {
    res.json({ success: true });
});
// Example endpoint: Hello World
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// Start the server
var PORT = process.env.PORT || 5000; // Use the provided port or default to 5000
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
