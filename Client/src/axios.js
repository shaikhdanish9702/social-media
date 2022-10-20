import axios from "axios";
import url from "./url";

const API=axios.create({baseURL:url})
export default API