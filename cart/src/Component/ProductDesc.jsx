
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getUser(id) {
  return fetch(`https://warm-sea-77698.herokuapp.com/newarrival/${id}`).then((res) => res.json());
}

function ProductDesc() {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    getUser(params.id).then((res) => {
      setData(res);
      
    });
  }, [params.id]);
  
  return (
    <div>
      <h1>USER ID: {params.id}</h1>
      {data && (
        <>
          <img src={data.img} width="300px" alt={data.img} />
          <h3>Title: {data.title}</h3>
          <p>Description: {data.des}</p>

          <h3>Price: {data.price}</h3>
        </>
      )}
      <Link to="/newarrival">GO Back</Link>
    </div>
  );
}

export default ProductDesc
