const API_HOST = 'http://localhost:1406';

// user API endpoints
const API_SIGNUP_POST = API_HOST + '/users/signup';
const API_LOGIN_POST = API_HOST + '/users/login';
const API_GET_ALL_USERS = API_HOST + '/users/all-user';
const API_LOGOUT = API_HOST + '/users/logout';
const API_SIGNUP_SOCIALNETWORK_POST = API_HOST + '/users/social-network/signup';
const API_GET_USER_BY_ID = (id) => `${API_HOST}/users/info/${id}`;
const API_UPDATE_USER = (id) => `${API_HOST}/users/update/${id}`;
const API_UPDATE_USER_PASSWORD = `${API_HOST}/users/reset-password`;
const API_DELETE_USER = (id) => `${API_HOST}/users/delete/${id}`;
const API_CHECK_EXIST_USER = (id) => `${API_HOST}/users/is-existed/${id}`;


// friend API endpoints
const API_LIST_FRIEND = API_HOST + '/friends/list-friends'
const API_LIST_FRIEND_SUGGEST = API_HOST + '/friends/list-friends-suggest'
const API_LIST_INVITED_FRIEND = API_HOST + '/friends/list-invited-friends-suggest'
const API_LIST_FRIEND_INVITE = API_HOST + '/friends/list-friend-invite'

const API_ADD_FRIEND = (id) => `${API_HOST}/friends/add-friend/${id}`;
const API_ACCEPT_INVITE = (id) => `${API_HOST}/friends/accept-add-friend/${id}`;
const API_CHECK_IF_FRIEND = (id) => `${API_HOST}/friends/check-friend/${id}`;
const API_CHECK_FRIEND_REQUEST = (id) => `${API_HOST}/friends/check-request/${id}`;
const API_CANCEL_FRIEND_REQUEST = (id) => `${API_HOST}/friends/cancel-request/${id}`;



////// messages
const API_GET_MESSAGES = (id) => `${API_HOST}/messages/all-messages/${id}`;
const API_CHECK_EXIST_KEY_PAIR = `${API_HOST}/messages/check-exists-keypair`;
const API_POST_KEY_PAIR = `${API_HOST}/messages/post-keypair`;
const API_POST_DECODE_PRIVATE_KEY_PAIR = `${API_HOST}/messages/post-decode-private-key`;
const API_DECODE_MESSAGE = `${API_HOST}/messages/decode-message`;




// User infomanation API endpoint
const API_GET_INFO_USER_PROFILE_BY_ID = (id) => `${API_HOST}/users/info-profile/${id}`;
const API_GET_INFO_OWNER_PROFILE_BY_ID = `${API_HOST}/users/info-profile/`;


//Token
// const API_LOGOUT = API_HOST + '/token/delete';
const API_ROTATION_TOKEN = API_HOST + '/token/create';
const API_DECODE_TOKEN = API_HOST + '/token/decode-refresh-token';

// OTP API endpoints
const API_CREATE_OTP = API_HOST + '/otp/create';
const API_CREATE_LINK_OTP = API_HOST + '/otp/link/create';
const API_CREATE_OTP_SIGNUP = API_HOST + '/otp/signup/create';
const API_VERIFY_OTP = API_HOST + '/otp/verify';

export {
    API_SIGNUP_POST,
    API_LOGIN_POST,
    API_LOGOUT,
    API_GET_ALL_USERS,
    API_GET_USER_BY_ID,
    API_GET_INFO_USER_PROFILE_BY_ID,
    API_GET_INFO_OWNER_PROFILE_BY_ID,
    API_UPDATE_USER,
    API_UPDATE_USER_PASSWORD,
    API_DELETE_USER,
    API_CHECK_EXIST_USER,
    API_ADD_FRIEND,
    API_ACCEPT_INVITE,
    API_SIGNUP_SOCIALNETWORK_POST,
    API_DECODE_TOKEN,
    API_ROTATION_TOKEN,
    API_CREATE_OTP,
    API_CREATE_LINK_OTP,
    API_CREATE_OTP_SIGNUP,
    API_VERIFY_OTP,
    API_LIST_FRIEND_INVITE,
    API_CHECK_FRIEND_REQUEST,
    API_CANCEL_FRIEND_REQUEST,
    API_GET_MESSAGES,
    API_CHECK_EXIST_KEY_PAIR,
    API_POST_KEY_PAIR,
    API_POST_DECODE_PRIVATE_KEY_PAIR,
    API_DECODE_MESSAGE,
    // api friend
    API_LIST_FRIEND,
    API_LIST_FRIEND_SUGGEST,
    API_LIST_INVITED_FRIEND,
    API_CHECK_IF_FRIEND
    // api messages
};
