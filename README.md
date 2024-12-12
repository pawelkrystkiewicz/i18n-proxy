# Language Detector with Subdomain Redirects

This project is a simple serverless application designed to detect the browser's preferred language and redirect users to the appropriate subdomain (e.g., `en.example.com`, `pl.example.com`) based on their locale.

## Features

- **Language Detection:** Automatically detects the user's preferred language using the `Accept-Language` HTTP header.
- **Subdomain Redirection:** Redirects users to the corresponding subdomain for their language (e.g., `en`, `pl`).
- **Customizable:** Easily extendable to support additional languages or configurations.
- **Serverless Deployment:** Fully compatible with Vercel's serverless environment.

## How It Works

1. When a user accesses the main domain (e.g., `example.com`), the application checks the `Accept-Language` header to determine the browser's preferred language.
2. If the user is not already on a subdomain corresponding to their language, they are redirected to the appropriate subdomain.
3. Supported languages and the default locale can be configured in the code.

## Supported Languages

- `en` (English)
- `pl` (Polish)

The default locale is `en`.

## Deployment

This project is designed to be deployed on [Vercel](https://vercel.com/). Follow the steps below to deploy:

### Prerequisites

- Node.js and yarn (or other packages management engine) installed on your machine.
- A [Vercel](https://vercel.com/) account.

### Steps

1. clone the repository
2. install deps
> yarn
3. Develop with
> npx vercel dev

or
> yarn dev:local

4. Change your settings in `./i18n.json` file as needed


***
This file was generated with AI