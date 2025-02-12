function userGreeting(props) {
    if (props.isLoggedIn) {
        return <h2>Welcome back {props.username}</h2>
    }
    else {
        return <h2>Welcome guest</h2>
    }
}

export default userGreeting