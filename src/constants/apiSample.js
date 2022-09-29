import Axios from "axios";
import { base_uri } from "@constants/BASE_URL";

export const forecast   = payload => Axios.get(base_uri + `sample`, payload)