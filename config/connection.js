const { connect, connection } = require('mongoose');

// Environment Variable & wrap Mongoose around local connection to MongoDB
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/waterSocial'
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = connection;