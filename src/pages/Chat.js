import { Box } from "@chakra-ui/react"
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "../components/Chatstruct/SideDrawer"
import MyChats from "../components/Chatstruct/MyChats"
import ChatBox from "../components/Chatstruct/ChatBox"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Addfile from "../components/Addfile/Addfile"


const Chat = () => {
const {user} = ChatState()
const [fetchAgain, setFetchAgain] = useState(false);
const navigate=useNavigate();
const navigatetoabout=()=>{
  navigate('/about')
}


  return (
    <>
    <div style={{width:"100%"}}>
   {user&&<SideDrawer/>}
    <Box
    d="flex"
    justifyContent='space-between'
    w='100%'
    h='91.5vh'
    p='10px'>

      {user&&(<MyChats
      fetchAgain={fetchAgain} 
      />)}
      {user&&(<ChatBox
       fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>)}
    </Box>
    


      </div>
     
      </>
  )
}

export default Chat