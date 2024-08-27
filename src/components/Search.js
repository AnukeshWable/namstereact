import React,{useState} from "react";

const Search=()=>
{
    const [SearchText, setSearchText]=useState("write Here");

    return (
        <>
        <input value={SearchText} type="text" onChange={(e)=>
        {
            setSearchText(e.target.value)
        }}></input>
        <button>Search</button>

        </>
        
    )
}
export default Search;