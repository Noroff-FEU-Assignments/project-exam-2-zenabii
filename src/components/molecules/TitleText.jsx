import { Paragraph } from "../atoms/Paragraph";

export const TitleText = ({
    subject,
    title,
    paragraph,
    theme,
    secondParagraph,
}) => (
    <div className={theme === "blue" ? "text-part-blue" : "text-part-white"}>
        <p className="subject">{subject}</p>
        <h2>{title}</h2>
        <Paragraph paragraph={paragraph} />
        <Paragraph paragraph={secondParagraph} />
    </div>
);
