import mongoose from "mongoose"

const Connection = async (URL) => {
    // const URL = 'mongodb://0.0.0.0:27017/MERN-CRUD'; //now URL is coming from index.js
    //mongodb://0.0.0.0:27017/MERN-CRUD

    try {
        await mongoose.connect(URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                //  You may also want to add the following to suppress deprecation warnings:
                // useCreateIndex: true,
                // useFindAndModify: false,
            });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to database', error);
    }
}

export default Connection;

