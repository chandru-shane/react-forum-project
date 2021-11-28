import React, { useEffect, useState } from "react";
import '../styles/components/Post.css'
import { Container, Box, Heading, Text,IconButton , Avatar , Button, HStack} from '@chakra-ui/react'

import { ArrowDownIcon, ArrowUpIcon,ChatIcon } from '@chakra-ui/icons';

export default function Post(props) {
    const [vote, setVote] = useState(0)
    useEffect(()=>{
        setVote(props.data.upvote_count - props.data.downvote_count)
    },[])
  return (
    <Box textAlign="center" py={10} px={6}>
   <Container flexDirection='row'>
   <Avatar src={props.data.created_user.profile.image}/>
   <Text>{props.data.created_user.profile.username}</Text>
   </Container>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {props.data.title}
      </Heading>
      <Text color={'gray.500'}>
        {props.data.content}
      </Text>
      <HStack flexDirection='row'>

        <Container >
            <Text>{vote}</Text>
        <IconButton m={1} icon={<ArrowUpIcon color='green'/>} />

 
<IconButton m={1} icon={<ArrowDownIcon size='3' color='red'/>}/>
        </Container>
<Button justifyContent='space-evenly'><ChatIcon m={1}/><Text>  {props.data.comment_count} </Text><Text> Comments</Text></Button>
      </HStack>
    </Box>
  );
}

// export default Post;