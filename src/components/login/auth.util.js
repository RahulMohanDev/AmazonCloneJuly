export function authenticateUser(userName,passWord) {
    if(userName === 'admin' && passWord === 'admin') {
        return true;
    }
    return false;
}