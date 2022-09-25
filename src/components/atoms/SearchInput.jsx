import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Hint, Typeahead } from "react-bootstrap-typeahead";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";

export const SearchInput = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    return (
        // <Typeahead
        //     id="floating-label-example"
        //     onChange={setSelected}
        //     options={options}
        //     placeholder="Choose a state..."
        //     renderInput={({ inputRef, referenceElementRef, ...inputProps }) => {
        //         return (
        //             <Hint>
        //                 <FloatingLabel
        //                     controlId="floatingLabel"
        //                     label="Search for your stay here"
        //                 >
        //                     <Form.Control
        //                         {...inputProps}
        //                         ref={(node) => {
        //                             inputRef(node);
        //                             referenceElementRef(node);
        //                         }}
        //                     />
        //                 </FloatingLabel>
        //             </Hint>
        //         );
        //     }}
        //     selected={selected}
        // />
        <AsyncTypeahead
            id="searchBar"
            isLoading={isLoading}
            labelKey={(option) => `${option.attributes.title}`}
            onSearch={(query) => {
                setIsLoading(true);
                fetch(
                    `https://strapi-api-holidaze-maria.herokuapp.com/api/hotels?filters[title][$containsi]=${query}`
                )
                    .then((resp) => resp.json())
                    .then((json) => {
                        setIsLoading(false);
                        setOptions(json.data);
                    });
            }}
            options={options}
            renderInput={({ inputRef, referenceElementRef, ...inputProps }) => {
                return (
                    <Hint>
                        <FloatingLabel
                            controlId="floatingLabel"
                            label="Search for your stay here"
                        >
                            <Form.Control
                                {...inputProps}
                                ref={(node) => {
                                    inputRef(node);
                                    referenceElementRef(node);
                                }}
                            />
                        </FloatingLabel>
                    </Hint>
                );
            }}
        />
    );
};
