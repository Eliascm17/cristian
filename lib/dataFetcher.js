import fs from "fs";
import path from "path";

const root = process.cwd();

let folderPaths = [];

export function getPhotos(PATH) {
  const filePaths = [];
  fs.readdirSync(path.join(root, PATH)).forEach((file) => {
    const Absolute = path.join(PATH, file);
    if (file.slice(-4) === ".jpg") {
      filePaths.push(Absolute);
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
      if (Absolute.substring(26) !== folder) {
        folderPaths.push([Absolute.substring(26).split("/")[0], folder]);
      }
      getFolderPaths(Absolute);
    } else return folderPaths;
  });

  return {
    folderPaths,
  };
}
