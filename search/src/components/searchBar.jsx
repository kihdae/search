import { useState } from "react";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("http;//localhost:3000/users")
         .then((response) => response.json())
       .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  }};

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

//   return(

//   )