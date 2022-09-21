import { Paragraph } from "../atoms/Paragraph";

export const BannerText = ({ subject, title, paragraph, theme }) => (
    <div className={theme === "blue" ? "text-title-blue" : "text-title-white"}>
        <p className="">{subject}</p>
        <h1>{title}</h1>
        <Paragraph paragraph={paragraph} />
    </div>
);
