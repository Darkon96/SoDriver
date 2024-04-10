import { BsWhatsapp } from "react-icons/bs";

const WhatsApp = () => {
    return (
        <div>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/79096298188">
                <BsWhatsapp className="size-14 animate-pulse text-lime-500" /> 
            </a>
        </div>
    );
}
 
export default WhatsApp;