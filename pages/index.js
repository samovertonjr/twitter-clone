import { useQuery } from 'react-query'
import fetch from 'isomorphic-unfetch'

function Home() {
  const { data, isLoading } = useQuery('tweets', () =>
    fetch('http://localhost:3000/api/tweets').then((res) => res.json())
  )
  if (isLoading) return 'Loading...'

  return (
    <div>
      {data.tweets.map((tweet) => (
        <p>{tweet.name}</p>
      ))}
    </div>
  )
}

Home.headerTitle = 'Latest Tweets'
export default Home
