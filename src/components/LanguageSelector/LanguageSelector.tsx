import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleOnClick = (lang:string) => {
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <Button sx={{ color: "white" }} onClick={() => handleOnClick('en')} >English</Button>
            <Button sx={{ color: "white" }} onClick={() => handleOnClick('tr')} >Turkish</Button>
        </>
    );
}

export default LanguageSelector;