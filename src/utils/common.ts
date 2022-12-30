import { LocalizedContent } from "../models/Generic";

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
};

export const languageSwitch = (activeLanguageCode: string, localizedContent: LocalizedContent[]) => {
  return localizedContent.find(content => content.languageCode === activeLanguageCode.substring(0,2))?.text || '';
};
