import { GET_POSTS } from "../Queries/queries";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DELETE_POST } from "../mutations/DeletePost";
import { useParams } from "react-router-dom";

interface PostData {
  id: string;
  title: string;
  body: string;
  user: {
    id: string;
    name: string;
  };
}

const PostsPage = () => {
  const { data, loading} = useQuery(GET_POSTS);

  const {id} = useParams()
  const [deletePost, {data: deleteData}] = useMutation(DELETE_POST, {
    variables: {
      id
    },
  });

  if (loading) {
    return <Spinner animation="border" />;
  }


  return (
    <>
      <br />
      <h1>Posts In System:</h1>
      <Container>
        {data.posts.data.map(({ id, title, body, user }: PostData) => (
          <Card key={id} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{body}</Card.Text>
              <Link to={`${user.id}`}>
                <Button variant="success">More By {user.name}</Button>
              </Link>
              <Button variant="danger" onClick={() => {
                alert('Post Deleted!')
                deletePost(deleteData.post.id)}}>
                Delete Post
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default PostsPage;
