const express = require('express'); 
const axios = require('axios');
const app = express(); 
var cors = require('cors');
const port = process.env.PORT || 5000; 
app.use(cors());
app.use(express.static('public'));


app.get("/fruits", async (req, res) => {
  try {
      const response = await axios.get("https://www.fruityvice.com/api/fruit/all")
      res.json(response.data)
  }
  catch (err) {
      console.log(err)
  }
})
app.get("/images", async (req, res) => {
  try {
      const response = await axios.get(`https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json`)
      res.json(response.data)
  }
  catch (err) {
      console.log(err)
  }
})


app.listen(port, () => console.log(`listening skr skr on port ${port}!`));