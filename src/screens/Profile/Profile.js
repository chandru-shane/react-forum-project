
import { Flex, Avatar } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import EndPoints from "../../constants/EndPoints";



const Profile = props => {
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(
    EndPoints.otherUserFollowers('data')
    )

   
    useEffect(()=>{
        if(!isLoaded){
            const getUserProfileData =  async () => {
    console.log(EndPoints.profile)
    var data = await fetch(EndPoints.profile, {
        method:'GET',
        headers: {
            'Authorization':'Token 98ffa2a2537f30cb2caefabfd910fb6d0c93be2b'
        }
    })
    // console.log(data)
    if (data.status == 200){
        var code = data.json()
        console.log(code)
    } 
}

            setIsLoaded(true);
        }
    },[])
    return (
        <Flex>
            <Avatar></Avatar>
            
        </Flex>
    );
}

export default Profile;