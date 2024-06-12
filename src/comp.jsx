import useSWR from 'swr';

export function Comp() {
  const {data, isLoading} = useSWR('https://api.github.com/repos/vercel/swr');

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1> {data.full_name} </h1>
    </div>
  );
}

