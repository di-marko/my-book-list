const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.use('/api/books' , require('./routes/bookRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`server is listening on port ${PORT}`));