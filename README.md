# InfoBayAI

This is a **Next.js application** with API integration, environment-based configuration, and a production-ready deployment workflow.  
The project uses **CDN-based assets**, **Gmail for email services**, and **MongoDB** for data storage.

---

## Features

- Next.js application
- API integration
- Separate environment configs for dev & prod
- CDN-based asset delivery (Cloudinary & Dropbox)
- Gmail-based mailing system
- MongoDB for data storage
- Manual AWS deployment with PM2

---

## Project Setup

### Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### Install Dependencies
```bash
npm install
```

(or)

```bash
npm i
```

---

## Environment Variables

This project uses **separate environment files** for development and production.

### `.env.dev`
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_app_password

MONGODB_URI=your_mongodb_connection_string
EMAIL_TO_SENT=receiver_email@example.com
```

### `.env.prod`
```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com

GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_app_password

MONGODB_URI=your_mongodb_connection_string
EMAIL_TO_SENT=receiver_email@example.com
```

> Do NOT commit `.env.dev` or `.env.prod` files.  
> Make sure they are added to `.gitignore`.

---

## Running the Application

### Development Mode
```bash
npm run dev
```

Application will run at:
```
http://localhost:3000
```

---

### Build for Production
```bash
npm run build
```

---

### Start Production Server
```bash
npm run start
```

Make sure `.env.prod` is configured on the server.

---

## Asset Handling (CDN-Based)

### Cloudinary (CDN Only)
- Assets are **hosted on Cloudinary**
- No Cloudinary SDK or API keys are used
- Assets are accessed directly via **CDN URLs**

### Dropbox (CDN Only)
- Assets are uploaded to Dropbox
- Files are downloaded using **public/CDN links**
- No Dropbox API integration is used

---

## Email System

- Uses **Gmail SMTP** for sending emails
- Configured via environment variables
- Recommended to use **Gmail App Passwords**

---

## Database

- Uses **MongoDB** for storing application data
- Connection handled via `MONGODB_URI`
- Can be hosted on MongoDB Atlas or self-hosted

---

## AWS Deployment (Manual with PM2)

This project is deployed on an **AWS server** using a manual build upload process and **PM2** for process management.

### Deployment Steps

1. **Build the project locally**
```bash
npm run build
```

2. **Zip the build**
```bash
zip -r build.zip .next public package.json package-lock.json
```

3. **Upload the ZIP file to the AWS server**

4. **SSH into the AWS server**

5. **Stop PM2 before updating**
```bash
pm2 stop <app-name>
```

6. **Remove the old build**
```bash
rm -rf .next
```

7. **Unzip the new build**
```bash
unzip build.zip
```

8. **Start the app again using PM2**
```bash
pm2 start npm --name "<app-name>" -- start
```

9. **Save PM2 process**
```bash
pm2 save
```

> Always stop PM2 **before removing the old build**.

---

## Available Scripts

| Command | Description |
|------|------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |

---

## Security Notes

- Never commit environment files
- Do not expose Gmail or MongoDB credentials
- Use App Passwords for Gmail
- Restrict MongoDB network access

---