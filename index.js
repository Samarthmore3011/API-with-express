const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('My first Api in node js express');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));