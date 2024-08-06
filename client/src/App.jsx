import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  styled,
  TextField,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

function App() {
  const [post, setPost] = useState({
    title: "",
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("photo", post.photo);

    const response = await axios.post(
      "http://localhost:3000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Title"
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
              </Box>

              {/* <input
          type="text"
          placeholder="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        /> */}

              <Box mb={2}>
                <Button
                  component="label"
                  name="photo"
                  id=""
                  onChange={(e) =>
                    setPost({ ...post, photo: e.target.files[0] })
                  }
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUpload />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>

              {/* <input
          type="file"
          name="photo"
          id=""
          onChange={(e) => setPost({ ...post, photo: e.target.files[0] })}
        /> */}

              <Box mb={2}>
                <Button type="submit" variant="contained">Submit</Button>
              </Box>

              {/* <button type="submit">Subir</button> */}
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default App;
