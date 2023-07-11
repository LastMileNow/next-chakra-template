import useSWR from 'swr';
import {MenuPage} from '../pg_menu';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Profile() {
  const { data, error } = useSWR('/api/profile', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <MenuPage>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </MenuPage>
  )
}