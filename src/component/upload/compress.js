import Compress from "compress.js";

const compress = new Compress();
export const handleCompression = (files) => {
  compress.compress(files, {
    // compression: 'STORE'
    size: 2, // the max size in MB, defaults to 2MB
    quality: 0.75, // the quality of the image, max is 1,
    maxWidth: 1920, // the max width of the output image, defaults to 1920px
    maxHeight: 1920, // the max height of the output image, defaults to 1920px
    resize: false, // defaults to true, set false if you do not want to resize the image width and height
    rotate: false, // See the rotation section below
  }).then((data) =>{
    return data;
  });
};


