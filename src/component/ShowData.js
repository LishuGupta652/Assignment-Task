import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import { Container } from "../styles/HomeStyles";

const ShowData = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([
    { name: "test", email: "test@test.com" },
  ]);

  const fetchData = () => {
    // geting data
    setLoading(true);
    fetch("https://gitman-restapi.herokuapp.com/api/techwondoe/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setApiData(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(apiData);
  }, []);
  return (
    <Container>
      <div className="show-cards">
        <ul>
          {apiData.map((data, i) => (
            <Card
              style={{ width: 300, marginTop: 16 }}
              loading={loading}
              key={i}
            >
              <Meta title={data.name} description={data.audio} />
            </Card>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ShowData;
