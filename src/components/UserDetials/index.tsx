import './index.scss'
import {IuserData} from '../../interfaces/index'
interface Iprops {
    user:IuserData  
}
const Heading = ({user}:Iprops) => {
    return (
        <>
            <div className="user-details">
                <h2>
                    Welcome to my website
                </h2>
                <div className="card">
                    <h3 className="card-title">{user.userName}</h3>
                    <div className="card-body">
                        <div className="info">
                            <span>Email</span> : {user.Email}
                        </div>
                        <div className="info">
                            <span>Address</span> : {user.Address}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Heading;