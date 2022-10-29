import React, { useRef, useState } from "react";
import SearchProfiles from "./SearchProfiles";
import SearchApplicants from "./SearchApplicants";

function Search({ details , type}) {
    const [search, setSearch] = useState("");
    const searchRef = useRef()
    
    const filteredProfiles = details.filter(
        person => {
            return(
                person.name.toLowerCase().includes(search.toLowerCase()) ||
                person.job.toLowerCase().includes(search.toLowerCase())
            );
        }
    );

    function handleSearch(e) {
        const filter = searchRef.current.value
        if (filter === '') return
        setSearch(filter)
        searchRef.current.value = null
    };

    function searchResults() {
        if (type === "profile") {
            return (
                <SearchProfiles filteredProfiles={filteredProfiles} />
            );
        }
        else {
            return (
                <SearchApplicants filteredApplicants={filteredProfiles} />
            );
        }
    }

    return (
        <>
        <input ref={searchRef} className="input" type="text" placeholder="Keyword Search"/>
        <button onClick={handleSearch} className="search">Search</button>
        {searchResults()}
        </>

    );
}

export default Search;