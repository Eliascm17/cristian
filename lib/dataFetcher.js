import fs from "fs";
import path from "path";

const root = process.cwd();

export async function getAllPhotos() {
  return {
    fashion: fs.readdirSync(
      path.join(root, "public/collections/photos/fashion")
    ),
    personal: fs.readdirSync(
      path.join(root, "public/collections/photos/personal")
    ),
    portraits: fs.readdirSync(
      path.join(root, "public/collections/photos/portraits")
    ),
    promos: fs.readdirSync(path.join(root, "public/collections/photos/promos")),
    wedding: fs.readdirSync(
      path.join(root, "public/collections/photos/wedding")
    ),
  };
}

export async function getSpecificPhotoType(type) {
  return fs.readdirSync(path.join(root, `public/collections/photos/${type}`));
}
