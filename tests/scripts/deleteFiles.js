"use strict";

const fs = require("fs");

const kleur = require("kleur");

console.log(kleur.bgRed().bold(" 🔥 Deleting test files and folders 🔥 "));

const path = require("path");

const directoryPath = path.join(__dirname, "../path");

function deleteFilesRecursive(directory) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      const currentPath = path.join(directory, file);

      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFilesRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });

    fs.rmdirSync(directory);
  }
}

deleteFilesRecursive(directoryPath);
