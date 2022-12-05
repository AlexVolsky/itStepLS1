import React, {useState, ChangeEvent, FormEvent} from 'react';
import http from '../../http';

const Login = () => {
    const [loginData, setloginData] = useState<{username: string; password: string}>({username: 'mor_2314', password: '83r5^_'});
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id
        setloginData({...loginData, [field]: event.target.value})
        }

        const login = async(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            try{
                const isLoginDta = await http.post('http://fakestoreapi.com/auth/login', loginData);
                if(isLoginDta.data){
                    alert('Welcom')
                }
            }
            catch(err){
                console.log(err);
            }
            
        }
    return (
        <form className="row g-3" onSubmit={login}>
            <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input type="text"  
                       className="form-control"
                       placeholder='Login' 
                       id="username" 
                       value={loginData.username}
                       onChange={onChange}/>
                      
            </div>
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={loginData.password}
                       onChange={onChange}/>
                      
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" >Confirm identity</button>
            </div>
      </form>
    );
};

export default Login;