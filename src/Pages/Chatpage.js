import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { Container } from "@chakra-ui/react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { useHistory } from "react-router-dom";
import "../App.css"

const Chatpage = () => {
    const history = useHistory();
const logoutHandler = () => {
  localStorage.removeItem("userInfo");
  history.push("/");
};


const [state, setState] = useState(0);

     const reload = function () {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        console.log("reloaded");
        window.location.reload();
      }
    };

    reload();
  
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div>
      <Container maxW="xl" centerContent>
        <div class="drawerBoxChatPage">
          <div
            style={{
              position: "relative",
              color: "white",
              fontSize: "1.25em",
              textAlign: "center",
              marginTop: "2.5%",
            }}
          >
            <span onClick={() => setState(2)} style={{ float: "left" }}>
              Search User
            </span>

            <span onClick={() => setState(0)}>Chats</span>
            <span onClick={logoutHandler} style={{ float: "right" }}>
              Logout
            </span>
          </div>
        </div>
      </Container>
      <br/>
      <div style={{ width: "100%" }}>
        {/* {user && <SideDrawer />} */}
        {/* <SideDrawer /> */}
        {state === 0 ? (
          <Box justifyContent="space-between" w="100%" h="91.5vh" p="10px">
            {user && (
              <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            )}
            <br />
            {user && <MyChats fetchAgain={fetchAgain} />}

            {/* <MyChats fetchAgain={fetchAgain} /> */}

            {/* <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> */}
          </Box>
        ) : (
          <SideDrawer />
        )}
      </div>
    </div>
  );
};

export default Chatpage;
