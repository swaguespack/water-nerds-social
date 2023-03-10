const { connect, connection } = require('mongoose');

// Environment Variable & wrap Mongoose around local connection to MongoDB
connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/water-social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = connection;