# Project Name

## Description
Brief description of your NGO website project.

## Tech Stack
- Next.js 14
- React 18
- Firebase (Auth, Firestore, Storage)
- Netlify Deployment

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account
- Netlify account

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your Firebase and Netlify credentials.

4. Run development server:
```bash
npm run dev
```

## Deployment to Netlify

### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Manual Deployment
```bash
npm run build
netlify deploy --prod
```

## Firebase Setup

1. Create a Firebase project
2. Enable Authentication, Firestore, and Storage
3. Add Firebase configuration to `.env.local`
4. Deploy Firebase rules:
```bash
firebase deploy --only firestore:rules,storage:rules
```

## Project Structure
```
/
├── .env.local.example
├── .gitignore
├── .netlify/
├── netlify.toml
├── next.config.js
├── package.json
├── package-lock.json
├── README.md
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Navigation.js
│   │   │   ├── Footer.js
│   │   │   └── Layout.js
│   │   └── ui/
│   ├── lib/
│   │   ├── firebase.js
│   │   └── firebase-admin.js
│   ├── pages/
│   ├── styles/
│   │   ├── globals.css
│   │   └── components/
│   └── utils/
└── firebase.json
```