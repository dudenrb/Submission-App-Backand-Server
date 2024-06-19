import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

// Create an Express application
const app = express();

// Define the path for db.json
const dbFilePath = path.join(__dirname, 'db.json');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize db.json if it does not exist
if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, JSON.stringify([]));
}

// Endpoint: Ping
app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

// Endpoint: Submit
app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const submission = { name, email, phone, github_link, stopwatch_time };

    fs.readFile(dbFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const submissions = JSON.parse(data);
        submissions.push(submission);

        fs.writeFile(dbFilePath, JSON.stringify(submissions, null, 2), (err) => {
            if (err) throw err;
            res.json({ message: 'Submission received!' });
        });
    });
});

// Endpoint: Read
app.get('/read', (req: Request, res: Response) => {
    const index = Number(req.query.index);

    fs.readFile(dbFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const submissions = JSON.parse(data);

        if (index < 0 || index >= submissions.length) {
            res.status(400).json({ error: 'Invalid index' });
        } else {
            res.json(submissions[index]);
        }
    });
});

// Endpoint: Read All Submissions
app.get('/readAll', (req: Request, res: Response) => {
    fs.readFile(dbFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const submissions = JSON.parse(data);
        res.json(submissions);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
