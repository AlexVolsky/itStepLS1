import React, {useEffect, useState} from 'react';
import AddUsers from '../Users/AddUsers';
import UserCards from '../Users/UserCards';
import SearchUsers from '../Search/Search';
import { useSearch } from '../../hooks/useSearch';
import http from '../../http';
import { IUser } from '../Users/interfaces';


const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState<string>('');
    const [isShowEdit, setIsShowEdit] = useState<boolean>(false);
    const searchedUsers = useSearch(users, search, 'name');

    useEffect(() => { getAllUsers()}, []);
    const getAllUsers = async () => {
        // ASYNC AWAIT
        try {
            const responseData = await http.get('/users');
            const users = responseData.data;
            setUsers(users);
        } catch (err) {
            alert(err);
        }
        // PROMISE
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        //     console.log(res.data);
        //     setUsers(res.data)
        // });
    };
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            <h1 className="text-center w-100">Users page</h1>
            {/* <button className="btn btn-success" onClick={() => getAllUsers()}>Get All users</button> // кнопка для получения пользователей*/} 
            <div className='blockForm' style={{margin: " 0 auto"}}>
                <button className="btn btn-success" onClick={() => setIsShowEdit(!isShowEdit)}>Show Form for Add user
                </button>
                {isShowEdit && <AddUsers users={users} setUsers={setUsers}/>}
            </div>
            <SearchUsers setSearch={setSearch}/>
            {
            users.length ? <UserCards users={searchedUsers} setUsers={setUsers} /> : <h1> Users not found</h1> // spiner
            }
            
        </div>
    );
};

export default Users;