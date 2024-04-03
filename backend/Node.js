const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/imageDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define schema for image
const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String
});

const Image = mongoose.model('Image', imageSchema);

// Multer middleware for handling multipart/form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where images will be stored temporarily
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Handle POST request to upload image
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image({
      name: req.file.originalname,
      data: fs.readFileSync(req.file.path),
      contentType: req.file.mimetype
    });
    await newImage.save();
    res.send('Image uploaded successfully.');
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).send('Error uploading image.');
  }
});

// Serve uploaded images
app.get('/image/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).send('Image not found.');
    }
    res.set('Content-Type', image.contentType);
    res.send(image.data);
  } catch (error) {
    console.error('Error retrieving image:', error);
    res.status(500).send('Error retrieving image.');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
