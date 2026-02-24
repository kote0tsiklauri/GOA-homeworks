import { useContext } from "react";
import ButtonText from "../contexts/ButtonTextContext";
function ClickButton() {
    const value = useContext(ButtonText);  
    return <button>{value}</button>;
}
export default ClickButton;