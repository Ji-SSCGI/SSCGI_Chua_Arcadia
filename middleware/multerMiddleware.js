import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();

const upload = multer({ storage });

export const formatImage = (file) => {
    const fileExtension = path.extname(file.orignalname).toString();
    return parser.format(fileExtension, file.buffer).content;
};

export default upload;