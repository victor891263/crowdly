# Crowdly - API

## Run on your local machine

### Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your system:

- **PostgreSQL**: Download and install [PostgreSQL](https://www.postgresql.org/download/).

- **Node.js**: Make sure you have Node.js installed on your system. You can download it from the [official Node.js website](https://nodejs.org/).

- **Cloudinary**: Create an account on [Cloudinary](https://cloudinary.com/).

- **SMTP**: Have a SMTP of your choice prepared. Gmail's SMTP is used for Crowdly's API.

### API setup

To initialize the Crowdly API on your local machine, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/victor891263/crowdly.git
   cd server
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and specify following:

   - **DATABASE_URL:** connection string for your local postgre database

   - **CLOUDINARY_CLOUD_NAME:** name of your cloudinary cloud

   - **CLOUDINARY_API_KEY:** api key of your cloudinary cloud

   - **CLOUDINARY_API_SECRET:** api secret of your cloudinary cloud

   - **SMTP_PASSWORD:** password for the smtp of your choice. Refer to your email provider for this.

   - **JWT_SECRET:** string used to generate json web tokens

   - **CLIENT_URL:** url of your hosted front-end

4. **Start the development server:**

   ```
   node index.js
   ```

5. **Access the API:**

   The API will now be running at `http://localhost:<PORT>`, where `<PORT>` is the port specified in your `index.js` file.

### Database setup

1. Open a terminal or command prompt and use the following command to create a new PostgreSQL database:

   ```bash
   createdb crowdly
   ```

2. Don't forget to configure the connection to your database by updating the environment variable:

    ```
    DATABASE_URL=postgres://username:password@localhost:5432/crowdly
    ```
    Replace username and password with your PostgreSQL credentials, and crowdly with the name of the database you created.