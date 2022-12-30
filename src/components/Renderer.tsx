import { useTranslation } from "react-i18next";
import parse, { HTMLReactParserOptions } from "html-react-parser";
import sanitizeHTML from "sanitize-html";
import { LocalizedContent } from "../models/Generic";
import { languageSwitch } from "../utils/common";

interface Props {
  nodes: LocalizedContent[];
  parseAndSanitize?: boolean;
  translate?: boolean;
  parserOptions?: HTMLReactParserOptions;
}

const Renderer = (props: Props) => {
  const { i18n } = useTranslation();

  const translatedContent = props.translate ? languageSwitch(i18n.language, props.nodes): "a";

  const sanitizedContent = props.parseAndSanitize ? sanitizeHTML(translatedContent) : translatedContent;

  const parsedContent = props.parseAndSanitize ? parse(sanitizedContent, props.parserOptions) : sanitizedContent;
 
  return <>{parsedContent}</>
}

export default Renderer;