# Random Cat Image and Facts

## Description

This project is a web application that uses the thecatapi.com API to fetch and display a variety of cat facts. It also uses https://thecatapi.com/ to fetch images. It uses Axios for HTTP requests and React for the frontend. The project is written in TypeScript.

In addition, this project uses Bruno (a tool for testing and documenting APIs) to ensure the APIs are working as expected and to generate documentation.

## Installation

Follow these steps to install the project:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Usage

To start the application, run `npm run dev` in the terminal. This will start the development server, and the application will be accessible at `http://localhost:5173`.

## API Testing and Documentation

We use Bruno to test our APIs and generate documentation. You can run these tests and generate the documentation by running `npm run test:api`.

## Environment Variables

This project uses the following environment variables:

- `VITE_API_KEY`: This is your [The Cat API]("https://thecatapi.com/) API key. It is used to authenticate your requests to the The cat API for images.

**There is no key for [The Cat Facts API](https://alexwohlbruck.github.io/cat-facts/), so you do not need to provide an API key for that.**

To add these environment variables to your project, create a `.env` file in the root of your project directory and add the following line:

```properties
VITE_API_KEY=your_api_key_here
```
