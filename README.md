## Basement Supply

The project was created with Next (App Router) and Typescript. It uses Tailwind CSS for styling and is deployed on Vercel.


### Environment Variables

Copy the `.env.example` file and rename it to `.env.local`. Then, replace the values with your own.

`NEXT_PUBLIC_HOST_URL` should be the url of the running project. It is used for metadata construction.

### Running Project

To run the project, you need to have Node.js installed. You can download it from [here](https://nodejs.org/en/download/).

After installing Node.js, you can install the dependencies by running the following command in the project directory:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

After installing the dependencies, you can run the project by running the following command in the project directory:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Cart

The cart is stored in the local storage of the browser and is synced with the internal state of the app using **zustand**. The cart is cleared when the user checks out.

### GSAP

Most of the animations are done using GSAP. Some others with just CSS.