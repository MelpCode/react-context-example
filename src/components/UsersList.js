import React,{useEffect,useContext} from 'react';
import UserContext from "../context/User/UserContext";


const UsersList = ()=>{

    const {users,getUsers,getProfile} = useContext(UserContext);

    useEffect(()=>{
        getUsers();
    },[])

    return(
        <div className="list-group">
            {
                users.map(user=>(
                    <a 
                        href="#!"
                        key={user.id}
                        className="list-group-item list-group-item-action d-flex flex-row justify-content-center"
                        onClick={()=>getProfile(user.id)}>
                            <img src={user.avatar} alt="" className="img-fluid mr-auto rounded-circle" width="70"/>
                            <p>
                                {`${user.first_name} ${user.last_name}`}
                            </p>
                        </a>
                ))
            }
        </div>
    )
}

export default UsersList;

