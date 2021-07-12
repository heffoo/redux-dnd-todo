import { useContext } from "react";
import { StoreContext } from "./rootStore";

export const useStores = () => useContext(StoreContext);
