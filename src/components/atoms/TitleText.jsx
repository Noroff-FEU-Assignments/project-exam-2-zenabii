export const TitleText = ({ subject, title, paragraph, theme }) => (
    <div className={theme === "blue" ? "text-part-blue" : "text-part-white"}>
        <p className="subject">{subject}</p>
        <h2>{title}</h2>
        <p className="line-height">{paragraph}</p>
    </div>
);
