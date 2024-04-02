const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile:String,
  password: String
});

// Define User model
const User = mongoose.model('user', userSchema); // Change model name to 'user'

app.use(bodyParser.json());

// Define route for user registration
app.post('/register', (req, res) => {
  const { name, email,mobile, password, reEnterPassword } = req.body;

  // Validate input
  if (!name || !email || !password ||!mobile || !reEnterPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if passwords match
  if (password !== reEnterPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  // Check if user already exists
  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Create new user
      const newUser = new User({ name, email, password });
      newUser.save()
        .then(() => res.json({ message: 'User registered successfully' }))
        .catch(err => res.status(500).json({ error: 'Failed to register user', details: err }));
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err }));
});

// Define route for user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Find user by email
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check password
      if (user.password !== password) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      // If user and password are correct, you can create a session or JWT token here
      // For example, you can use JSON Web Tokens (JWT) for authentication and session management

      // In this example, let's simply respond with a success message
      return res.json({ message: 'Login successful' });
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err }));
});

// Define schema for booking data
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  person: Number,
  date: Date,
  time: String,
  food: String,
  occasion: String
});

// Define model for booking data
const Booking = mongoose.model('Booking', bookingSchema);

// Define route to handle form submission
app.post('/book-table', (req, res) => {
  const { name, email, mobile, person, date, time, food, occasion } = req.body;

  // Validate input
  if (!name || !email || !mobile || !person || !date || !time || !food || !occasion) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create new booking
  const newBooking = new Booking({ name, email, mobile, person, date, time, food, occasion });
  newBooking.save()
    .then(() => res.json({ message: 'Table booked successfully' }))
    .catch(err => res.status(500).json({ error: 'Failed to book table', details: err }));
});

// Define schema for message data
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

// Define model for message data
const Message = mongoose.model('Message', messageSchema);

// Define route to handle form submission
app.post('/send-message', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create new message
  const newMessage = new Message({ name, email, subject, message });
  newMessage.save()
    .then(() => res.json({ message: 'Message sent successfully' }))
    .catch(err => res.status(500).json({ error: 'Failed to send message', details: err }));
});

// Define schema for feedback data
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  waiterComplain: String,
  serviceRating: Number,
  cleanlinessRating: Number,
  suggestion: String
});

// Define model for feedback data
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Define route to handle form submission
app.post('/send-feedback', (req, res) => {
  const { name, email, waiterComplain, serviceRating, cleanlinessRating, suggestion } = req.body;

  // Validate input
  if (!name || !email || serviceRating || cleanlinessRating || !suggestion) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create new feedback
  const newFeedback = new Feedback({ name, email, waiterComplain, serviceRating, cleanlinessRating, suggestion });
  newFeedback.save()
    .then(() => res.json({ message: 'Feedback sent successfully' }))
    .catch(err => res.status(500).json({ error: 'Failed to send feedback', details: err }));
});

//---------------------------------------------------------------------------------------------

const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  tag:String,
  image:String,
});

// Define model for feedback data
const Pizza = mongoose.model('Pizza', pizzaSchema);
app.post('/api/pizzas', async (req, res) => {
  const { name, price, tag, image } = req.body;

  // Validate input
  if (!name || !price || !tag || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create new pizza
    const newPizza = new Pizza({ name, price, tag, image });
    await newPizza.save();
    res.status(201).json(newPizza);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add pizza', details: error.message });
  }
});
// Route to get all pizza data
app.get('/api/pizzas', async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pizza data', details: error.message });
  }
});

//-----------------------------------------------------------------------------------------------------------

const fastfoodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  tag:String,
  image:String,
});

// Define model for feedback data
const Fastfood = mongoose.model('Fastfood', fastfoodSchema);
app.post('/api/fastfoods', async (req, res) => {
  const { name, price, tag, image } = req.body;

  // Validate input
  if (!name || !price || !tag || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create new pizza
    const newFastfood = new Fastfood({ name, price, tag, image });
    await newFastfood.save();
    res.status(201).json(newFastfood);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add Fastfood', details: error.message });
  }
});
// Route to get all pizza data
app.get('/api/fastfoods', async (req, res) => {
  try {
    const fastfoods = await Fastfood.find();
    res.json(fastfoods);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pizza data', details: error.message });
  }
});

//----------------------------------------------------------------------------------------------------------------------------------------

const burgerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  tag:String,
  image:String,
});

// Define model for feedback data
const Burger = mongoose.model('Burger', burgerSchema);
app.post('/api/burgers', async (req, res) => {
  const { name, price, tag, image } = req.body;

  // Validate input
  if (!name || !price || !tag || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create new pizza
    const newBurger = new Burger({ name, price, tag, image });
    await newBurger.save();
    res.status(201).json(newBurger);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add pizza', details: error.message });
  }
});
// Route to get all pizza data
app.get('/api/burgers', async (req, res) => {
  try {
    const burgers = await Burger.find();
    res.json(burgers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pizza data', details: error.message });
  }
});

//---------------------------------------------------------------------------------------------------------------------------------------

const disheSchema = new mongoose.Schema({
  name: String,
  price: Number,
  tag:String,
  image:String,
});

// Define model for feedback data
const Dishe = mongoose.model('Dishe', disheSchema);
app.post('/api/dishes', async (req, res) => {
  const { name, price, tag, image } = req.body;

  // Validate input
  if (!name || !price || !tag || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create new pizza
    const newDishe = new Dishe({ name, price, tag, image });
    await newDishe.save();
    res.status(201).json(newDishe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add Dishe', details: error.message });
  }
});
// Route to get all pizza data
app.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await Dishe.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Dishe data', details: error.message });
  }
});

//-------------------------------------------------------------------------------------------------------------

const juiceSchema = new mongoose.Schema({
  name: String,
  price: Number,
  tag:String,
  image:String,
});

// Define model for feedback data
const Juice = mongoose.model('Juice', juiceSchema);
app.post('/api/juices', async (req, res) => {
  const { name, price, tag, image } = req.body;

  // Validate input
  if (!name || !price || !tag || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create new Juice
    const newJuice = new Juice({ name, price, tag, image });
    await newJuice.save();
    res.status(201).json(newJuice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add Juice', details: error.message });
  }
});
// Route to get all Juice data
app.get('/api/juices', async (req, res) => {
  try {
    const juices = await Juice.find();
    res.json(juices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch juice data', details: error.message });
  }
});

//---------------------------------------------------------------------------------------------------------------------------------------

const drinkSchema = new mongoose.Schema({
  name: String,
  price: Number,
  tag:String,
  image:String,
});

// Define model for feedback data
const Drink = mongoose.model('Drink', drinkSchema);
app.post('/api/drinks', async (req, res) => {
  const { name, price, tag, image } = req.body;

  // Validate input
  if (!name || !price || !tag || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create new Juice
    const newDrink = new Drink({ name, price, tag, image });
    await newDrink.save();
    res.status(201).json(newDrink);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add Drink', details: error.message });
  }
});
// Route to get all Juice data
app.get('/api/drinks', async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.json(drinks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Drink data', details: error.message });
  }
});

//---------------------------------------------------------------------------------------------------------------------------------------

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
