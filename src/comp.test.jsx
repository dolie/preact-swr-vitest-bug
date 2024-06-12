import { render, screen } from '@testing-library/preact';
import { Comp } from './comp';
import { describe, it, expect, afterAll, beforeAll, afterEach } from 'vitest';
import { SWRConfig } from 'swr';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  http.get('https://api.github.com/repos/vercel/swr', () => HttpResponse.json({ full_name: 'working' }))
]

const server = setupServer(...handlers)

describe('Comp', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())
  
  it('should render', () => {
    render(
      <SWRConfig value={{
        dedupingInterval: 2000,
        fetcher: (url) => fetch(url).then((res) => res.json()) 
      }}>
        <Comp />
      </SWRConfig>
    );
    expect(screen.getByText('working')).toBeTruthy();
  });
});