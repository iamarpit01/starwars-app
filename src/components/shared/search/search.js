import React, { useState } from 'react';
import './search.scss';

const Search = ({onHandleChange}) => {
    const [value, setValue] = useState("");

    const onSearchChange = (event) => {
        setValue(event.target.value);
        onHandleChange(event.target.value);
    }

    return (
        <div className="form-search">
            <form>
                <input name="search" type="text" value={value} onChange={onSearchChange} placeholder="Search Planet By Name" />
            </form>
        </div>
    )
}

export default Search
