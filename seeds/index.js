const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '61f3c2df048bc39b08a6d300',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nam excepturi doloremque, ab necessitatibus eos accusamus? Possimus culpa, soluta totam sapiente ratione inventore voluptate a consequuntur explicabo, necessitatibus cum eum harum.',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dgoerzmqw/image/upload/v1643630239/YelpCamp/gp4p8rgriukvnbstwumo.jpg',
                    filename: 'YelpCamp/gp4p8rgriukvnbstwumo',
                },
                {
                    url: 'https://res.cloudinary.com/dgoerzmqw/image/upload/v1643630238/YelpCamp/maodvag6jsfvl7qldn1j.jpg',
                    filename: 'YelpCamp/maodvag6jsfvl7qldn1j',
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});