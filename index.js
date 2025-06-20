const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.get('/home', (req, res) => {
    res.json({
        message:"Ok"
    });
})

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
