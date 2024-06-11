import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";

const Blogs = () => {
  const params = useParams();
  const nav = useNavigate();

  const applyFilter = (selectedOption) => {
    const filter = selectedOption ? selectedOption.value : "";
    if (filter === "") {
      nav(`/blogs/${params.category}`);
    } else {
      nav(`/blogs/${params.category}/${filter}`);
    }
  };

  const filterOptions = [
    { value: "", label: "All" },
    { value: "new", label: "New" },
    { value: "popular", label: "Popular" },
    { value: "trending", label: "Trending" },
  ];

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
      marginTop: 0,
      marginBottom: 0,
      borderTop: "none",
      borderBottom: "1px solid #ddd",
      boxShadow: "none",
      minWidth: "9rem",
      maxWidth: "9rem",
      color: "blueviolet",
      fontSize: "1.1rem",
      fontWeight: "bold",
    }),
    control: (provided) => ({
      ...provided,
      boxShadow: "none",
      border: "1px solid #ddd",
      color: "blue",
      minWidth: "9rem",
        maxWidth: "9rem",
        fontSize: "1.1rem",
        fontWeight: "bold",

    }),
  };

  return (
    <div style={{ margin: "3rem auto", display:"flex", alignContent:"space-around", justifyContent:"space-between",
        
     }}>
      <div
        className="blogs card"
        style={{
          background: "lightgreen",
          height: "14.5rem",
          width: "23rem",
          display: "flex",
          borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            justifyContent: "left",
            paddingLeft: "5rem",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "blueviolet",
            textTransform:"capitalize",
            boxShadow: "0 0 5px 1px #ddd",
            border: "1px solid #ddd",


        }}
      >
        Blog Filter: <span style={{color: "red", marginLeft:"0.5rem"}}>{params.category}</span></div>
        <div style={{ float: "right", padding: "1rem", background:"blueviolet", minWidth:"7rem",
            borderBottomRightRadius: "1rem",
            borderTopRightRadius: "1rem"

         }}>
          <Select
            options={filterOptions}
            onChange={applyFilter}
            styles={customStyles}
            // placeholder="Select a filter"
            menuPlacement="auto"
          />
        </div>
        
      </div>
  );
};

export default Blogs;
