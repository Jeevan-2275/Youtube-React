import React, { useEffect, useState } from 'react';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'AIzaSyDwkxqOL9_InKNDMyxKDpZeIpF1VnZ_Suw';  
  const CHANNEL_ID = 'https://www.youtube.com/channel/UCWAKiFSwXsoBpvzV8L_0pVg';   
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=10`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch video data');
        }
        
        const data = await response.json();
        setVideos(data.items); // Store video items
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Static YouTube Clone</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {videos.map((video) => (
          <div key={video.id.videoId} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <button>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                Watch Now
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
