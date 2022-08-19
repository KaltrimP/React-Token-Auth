import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from "bootstrap";

function ShowList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const URL = "http://127.0.0.1:8000/api/posts";
  const navigate = useNavigate()

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    await axios
      .get(URL)
      .then((response) => {
        setItems(response.data.data);
        console.log(response.data.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = async (id) => {
    await axios
      .delete(URL + `/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err)
        setError('This is not working');
        
      });
  };
  // if(error){
  //   return <Navigate to='/home'/>
  // }

  return (
    <>
      <div bg='primary' className="position-relative  ">
        {loading &&
          items.map((item) => (

        <Card bg="primary" border="info" className=" m-1 position-relative top-0 start-50 translate-middle-x" key={item.id} style={{ width: '50rem' }}>
          <Card.Body >
            <Card.Title className="pb-4" bg="primar text-danger" >{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-white">{item.author}</Card.Subtitle>
            <Card.Text className="text-white">
            {item.description}
            </Card.Text>
            <Card.Link className="m-3 btn btn-info" as={Link} to={`/posts/${item.id}`} >Go to</Card.Link>
            <button className="btn btn-danger" onClick={()=>deleteItem(item.id)} >Delete</button>
          </Card.Body>
        </Card>
          ))}
      </div>
    </>
  );
}

export default ShowList;
