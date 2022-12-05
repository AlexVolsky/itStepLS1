
import http from '../../http';
import { USERS } from './users';
import React, {ChangeEvent, FormEvent, useMemo, useState} from 'react';
import { IUser } from './interfaces';


const AddUsers = ({users, setUsers}: {users: IUser[], setUsers: React.Dispatch<IUser[]>}) => {
    const initialUserCard = {
        id:  '',
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        website: '',
        company: ''
    }
    const [userCard, setUserCard] = useState<any>(initialUserCard);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field: string = event.target.id;
        setUserCard({...userCard,[field]: event.target.value})
        }


    

        const postNewUser = async() =>{
            // async await
            try{ 
                const responseData = await http.post('/users', userCard);
                setUsers([...users, responseData.data]);
                console.log(responseData.status);
    
            } catch (err){
                
                    alert(err);
            }
        }
        
        const addUser = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            postNewUser();
/*                 const userValueWithId = {...userCard, id: newUserId}
            setNewUserId(newUserId + 1)
            setUsers([...users, userValueWithId]); */
            setUserCard(initialUserCard);
    }


    
    return (
        <form onSubmit={event => addUser(event)}>

                    {Object.keys(USERS[0]).map(field => {
                    if(field === "company"  || field === 'id' || field === 'address')return;
                        return  <input 

                                        required
                                        className='form-control my-2'
                                        key={field}
                                        id={field}
                                        value={userCard[field]} 
                                        placeholder={`Input user ${field}`} 
                                        onChange={(event) => {onChange(event)}}
                                    />


                    }
            )}

                    <button className='btn btn-success' type='submit' onClick={() => {
            /*                             console.log(userCard);
                            setUsers([...users, userCard]);

                            console.log(users); */
                        }
                            
                 }>add New User</button>
         </form>
    );
};

export default AddUsers;