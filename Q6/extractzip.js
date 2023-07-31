const fs = require('fs');
const admZip = require('adm-zip');

// Function to extract a ZIP file
function extractZip(zipFilePath, outputDir) {
  const zip = new admZip(zipFilePath);

  try {
    // Extract all entries to the specified output directory
    zip.extractAllTo(outputDir, true);
    console.log('ZIP file has been extracted successfully.');
  } catch (error) {
    console.error('Error extracting ZIP file:', error);
  }
}

// Usage example
const zipFilePath = 'C:\\Users\\Keyur\\Downloads\\EQ050623_CSV.ZIP'; // Replace this with the path to your ZIP file
const outputDir = 'C:\\Users\\Keyur\\Desktop\\kkkk'; // Replace this with the desired output directory

extractZip(zipFilePath, outputDir);
