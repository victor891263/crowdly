# Crowdly - connect, share, and engage with each other

## Introduction

Crowdly is a social media application that provides a platform for users to submit posts, react to posts, and follow each other. Crowdly aims to be a good-to-choice for those who want to be able to easily navigate threads, which are scored based on user responses. Think of a combination of Twitter and Reddit.

The front-end is built using React, TypeScript, and Tailwind CSS. It seamlessly communicates with the backend through an Apollo GraphQL API, which handles data storage, retrieval, and user authentication, and is built using Node.js, Express.js, Apollo GraphQL, and Sequelize.

## Notable features and technologies

   - Create accounts and log in securely using JSON Web Tokens (JWT) for authentication. Permissions and access control are implemented to ensure only authorized users can perform certain actions.

   - Verification emails for new account creation and updating email addresses handled by Gmail's SMTP.

   - Utilizes global state management to efficiently handle data such as notifications. Context API is used for this purpose.

   - Media uploaded by users such as profile images are stored on Cloudinary servers.

   - Responsive design using Tailwind CSS ensures an optimal viewing experience across a wide range of devices. Tailwind's built-in defaults and utility-first approach provide a cohesive design system.

   - Unit testing ,implemented using Jest, ensures the reliability of components and functionality.

   - API is powered by GraphQL, a flexible query language that minimizes over-fetching and under-fetching of data.

   - Implemented user registration and login functionalities with JSON Web Tokens (JWT) for secure authentication. Fine-grained authorization controls to manage user permissions and access levels.

   - Utilizes GitHub Actions for automatic containerization - the workflow creates a Docker container image for the API whenever changes are pushed to the backend repository and pushes it to the GitHub repository's container registry.

   - API deployed on Azure App Services with CI/CD enabled - Azure ensures that whenever a new container image is pushed to the GitHub repository's container registry, this image is then hosted automatically.

   - Data is stored in a postgre database hosted on Supabase. Sequelize serves as an ORM that facilitates interactions between the API and the database.

   - Front-end is hosted on Netlify - the platform's built-in CI/CD feature ensures that whenever changes to the repo are pushed, the front end is automatically tested, built, and deployed.

## Visit

https://crowdlyapp.netlify.app

## Contributing

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!

## Improvements in mind

- Add a feature that allows users to create groups, which means posts can be better categorized and searched, helping like-minded users connect and share more efficiently.
- Allow users to view quoted posts for each post
- Allow users to view, for each post, users who upvoted and downvoted
- Configure transitions for dropdowns, full-screen boxes, and page transitions. Add hover animations for clickable items.
- Implement unit tests for more components.

## Like the project?

I'm currently studying for a master's degree in computer science at Manchester Metropolitan University and looking for a placement or a full-time role. If you have an opportunity, why not send me an email or send me a message via one of my social media accounts?