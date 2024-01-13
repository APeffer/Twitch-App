import { useState, useEffect } from "react";

const TwitchUserForm = () => {
    const [username, setUsername] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [userData, setUserData] = useState(null);
    const [jsonString, setJsonString] = useState('');

    const authenticateTwitch = async () => {
        try{ 
            const response = await fetch('https://id.twitch.tv/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&grant_type=client_credentials`
        })
        
        if (response.ok) {
            const data = await response.json();
            setAccessToken(data.access_token);
            
            return data.access_token;
          } else {
            console.error('Authentication failed');
          }
        } catch (error) {
          console.error('Error during authentication:', error.message);
        }

    }

    const getUserData = async () => {
        try{
                const response = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
                    method: 'GET',
                    headers: {
                    'Client-ID': process.env.REACT_APP_CLIENT_ID,
                    'Authorization': `Bearer ${accessToken}`,
                    }, 
                })

                if(response.ok){
                    const data = await response.json()
                    setUsername('');
                    console.log('User found');
                    setUserData(data)
                }
                
            }
        catch (error) {
            console.log(error.message)
        }

    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!accessToken) {
            console.log("error no auth asdf;aslkdf")
            return;
        }
        getUserData();
    }

    useEffect(() =>{
        authenticateTwitch();
    }, []);

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Username to search: </label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />

        <button>Search</button>
        </form>
        <ul>
                {userData ? (Object.keys(userData.data[0]).map((key) => (
                            <li key={key}>
                                <strong>{key}:</strong><span> {userData.data[0][key]}</span>
                            </li>
                        )
                    )) : (<li>no user data</li>)
                }
            
        </ul>
        </>
    )
}
export default TwitchUserForm;