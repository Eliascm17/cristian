import fs from "fs";
import path from "path";

const root = process.cwd();
let filePaths = [];

export function getPhotos(PATH) {
  fs.readdirSync(path.join(root, PATH)).forEach((file) => {
    const Absolute = path.join(PATH, file);
    if (fs.statSync(Absolute).isDirectory()) {
      return getPhotos(Absolute);
    } else {
      if (file.slice(-4) === ".jpg") return filePaths.push(Absolute);
    }
  });

  const photos = getRandomSubarray(filePaths, 10);

  return {
    photos,
  };
}

//function to get random 10 of all photos
function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}
