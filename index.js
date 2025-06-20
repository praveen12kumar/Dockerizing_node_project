const express = require('express');


const app = express();


app.get('/home', (req, res) => {
    res.json({
        message:"Ok"
    });
})

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:3000');
});
