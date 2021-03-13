
import './App.css';
import UsersList from './components/UsersList';
import Profile from  './components/Profile';

import UserState from "./context/User/UserState";

function App() {
  return (
    <div className="container my-4">
      <UserState>
      <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className="card border-rounded-3 shadow-lg">
                <div className="card-body">
                  <div className="row p-2">
                    <div className="col-md-6 listgroup">
                      <UsersList/>
                    </div>
                    <div className="col-md-6 profile">
                      <Profile/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      </UserState>
    </div>
  );
}

export default App;
