import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import Card from '../components/Card';
import Button from '../components/Button';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchData();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <Card key={post.id} title={post.title}>
            {post.body}
          </Card>
        ))
      )}
    </div>
  );
};

export default HomePage;
