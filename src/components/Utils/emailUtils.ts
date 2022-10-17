import emailjs from "@emailjs/browser";
import { ContactInfo } from "../ContactUsForm/ContactUsForm";

const serviceId = "service_szot7ev";
const templateId = "template_moqukoh";
const publicKey = "xOryHOGs6_QIKpX3Bz";

export const sendEmail = (values:ContactInfo, onFulfilled:() => void, onRejected:() => void) => {

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
            onFulfilled();
          console.log("result: ", result);
        },
        (error) => {
          onRejected();
          console.log(error.text);
        }
      );
  };