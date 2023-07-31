const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Function to create a ZIP file for a given folder
function createZipForFolder(folderPath, zipFileName) {
  // Create a write stream for the ZIP file
  const output = fs.createWriteStream(zipFileName);

  // Create a new Archiver instance
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Compression level (0 to 9)
  });

  // Listen for various events on the Archiver
  output.on('close', () => {
    console.log(`ZIP file ${zipFileName} has been created successfully.`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  // Pipe the output to the ZIP file
  archive.pipe(output);

  // Append the entire folder to the ZIP archive
  archive.directory(folderPath, false);

  // Finalize the ZIP archive
  archive.finalize();

}

// Usage example
const folderToCompress = 'C:\Users\Keyur\Downloads\cmrf.pdf'; // Replace this with your folder path
const zipFileName = 'output.zip'; // Replace this with your desired output ZIP file name

createZipForFolder(folderToCompress, zipFileName);

