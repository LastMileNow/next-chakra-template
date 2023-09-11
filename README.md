This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites. We also use [Chakra UI](https://chakra-ui.com/docs/getting-started), which is a simple, modular and accessible component library that gives us the building blocks to build React applications.
## Getting Started
- Clone this repo.
- Copy all top level files and /api /pages /styles /util and /public folders to your new, empty project.
- Remove unnecessary files and folders under /pages.
- `npm install` to install dependencies.
- `npm run dev` to start the development server. You can access the app at http://localhost:3000.
- `npm run build` to build the app for production. This is to make sure that the build is successful.
- Check in and push the code to your repo, to be activated by Vercel.
- Set NEXT_PUBLIC_GMAP_API to your Google Map API key if you need. (start with NEXT_PUBLIC_ to expose to browser) to use []()
- Go to https://vercel.com/dashboard and create a new project. (make sure your github account is connected to vercel)
- When developing locally, you can run `python echo.py` under \api to start the development backend server. This will start a local backend server on port 80. You can test the backend at http://localhost, or from backend.js.
## Learn More
Follow the instructions below to get started with the project.
- Learn [JSX](https://reactjs.org/docs/introducing-jsx.html) and the Main Concepts od React
- Next.js [Getting Started](https://nextjs.org/docs/getting-started)
- [Chakra UI](https://chakra-ui.com/docs/getting-started) to install Chakra UI
- [Chakra Style Props](https://chakra-ui.com/docs/styled-system/style-props)
- Learn [Chakra Layout](https://chakra-ui.com/docs/layout/container) 
- Learn to [Fetch](https://nextjs.org/docs/basic-features/data-fetching/client-side) using [SWR](https://swr.vercel.app/)
- Learn to use [static files](https://nextjs.org/docs/basic-features/static-file-serving) by saving https://codesandbox.io/s/81igww in the /public folder (About Us).
- [MDX](https://nextjs.org/docs/advanced-features/using-mdx) = Markdown + React
### More Resources
- [NextJS Templates](https://vercel.com/templates/next.js)
- [API Route](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
- [Chakra Templates](https://chakra-templates.dev/page-sections/features)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Events](https://www.w3schools.com/tags/ref_eventattributes.asp)
- [React-Table w/ chakra](https://chakra-ui.com/getting-started/with-react-table), the datatable of js to create the table
- [Using Non-SSR Friendly Components with Next.js](https://blog.bitsrc.io/using-non-ssr-friendly-components-with-next-js-916f38e8992c) needed to include the components in Next.js
- [TypeScript Playground](https://www.typescriptlang.org/play) to test/convert TypeScript to JavaScript

## Python backend
Implement the following steps to create a python backend (sample code in api/date.py).

- put the python code in the `/api` folder (not the same as the `pages/api` folder used by Next.js)
- create a `requirements.txt` file under root directory to install the dependencies
- defines a singular HTTP `handler` variable, inheritting from the `BaseHTTPRequestHandler` class
- `dic = dict(parse.parse_qsl(parse.urlsplit(self.path).query)) # parse the query string`
- `self.wfile.write(json.dumps(ret_obj).encode()) # ret_obj is an object` or `self.wfile.write(message.encode()) # message is a string`
- Although not required by Vercel, create a main() function to start the server so that it can be run locally for debugging purposes

References:
- [Vercel official Python Runtime](https://vercel.com/docs/runtimes#official-runtimes/python)
- [Python BaseHTTPRequestHandler: Respond with JSON](https://stackoverflow.com/questions/41429172/python-basehttprequesthandler-respond-with-json)
- [How to Deploy a Python Serverless Function to Vercel](https://towardsdatascience.com/how-to-deploy-a-python-serverless-function-to-vercel-f43c8ca393a0)
- [CockroachDB](https://cockroachlabs.cloud/)

## Original 'Getting Started' Starts Here

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Notes:
- Make sure there is no package-lock.json file in your project. If there is, delete it.