import React, {SetStateAction} from 'react';
import {IUser} from "./interfaces";
import http from "../../http";
import { Link } from 'react-router-dom' 


/* const UserCards = () => { */
   
/*     const [users, setUsers] = useState(USERS); */
/*         const [users, setUsers] = useState<IUser[]>([]);
        const [search, setSearch] = useState<string>('');
      
        const[isShowEdit,setIsShowEdit] = useState<boolean>(false);
        const [newUserId, setNewUserId] = useState(USERS.length + 1);

        const searchchedUsers = 
 */

        const UserCards = ({users, setUsers}: { users: IUser[], setUsers: React.Dispatch<SetStateAction<IUser[]>> }) => {
            const deleteUser = async (id: number) => {
                const confirm = window.confirm('Do you want delete this user?');
                if (confirm) {
                    const deleteUser = await http.delete(`/users/${id}`);
                    if (deleteUser.status === 200) {
                        setUsers(users.filter(user => user.id !== id));
                        console.log(deleteUser.status);
                    }
                }
            }
    
            return (
                <>
                    {users.map(user =>
                        <div className="col" key={user.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <Link to={`/user/${user.id}`}>
                                        <h5 className="card-title">{ 'name: ' +  user.name}</h5>
                                    </Link>
                                    
                                    <p className="card-text">{'username: ' + user.username}</p>
                                    <p className="card-text">{'email: ' + user.email}</p>
                                    <p className="card-text">{'phone: ' + user?.phone}</p>
                                    <p className="card-text">{'website: ' + user.website}</p>
                                    <p className="card-text">{(!user.company.name ? '' : 'company: ' + user.company.name)}</p>
                                    <p className="card-text">{(!user?.address.city ? '': 'address: '+  user.address.city)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger"
                                            onClick={() => deleteUser(user.id)}
                                    >
                                        Delete this user
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
                )
            };
            
            export default UserCards;


/*     const deleteNewUser = async(idx: number) =>{
        // async await
        try{ 
            const responseData = await http.delete(`/users/${idx}`);
            // setUsers([...users, responseData.data]); 
            console.log(responseData);

        } catch (err){
                alert(err);
        }
    } */
/* 
    const getAllUsers = async() =>{
        // async await
        try{ 
            const responseData = await http.get('/users');
            setUsers(responseData.data);

        } catch (err){
                alert(err);
        }
        */
/*         axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res.data);
            setUsers(res.data);
           // Promise 
        }); */
        
   /*  } */

  
    

   

/*     const addNewCard = () => {
        const arrId = ['#id', '#name', '#username', '#email', '#phone', '#address', '#website', '#company'];
        const arrInfoNewCard = document.querySelectorAll('form #id, form  #name, form  #username, form #email,  form #phone, form  #address, form #website, form #company');
        
        const newObjInfoPersen: {} = arrInfoNewCard.reduce((target: any, key: any, index: number) => {
            target[arrId[index]] = key.value;
            return target;
          }, {})
        console.log(newObjInfoPersen); 
        
    } */


       /*  console.log(userCard);
 */

    



/* rscx - снипет! */