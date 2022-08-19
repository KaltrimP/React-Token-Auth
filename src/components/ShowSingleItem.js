import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function ShowSingleItem() {
  const param = useParams();
  const URL = `http://127.0.0.1:8000/api/posts/${param.id}`;
  const [items, setItems] = useState([]);
  // const stateParams = useLocation().state.stateParams

  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    await axios
      .get(URL)
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
        // setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  const delteItem = async (id) => {
    await axios
      .delete(`http://127.0.0.1:8000/api/posts/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err)
        
      });
    }

  return (
    <>
      {/* <h1>{stateParams.title}</h1> */}
      <h1>{items.title}</h1>
      <h1>{items.author}</h1>
      <h1>{items.description}</h1>
      <button className="btn btn-outline-danger" onClick={()=>delteItem(items.id)} >Delete</button>
    </>
  );
}

export default ShowSingleItem;
