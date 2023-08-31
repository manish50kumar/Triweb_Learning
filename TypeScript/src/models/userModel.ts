


const addUserToDB = (username:string,password:string,age:number) => {
    console.log(username, password,age);
    return "User Registration Done!!";
}



interface User{
    id: number,
    uname: string,
    password: string,
    age: number,
    is_active: true | false,
    accountStatus : string | number  //Union Type
}

const updateUserData = (objUser:User):string => {    // its return string type value
    console.log(objUser.uname);
    return "Update User Done !!!";
}

export {addUserToDB,updateUserData}