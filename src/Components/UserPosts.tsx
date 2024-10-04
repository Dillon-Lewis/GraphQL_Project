import { useQuery } from "@apollo/client";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { GET_USER_POSTS } from "../Queries/queries";

interface UserPostData {
    id: string
    name: string
    posts: {
        data:Data
    }[]
}

interface Data {
  id: string
  title: string
  body: string
}


const UserPosts = () => {

    const {id} = useParams();
    const {data, loading}= useQuery(GET_USER_POSTS, {
        variables: {
            id
        },
    });

    if (loading) {
        return <Spinner />
    }


  return (
    <>
    <Link to= {`/`}>
    <Button variant="primary" >Home Page</Button>
    </Link>
    <h1>More from {data.user.name} </h1>
    <Container>
        {data.user.posts.data.map(({id, title, body}: Data) => (
        <Card style={{ width: "18rem" }} key={id}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
    </>
  )
}

export default UserPosts