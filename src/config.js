
module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'your_db_user',
    password: process.env.DB_PASSWORD || 'your_db_password',
    database: process.env.DB_NAME || 'your_database',
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your_cloud_name',
    api_key: process.env.CLOUDINARY_API_KEY || 'your_cloudinary_api_key',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'your_cloudinary_api_secret',
  },
  firebase: {
    // Configurations Firebase (si utilisé)
  },
  // Autres configurations spécifiques à votre application
};
