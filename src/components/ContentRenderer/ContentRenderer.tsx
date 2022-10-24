import {useState, useEffect} from "react";
import content from "./content.json";
import { useTranslation } from "react-i18next";
import { url } from "inspector";

interface ContentRendererProps {
    contentType: string;
    id: string;
}

interface ContentJSON {
    [index: string]: Content[]
}

interface Content {
    id: string;
    sections: Section[];
}

interface Section {
    type: 'image' | 'header' | 'paragraph' | 'list';
    content: string | string[];
}

const ContentRenderer = ({ id, contentType }: ContentRendererProps) => {
    const [DOMContent, setDOMContent] = useState()
    const { t } = useTranslation();

    useEffect(() => {

    })


    const renderContent = (): JSX.Element[] => {
        const contentStructure = (content as ContentJSON)[contentType];
        const index = contentStructure.findIndex((section) => {
            console.log("comparing", section.id, " with ", id);
            console.log(section.id === id)
            return section.id === id;
        });
        const parsedStructure: JSX.Element[] = []
        console.log(index);

        if (index > -1) {
            const sections = contentStructure[index].sections;
            let contentID = 0;

            sections.forEach((section) => {
                switch (section.type) {
                    case "header":
                        parsedStructure.push(<h1 key={contentID}>{t(`${id}.${section.content}`, { ns: contentType })}</h1>)
                        break;
                    case "paragraph":
                        parsedStructure.push(<p key={contentID}>{t(`${id}.${section.content}`, { ns: contentType })}</p>)
                        break;
                    case "image":
                        const image = require(`../../assets/images/dentists/${section.content}.png`)
                        parsedStructure.push(<img key={contentID} src={image} style={{ shapeOutside: 'url(image)', float: 'left'}}/>)
                        break;
                    case "list":
                        parsedStructure.push(
                            <ul>
                                {(section.content as string[]).map(item => <li>{t(`${id}.${item}`, { ns: contentType })}</li>)}
                            </ul>
                        )
                        break;
                    default:
                        break;
                }
                contentID++;
            })
        }
        return parsedStructure;
    }
    return <div>{renderContent()}</div>
}

export default ContentRenderer;