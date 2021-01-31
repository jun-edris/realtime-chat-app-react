import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get(`https://api.chatengine.io/chats`, { headers: authObject });

           localStorage.setItem('username', username);

           window.location.reload();
        }
        catch (error) {
            setError('Sorry wrong credentials!!');
        }
    }


    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit} action="">
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="input" 
                        placeholder="Username" 
                        required
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input" 
                        placeholder="Password" 
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;