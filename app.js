const express = require('express');
const app = express();
const userRoute = require('./router/userRouter');
const assignmentRoute = require('./router/assignmentRouter');


app.use('/api', userRoute);
app.use('/api', assignmentRoute);


const PORT = 3000;

app.listen (PORT, () => {
    console.log(`Sever is listening on port ${PORT}`)
})