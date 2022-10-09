import emailjs from "@emailjs/browser";
import { ContactInfo } from "../ContactUsForm/ContactUsForm";
import { AlertColor } from "@mui/material/Alert";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const serviceId = "service_szot7ev";
const templateId = "template_moqukoh";
const publicKey = "********";

export const sendEmail = (values:ContactInfo, callback:(sev:AlertColor, hide_duration:number, alert_message:string) => void) => {

  emailjs
      .send(
        serviceId,
        templateId,
        {
          to_name: "Amber Clinic",
          from_name: values.name,
          message: values.message,
          email: values.email,
          phone_number: values.phoneNumber,
          reply_to: "noreply",
        },
        publicKey
      )
      .then(
        (result) => {
            callback("success", 3000, i18n.t("alert.SUCCESS"));
          console.log("result: ", result);
        },
        (error) => {
            callback(
            "warning",
            6000,
            i18n.t("alert.FAIL")
          );
          console.log(error.text);
        }
      );
  };