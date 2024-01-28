import React, { useState } from 'react';

function Home() {
    const [username, setUsername] = useState('');
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);

    const searchUser = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (!response.ok) {
                alert('User not found');
            }

            const data = await response.json();
            setUserProfile(data);
            setError(null);
        } catch (error) {
            setUserProfile(null);
            setError('User not found');
        }
    };

    return (
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
            <h1 style={{ marginBottom: '20px' }}>GitHub Profile Search</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    style={{ padding: '8px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <button onClick={searchUser} style={{ padding: '8px 16px', borderRadius: '4px', background: '#2ecc71', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Search
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {userProfile && (
                <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                    <img src={userProfile.avatar_url} alt="User Avatar" style={{ width: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                    <h2>{userProfile.login}</h2>
                    <p style={{ fontSize: '16px' }}>Name: {userProfile.name}</p>
                    <p style={{ fontSize: '16px' }}>Location: {userProfile.location}</p>
                    <p style={{ fontSize: '16px' }}>Followers: {userProfile.followers}</p>
                </div>
            )}
        </div>
    );
}

export default Home;
