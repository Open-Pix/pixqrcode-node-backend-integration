# OpenPix Backend Integration Example for PixQrCode API

Pix Example Using the [OpenPix](https://openpix.com.br/) Platform. [OpenPix Developers](https://developers.openpix.com.br/)

Basic OpenPix Backend Integration Example for PixQrCode API

This is a sample of how to integrate OpenPix Api in your backend using the PixQrCode

```jsx
POST /donation - crete a new donation
GET /donation/id - get donation info
POST /webhook - webhook that will be called by OpenPix API
```

## Setup
Generate a [App ID](https://developers.openpix.com.br/docs/plugin/app-id) in your OpenPix Account

Create a .env file with the following data

```jsx
PORT=5666
OPENPIX_API=https://api.openpix.com.br/
APP_ID=<your app id>
MONGO_URI=mongodb://localhost/donation
```

## How to run

```jsx
yarn start
```
