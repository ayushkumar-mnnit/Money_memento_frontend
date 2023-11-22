import React, { useState } from 'react';
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuItem, MenuList, Spinner, Text, Tooltip, effect, useDisclosure } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModel from './ProfileModel';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import ChatLoading from './../ChatLoadig';
import UserListItem from './../UserAvator/UserListItem';
import { getSender } from '../../Configue/ChatLogics';
import NotificationBadge, { Effect } from 'react-notification-badge'
const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  // const {loadingChat,setLoadingChat}=useState(false);
  const {
    setSelectedChat,
    user,
    chats,
    setChats,
    notifications,
    setnotifications,
  } = ChatState();


  const toast = useToast();
  const { onClose, isOpen, onOpen } = useDisclosure();
  const navigate = useNavigate();
 

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: 'Please enter text in search',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top-left',
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`, // Fixed the typo here, "Authorisation" to "Authorization"
        },
      };
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      console.log(data);
if(!chats.find((c)=>c._id===data._id))setChats([data,...chats]);
console.log(data);
setSelectedChat(data);
setLoading(false);
setSearchResult(data);
console.log(data);
     
    } catch (error) {
      toast({
        title: 'success',
  
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
      });
    }
  };
const accessChat=async(userId)=>{
  try{
    // setLoadingChat(true);

   const config= {
    headers: {
      "Content-type":"application/json",
      Authorization: `Bearer ${user.token}`, // Fixed the typo here, "Authorisation" to "Authorization"
    },
  };
  const {data}=await axios.post('/api/chat',{userId},config);
  setSelectedChat(data);
  // setLoadingChat(false)
  onClose();
  }catch(error)
  {
    toast({
      title: 'fethced chat',
    
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: 'bottom-left',
  })

  }

};
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        p="5px 10px"
        borderBottom="1px solid #e2e8f0"
        flexDirection="row"
      >
        <Box display="flex" alignItems="center">
          <Tooltip label="Search User to chat" hasArrow placement="bottom-end">
            <Button variant="ghost" onClick={onOpen}>
              <i className="fa fa-search" aria-hidden="true"></i>
              <Text d={{ base: 'none', md: 'flex' }} px="4">
                Search User
              </Text>
            </Button>
          </Tooltip>
        </Box>

        <Text fontSize="2xl" fontFamily="Work Sans" textAlign="center">
          BHARAT CHAT
        </Text>
        <Menu>
          <MenuButton p={1}>
          <NotificationBadge
              count={notifications.length}
                effect={Effect.SCALE}
              
              
              />
      

         
          
          
            <BellIcon fontSize="2xl" m={1}/>
          </MenuButton>
          <MenuList pl={2}>
          {notifications.map(notif => (
  <MenuItem key={notif._id} onClick={() => {
    setSelectedChat(notif.chat);
    setnotifications(notifications.filter(n => n !== notif));
  }}>
    {notif.chat.isGroupChat
      ? `New Message in ${notif.chat.chatName}`
      : `New Message from ${getSender(user, notif.chat.users)}`
    }
  </MenuItem>
))}


          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
           
          </MenuButton>
          <MenuList>
            <ProfileModel user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModel>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box d="flex" pb={2}>
              <Input
                placeholder="Search by name and email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? <ChatLoading />:(
              searchResult?.map(user=>(
                <UserListItem
                key={user._id}
                user={user}
                handleFunction={()=>{
                  accessChat(user._id)
                }}/>

              ))

            )}
            {/* {loadingChat&&<Spinner  ml="auto"d="flex"/>} */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;