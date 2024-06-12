import { render } from 'preact';
import { Comp } from './comp';
import { SWRConfig } from 'swr';

export function App() {

	return (
      <SWRConfig value={{
        dedupingInterval: 2000,
        fetcher: (url) => fetch(url).then((res) => res.json()) 
      }}>
        <h1>SWR</h1>
        <Comp />
      </SWRConfig>
	);
}

render(<App />, document.getElementById('app'));
