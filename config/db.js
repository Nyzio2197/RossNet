const mongoose = require("mongoose");
const db = "mongodb+srv://rossnettest:rossnettest@cluster0.anah6e7.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;