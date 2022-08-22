# YelpCamp

Full-stack JS application using Node modules, Express, mongoDB, user authentication, cluster map, image upload to Cloudinary.

Application allows a user to share and review campgrounds around the world. 

# Run it locally

1. Install [Node.js](https://nodejs.org/en/) 
2. Install [mongoDB](https://www.mongodb.com/). Follow [this](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328) installation guide for Windows.
3. Register on [Cloudinary](https://cloudinary.com/)
4. Register on [Mapbpx](https://www.mapbox.com/)
5. Run mongod in a terminal and keep it running
6. In another terminal, in the directory of the project run `npm install`
7. Create a new file with the name `.env`
8. Open the `.env` file and fill it according to this template:

```
CLOUDINARY_CLOUD_NAME=HERE CLOUD NAME FROM CLOUDINARY DASHBOARD
CLOUDINARY_KEY=API KEY FROM CLOUDINARY DASHBOARD
CLOUDINARY_SECRET=API SECRET FROM CLOUDINARY DASHBORD
MAPBOX_TOKEN=HERE TOKEN CREATED ON MAPBOX SITE
```

9. In the terminal run `node app.js`
