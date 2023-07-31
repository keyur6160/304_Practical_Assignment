const fs = require('fs');
const { promisify } = require('util');

// Promisify the fs.unlink function
const unlinkAsync = promisify(fs.unlink);

// Usage example
const filePath = 'C:\\Users\\Keyur\\Desktop\\djf.txt'; // Replace this with the path to your file

unlinkAsync(filePath)
  .then(() => {
    console.log(`File ${filePath} has been successfully deleted.`);
  })
  .catch((error) => {
    console.error(`Error deleting file ${filePath}:`, error);
  });
