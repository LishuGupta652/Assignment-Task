import React, { useState } from "react";

const ShowData = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  const fetchData = () => {
    // geting data
    fetch("https://gitman-restapi.herokuapp.com/api/techwondoe/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setApiData(res);
      });
  };

  return <div>showdata</div>;
};

export default ShowData;
