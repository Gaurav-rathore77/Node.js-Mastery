require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

const app = express();
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));