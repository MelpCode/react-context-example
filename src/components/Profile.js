import React,{useContext} from 'react';


import UserContext from '../context/User/UserContext';

const Profile =()=>{
    const {userSelected} = useContext(UserContext);
    return(
        <div>
            {
                userSelected ? 
                (  <div className="card shadow profile">
                    <div className="card-body text-center">
                        <img src={userSelected.avatar} alt=""
                        className="img-fluid card-img-top rounded-circle m-auto"
                        style={{width:170}}/>
                        <h1>{`${userSelected.first_name} ${userSelected.last_name}`}</h1>
                        <p>{userSelected.email}</p>
                    </div>
                </div> )
                : ( <div className="container mt-4">
                    <div className="alert alert-primary">
                        User not Selected
                    </div>
                </div> )
            }
        </div>
    )
}

export default Profile;