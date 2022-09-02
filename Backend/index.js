const express = require('express');
const connection = require('./db')
const app = express();
const cors = require('cors');
const ReportRouter = require('./routes/reportRoutes');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/report", ReportRouter)

app.get('/', (req, res) => {
    res.send("Hello")
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('listening on http://localhost:8080')
})

