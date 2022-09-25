import { SearchInput } from "../atoms/SearchInput";
import { Heading } from "../molecules/Heading";
import { Paragraph } from "../atoms/Paragraph";

export const SearchHeader = () => (
    <section className="gradientBackground">
        <div className="searchSection">
            <Heading
                theme="blue"
                subject="Find your stay"
                title="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Vivamus faucib us massa at auctor "
            />
            <Paragraph paragraph="We make it easy for you!" />
            <SearchInput />
        </div>
    </section>
);
