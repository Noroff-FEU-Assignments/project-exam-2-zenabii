import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Hint, Typeahead } from "react-bootstrap-typeahead";

import options from "./data";

import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";

export const SearchInput = () => {
    const [selected, setSelected] = useState([]);

    return (
        <Typeahead
            id="floating-label-example"
            onChange={setSelected}
            options={options}
            placeholder="Choose a state..."
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
            selected={selected}
        />
    );
};
