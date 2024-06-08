
import "./index.scss"
interface IProps{
    logo:string,
    aboutText:string,
    isLogin:boolean,
    setIsLogin:(val:boolean)=>void
  
}
const Navbar = ({logo,aboutText,isLogin,setIsLogin}:IProps) => {
    return (
        <>
         <nav>
            <ul className="navbar-list">
                <li><a href="#" className="navbar-item">{logo}</a></li>
                <li><a href="#" className="navbar-item">Home</a></li>
                <li><a href="#" className="navbar-item">Services</a></li>
                <li><a href="#" className="navbar-item">{aboutText}</a></li> 
                <li><a href="#" className="navbar-item">Contact</a></li>
                <li><button className="navbar-item btn" onClick={()=> setIsLogin(!isLogin)}>{isLogin ? "Logout" :"Login"}
                    </button></li>
            </ul>
        </nav>
        </>  
    );
}
export default Navbar; // ** Export default ComponentName => import ComponentName from filepath

