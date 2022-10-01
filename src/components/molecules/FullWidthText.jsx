import { Paragraph } from "../atoms/Paragraph";
import { Button } from "../atoms/Button";

export const FullWidthText = ({
    subject,
    title,
    paragraph,
    secondParagraph,
}) => (
    <div className="flex-direction-row">
        <div className="ctaActivity">
            <p className="subject">{subject}</p>
            <h2>{title}</h2>
        </div>
        <div className="paragraphColumn flexWidth">
            <Paragraph paragraph={paragraph} />
            <Paragraph paragraph={secondParagraph} />
        </div>
    </div>
);
