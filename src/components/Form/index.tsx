import './index.scss'
import { IuserData } from '../../interfaces/index'
import { formInputList } from '../../data/data'
import { useState } from 'react'

interface IProps {
    setIsLogin: (val: boolean) => void
    UserData: IuserData,
    setUserData: (val: IuserData) => void
}


const FormComponent = ({ setIsLogin, UserData, setUserData }: IProps) => {
    const [arrData,setArrData] = useState(formInputList);
    //** Handlers of component*/
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...UserData,
            [name]: value, // Dynamic Key [value]
        });
    };

    //** Renders of components*/
    const renderInputFormList = arrData.map((input, idx) => {
        // Key Attribute must write in first element use index when you don't delete or add or update item in component
        return (
                <div className="input-group" key={idx} >
                    <label htmlFor={input.id}>{input.label}</label>
                    <input type={input.type} name={input.name} id={input.id} value={UserData[input.name]} onChange={onChangeHandler} />
                    <button onClick={()=>{ //Bad Practices for delete element using Key
                        const filteredArrData = arrData.filter(input => input.name !==  arrData[idx]["name"]) // Bad way for practice only
                        console.log(`Remove ${idx}`);
                        setArrData(filteredArrData); 
                    }}>❌</button>   
                </div>
        );
    });
    return (
        <>
            <div className='container'>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <h2>Registration Form</h2>
                    {renderInputFormList}
                    <button onClick={() => {
                        setIsLogin(true);
                    }}>Login</button>
                </form>
            </div>
        </>
    );
}
export default FormComponent;