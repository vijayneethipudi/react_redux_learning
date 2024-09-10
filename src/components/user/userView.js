import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./userSlice";


function UserView() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    const user = useSelector((state) => state.user)
    // function refreshUser() {
    //     dispatch(fetchUser())
    // }
    return (
        <div>
            {user.loading && <p>Loading...</p>}
            {!user.loading && user.user.username ? <p>Hello, {user.user.username}</p> : null}
        </div>
    )
}

export default UserView;