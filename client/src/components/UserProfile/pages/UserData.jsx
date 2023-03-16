import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { object } from 'yup';


const UserData = () => {
    const { user, isAuthenticated} = useAuth0()

console.log(user.given_name)
    return (
        isAuthenticated &&  (
            <article className='columm'>
                {user?.picture && <img src={user.picture} alt={user.given_name} />}
                <h2>{user.given_name}</h2>
                <ul>
                    {Object.keys(user).map((objkey, i) => <li key={i}>{objkey}: {user[objkey]} </li>)}
                       

                    
                </ul> 

            </article>
        ) 

        
    );
}

export default UserData;
