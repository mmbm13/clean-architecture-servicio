/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

class Mongo {
  static init(): void {
    mongoose.connect(
      process.env.ATLAS_URI || '',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    const { connection } = mongoose;

    connection.once('open', () => {
      console.log('MongoDB database connection established succesfully');
    });
  }
}

export default Mongo;
