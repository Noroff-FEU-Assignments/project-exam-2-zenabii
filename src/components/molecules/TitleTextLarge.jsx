import { Paragraph } from "../atoms/Paragraph";
import { Button } from "../atoms/Button";

export const TitleTextLarge = ({
    subject,
    title,
    paragraph,
    theme,
    secondParagraph,
}) => (
    <div className={theme === "blue" ? "text-part-blue" : "text-part-white"}>
        <p className="subject">{subject}</p>
        <h2>{title}</h2>
        <div className="paragraphColumn">
            <Paragraph paragraph={paragraph} />
            <Paragraph paragraph={secondParagraph} />
            <div className="buttonContainer">
                <Button
                    theme="black"
                    link="/contactus"
                    text="Send an enquiry"
                />
            </div>
        </div>
    </div>
);
