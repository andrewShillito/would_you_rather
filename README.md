# Would you Rather

This single page React-Redux app allows users to play the Would you Rather game in browser.

## Current Features

1. Login and User Signup
  * When signing up, user is assigned a random avatar
  * Login is handled via simple select box
2. When logged in `/` Route shows two lists of question previews for the currently authed user sorted by most recent first:
  * Questions user has not answered - user can click arrow to answer the question at `/questions/:qid`
  * Questions user has answered - user can click arrow to see the poll results including their own answer at `/questions/:qid`
3. `/leaderboard` sorted by most points (num answered questions + num created questions)
4. `/add` where users can create new questions - those polls are fully accessible and fully functional to users until app reload
5. All avatars (outside of nav bar) can be clicked to view that users score information at `/users/:id`

## Future Features

1. Authentication
2. User signup avatar upload and random generation
3. CSS revisions
4. Pagination at `/`
5. Pagination at `/leaderboard`
6. Mobile responsive styling
7. Nav bar hamburger menu

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
