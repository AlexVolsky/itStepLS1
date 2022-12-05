
import React, {useState, useEffect} from 'react';
/* import { isAnyArrayBuffer } from 'util/types'; */
import axios from 'axios';
import { IPost } from './interfacePost';
import http from '../../http';

const Posts = ({userId = 0}: {userId?: number}) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => { getAllPosts()}, []);
    const getAllPosts = async () => {
        // ASYNC AWAIT
        try {
            const responseData = await http.get('/users');
            const users = responseData.data;
            setPosts(users);
        } catch (err) {
            alert(err);
        }
        // PROMISE
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        //     console.log(res.data);
        //     setUsers(res.data)
        // });
    };
    
    const initialPost = {
        userId: 1,
        id: 1,
        title: '',
        body: '' 
    }

    useEffect(() => {getPosts()}, []);
    const getPosts = async() =>{
        try{ 
            const responseData = await http.get(userId === 0 ? `/posts` : `/posts?userId=${userId}`);
            setPosts(responseData.data);

        } catch (err){
                alert(err);
        }
               
    }




        const deletePost = async (id: number) => {
            const confirm = window.confirm('Do you want delete this user?');
            if(confirm){
                setPosts(posts.filter(post => post.id !== id));
                console.log(id); 
                try{ 
                    const responseData = await axios.delete(`http://jsonplaceholder.typicode.com/posts/id=${id}`);
                    /* setUsers([...users, responseData.data]); */
                    console.log(responseData.status + ` id post № ${id}`);
        
                } catch (err){
                        alert(err);
                }   
            }
        }

    return (
        
        <div>
                             
            <div>
                {userId === 0 ? <h1>THIS is Posts page!!!</h1> : <h3>User posts:   </h3>}

                <button className="btn btn-primary w-25" >Create Post</button>
                
                <button className="btn btn-primary ms-5 w-25" onClick={ () =>getPosts()}>Get Posts</button>
            </div>
                

              {posts.map(post => 
                        <div className="card w-75" key={post.id}>

                                <div className="card-body">
                                    <h5 className="card-title">Post № {post.id}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <button className="btn btn-primary" onClick={() => deletePost(post.id)}>delete Post</button>
                                </div>
                        </div>
                )};     

      </div>
    )    
}

export default Posts;