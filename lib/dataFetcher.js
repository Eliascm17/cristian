import fs from "fs";
import path from "path";

const root = process.cwd();

let filePaths = [];
let folderPaths = [];

export function getPhotos(PATH) {
  fs.readdirSync(path.join(root, PATH)).forEach((file) => {
    const Absolute = path.join(PATH, file);
    if (fs.statSync(Absolute).isDirectory()) {
      return getPhotos(Absolute);
    } else {
      if (file.slice(-4) === ".jpg") return filePaths.push(Absolute);
    }
  });

  return {
    filePaths,
  };
}

export function getFolderPaths(PATH) {
  fs.readdirSync(path.join(root, PATH)).forEach((folder) => {
    const Absolute = path.join(PATH, folder);
    if (fs.statSync(Absolute).isDirectory()) {
      folderPaths.push(folder);
    }
  });

  return {
    folderPaths,
  };
}
