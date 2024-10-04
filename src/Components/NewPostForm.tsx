import { FormEvent, useState } from "react";
import { CREATE_POST } from "../mutations/CreatePost";
import { useMutation } from "@apollo/client";
import { Spinner, Form, Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const [createPost, { data, loading }] = useMutation(CREATE_POST);

  if (loading) {
    return <Spinner />;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createPost({
      variables: {
        userId: userId,
        title: title,
        body: body,
      },
    });
    alert("Post uploaded successfully")
    console.log("Uploaded Successfully!");
  };

  return (
    <>
      <Container>
        <Link to={`/`}>
          <Button variant="primary">Home Page</Button>
        </Link>
        <h1>Create New Post</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNewPost">
            <Form.Label>User Information</Form.Label>
            <Form.Control
              value={userId}
              type="text"
              placeholder="What is your User ID?"
              autoComplete="off"
              onChange={(event) => setUserId(event.target.value)}
            />
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              type="text"
              placeholder="Pick your title of your post"
              autoComplete="off"
              onChange={(event) => setTitle(event.target.value)}
            />
            <Form.Label>Main Content</Form.Label>
            <Form.Control
              value={body}
              type="text"
              placeholder="Put Post Here"
              autoComplete="off"
              onChange={(event) => setBody(event.target.value)}
            />
            <Form.Text className="text-muted">
              Thank you for submission
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {data && (
          <>
            <h2>{data.createPost.title}</h2>
            <h3>{data.createPost.body}</h3>
          </>
        )}
      </Container>
    </>
  );
};

export default NewPostForm;
