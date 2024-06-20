__FIXED__ : workaround in `vite.config.js` by @hi-ogawa 

This repo shows an error while testing SWR on Preact with Vitest

TypeError: Cannot read properties of null (reading 'useContext')

`pnpm dev` working site

`pnpm vitest` not working test

Issues follow up :  
[Issue in Vitest repo](https://github.com/vitest-dev/vitest/issues/5915)  
[Issue in Preact repo](https://github.com/preactjs/preset-vite/issues/124)  
[Issue in SWR repo](https://github.com/vercel/swr/issues/2981)