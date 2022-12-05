import React, {useState, useEffect} from 'react';
import http from '../../http';
import { IPost } from '../Posts/interfacePost';
import { useParams } from 'react-router-dom';
import { IUser } from '../Users/interfaces';
import Posts from '../Posts/Posts';

const User = () => {

    const params = useParams();
    const [postsUser, setpostsUser] = useState<IPost[]>([]);
    const [isShowEdit, setIsShowEdit] = useState<boolean>(false);
    const userId = params.id ? +params.id : 0;
  
    const initialUser = {
        id:  '',
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        website: '',
        company: ''
    }
    const [user, setUser] = useState<any>(initialUser);
    useEffect(() => {
        getAllUserDataById();
    }, []);
    const getAllUserDataById = async () => {
        const userData = await http.get(`/users/${userId}`);
       /*  const userPostsData = await http.get(`/posts?userId=${userData.data.id}`); */
        setUser(userData.data);
    /*     setpostsUser(userPostsData.data); */
/*         console.log(userData.data);
        console.log(userPostsData.data); */
    /*     console.log(params); */
    }



    return (
        <div>
                        <div className='card'>
                                {Object.keys(user).map(field => {

                                    if(field !== 'id' && field !== 'address' && field !== 'company'){
                                        return <input value = {user[field as keyof Omit<IUser, 'address' | 'company'>]} 
                                        onChange={event => setUser({...user, [field]: event.target.value})}/>
                                    }

                                        })}
                        </div>
                    

                        <div className="col" key={user.id}>
                                                    <div className="card h-100">
                                                        <div className="card-body">
                                    
                                                                <h5 className="card-title">{ 'name: ' +  user.name}</h5>
                                                         
                                                            
                                                            <p className="card-text">{'username: ' + user.username}</p>
                                                            <p className="card-text">{'email: ' + user.email}</p>
                                                            <p className="card-text">{'phone: ' + user?.phone}</p>
                                                            <p className="card-text">{'website: ' + user.website}</p>
                                                            <p className="card-text">{(!user.company.name ? '' : 'company: ' + user.company.name)}</p>
                                                            <p className="card-text">{(!user?.address.city ? '': 'address: '+  user.address.city)}</p>
                                                        </div>
                                                       
                                                    </div>
                        </div>



                    <button className="btn btn-primary ms-5 w-25"  onClick={() => setIsShowEdit(!isShowEdit)}>show/hide Posts</button>
                    { isShowEdit && <Posts userId={userId}/>}
                    



            
{/*            {postsUser.map(post => 
                        <div className="card w-75" key={post.id}>
                                <div className="card-body">
                                    <h5 className="card-title">Post № {post.id}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <button className="btn btn-primary">delete Post</button>
                                </div>
                        </div>
                )}; */}
        </div>
    );
};

export default User;