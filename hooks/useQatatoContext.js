import { useContext } from "react";
import { qatatoContext } from "@/context/QatatoContextProvider";
const useQatatoContext = () => {
    return useContext(qatatoContext);
};

export default useQatatoContext;
