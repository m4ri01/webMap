const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    serviceName: process.env.SERVICE_NAME,
    urlDb: process.env.MONGODB_URL,
    geoCoderProvider: process.env.GEOCODER_PROVIDER,
    geoCoderAPIKey: process.env.GEOCODER_API_KEY,
    mapboxAPIKey: process.env.MAPBOX_API_KEY,
}   