import {
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import "../App.css"

function Homepage() {

  const [state,setState] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      {state ? <Login /> : <Signup />}

      <div class="drawerBox">
        <div
          style={{
            position: "relative",
            color: "black",
            fontSize: "2em",
            textAlign: "center",
            marginTop: "20%",
          }}
        >
          <span onClick={() => setState(true)}>Login</span>
          <br />
          <span onClick={() => setState(false)}>Register</span>
        </div>
      </div>
    </Container>
  );
}

export default Homepage;
