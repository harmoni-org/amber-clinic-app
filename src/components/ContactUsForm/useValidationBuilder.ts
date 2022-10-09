import { useRef, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const ValidationBuilder = () => {
    const validationObject = useRef<any>({});
    const { t } = useTranslation();

    useMemo(()=> {
        validationObject.current = yup.object({
            name: yup
              .string()
              .min(2, t("contact_form_validations.TOO_SHORT"))
              .max(50, t("contact_form_validations.TOO_LONG"))
              .required(t("contact_form_validations.NAME_REQUIRED")),
            email: yup
              .string()
              .email(t("contact_form_validations.INVALID_EMAIL"))
              .required(t("contact_form_validations.EMAIL_REQUIRED")),
            phoneNumber: yup
              .string()
              .required(t("contact_form_validations.PHONE_NUMBER_REQUIRED"))
              .matches(
                /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,
                t("contact_form_validations.INVALID_PHONE_NUMBER")
              ),
            message: yup.string().max(255, t("contact_form_validations.TOO_LONG")),
          });
    }, []);

    return validationObject.current;
}

export default ValidationBuilder;