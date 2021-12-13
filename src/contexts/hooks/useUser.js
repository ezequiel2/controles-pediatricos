import {useContext} from "react";
import UserContext from "../UserContext";

export default () => {
    return useContext(UserContext);
}