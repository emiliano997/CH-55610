import path from "path";
import { fileurltopath } from "url";

const __filename = fileurltopath(import.meta.url);
const __dirname = path.dirname(__filename);

export default __dirname;
