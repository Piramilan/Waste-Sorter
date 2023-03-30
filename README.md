# Waste Classification Application

This is an application that uses machine learning to classify waste images as organic or recyclable. The application is built using Next.js, TypeScript, and Tailwind CSS, and the machine learning model was trained using Teachable Machine.

![App Screenshot](https://i.ibb.co/r7H0JKx/appss.png)


## Getting Started

To use the application, simply visit the website and upload an image of waste that you want to classify. The application will then show the image with a prediction of whether it is organic or recyclable.

## Prerequisites

To run the application locally, you'll need to have Node.js and npm installed on your machine. You can download Node.js from the official website: https://nodejs.org/en/download/.

## Installing

To install the application, first clone the repository:

```bash
git clone https://github.com/Piramilan/Waste-Sorter.git
```
Then, navigate into the project directory and install the dependencies:
```bash
cd Waste-Sorter
npm install
```

## Replace the Model and MetaData URLs

To Replace the URLs in .env file :
```bash
NEXT_PUBLIC_MODEL_URL="<Put Your Model URL>"
NEXT_PUBLIC_METADATA_URL="<Put Your MetaData URL>"
```

## Running the Application

To run the application, use the following command:
```bash
npm run dev
```

This will start a development server at http://localhost:3000/.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Usage

To use the application, simply visit http://localhost:3000/ in your browser and upload an image of waste that you want to classify. The application will then show the image with a prediction of whether it is organic or recyclable.

## Acknowledgments

This application was built using the following technologies:

- Next.js: https://nextjs.org/
- TypeScript: https://www.typescriptlang.org/
- Tailwind CSS: https://tailwindcss.com/
- Teachable Machine: https://teachablemachine.withgoogle.com/
