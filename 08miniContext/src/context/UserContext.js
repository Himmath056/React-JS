import React from 'react'
import { createContext } from 'react'

const UserContext = React.createContext()   //step 1

export default UserContext;


// This is how it can be used
{/* <UserContext>
    <Login/>
    <Card>      
        <Data/>
    </Card>    
<UserContext/> */}