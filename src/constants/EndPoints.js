const DOMAIN = 'http://127.0.0.1:8000/'

const getEndPoints = (urlroute) => {
    return `${DOMAIN}${urlroute}`
}




const EndPoints = {
    register: getEndPoints('api/accounts/register/'),
    login: getEndPoints('api/accounts/login/'),
    isAuth: getEndPoints('api/profiles/isauth/'),

    profile:getEndPoints('api/userprofile/username/'),
    
    follow:getEndPoints('api/userprofile/follow/'),
    
     otherUserProfileDetail(username){
        return `${DOMAIN}api/userprofile/username/${username}/`
    },

     otherUserFollowing(username){
        return `${DOMAIN}api/userprofile/following/${username}/`
    },

     otherUserFollowers(username){
        return `${DOMAIN}api/userprofile/followers/${username}/`
    }
}

export default EndPoints;