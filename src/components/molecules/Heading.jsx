export const Heading = ({ subject, title, theme }) => (
    <div className={theme === "blue" ? "text-part-blue" : "text-part-white"}>
        <p className="subject">{subject}</p>
        <h2>{title}</h2>
    </div>
);
