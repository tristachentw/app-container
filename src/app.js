import fs from 'fs';
import path from 'path';
import express from 'express';

const APP_ENTRY_FILENAME = 'app.js';
const app = express(),
      containerFolder = path.resolve(__dirname, 'public');

fs.readdir(containerFolder, (err, files) => {
  files.forEach(file => {
    const filePath = path.resolve(containerFolder, file, APP_ENTRY_FILENAME),
          isExist = fs.existsSync(filePath);
    if (isExist) {
      app.use('/' + file, require(filePath));
    } else {
      /* */
    }
  });
});
app.use('/', express.static(containerFolder));

export default app;
