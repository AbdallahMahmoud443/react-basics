export interface IuserData {
    userName:string,
    Email:string,
    Password:string,
    Address:string  
  
}

export interface IFormInputList{
    label:string,
    type:string,
    name:  keyof IuserData,
    id:string
}
