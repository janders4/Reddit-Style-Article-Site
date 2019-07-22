# CheckIt

## CheckIt News

CheckIt is a news single page webapp, built with React. It pulls data from the API [API]**https://reddit-clone-john.herokuapp.com/api/articles/1/comments** to display articles, users and comments. Users can post comments, and upvote/downvote them after reading. The repository for the back end API is here [Repository]**https://github.com/janders4/BE-News-Site-Reddit-Clone-.git** . This front end repository is hosted on [FrontEnd]**https://github.com/janders4/Reddit-Style-Article-Site.git**

## Using the site

On loading of the page you are presented with a list of all the available articles, these can be sorted by popularity or filtered by topic. Clicking on an article title navigates you to the an individual article page, here you can read the article, up or down vote it. Expand the comment section to read/add comments.

## Available users

```
 You are logged into the site as default user - tickle122

```

You are free to post comments on existing articles. You can access these articles by clicking on the comments link at the bottom of the article.

## Getting started locally

To get your own local copy of the site running, fork and clone this repo into your local machine.
Once cloned, navigate to the repo folder in your terminal and run
`npm install`.

### Project Dependencies

The site is built with the latest version of React, 16.8.6, and uses Hooks which are a feature of this version, so at a minimum you must be running React and React-DOM 16.8.6, and React-Scripts at 3.0.1.

The site also has the following dependencies

```js
  "@emotion/core": "^10.0.14",
    "@reach/router": "^1.2.1",
    "animate.css": "^3.7.2",
    "axios": "^0.19.0",
    "cors": "^2.8.5",
    "moment": "^2.24.0",
    "react": "^16.8.6",
    "react-collapsible": "^2.6.0",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1",
    "react-spinners": "^0.5.12"
```

## Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in its development mode development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page reloads if you make edits.<br>

## Built with

[Create React App](https://github.com/facebook/create-react-app) - To bootstrap the app and streamline the creation process.
[Axios](https://www.npmjs.com/package/axios) - Sends requests to the backend API.
[Reach/Router](https://github.com/reach/router) - Routing system used throughout the site.

## Authors

- John Anderson - [Github](https://github.com/janders4)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
