import { SearchInput } from "../atoms/SearchInput";
import { Heading } from "../molecules/Heading";
import { Paragraph } from "../atoms/Paragraph";

export const SearchHeader = () => (
    <section className="gradientBackground">
        <div className="searchSection">
            <Heading
                theme="blue"
                subject="Find your stay"
                title="Book your next trip with one of our many offers here at Holidaze"
            />
            <Paragraph paragraph="We make it easy for you!" />
            <SearchInput />
        </div>
    </section>
);
