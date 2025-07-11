Welcome, traveler of code, to the universe of XERO, where APIs sing and integrations dance.

🌟 Project

XERO is a sacred bridge between Xero Partner 2.0, Okta, GPT-4, and Solarisbank, a full API integration project developed for NetManagement.online. It connects digital finance with artificial intelligence, offering a seamless path between payments, authentications, and advanced analysis.

🚀 Main Features

Secure authentication through Okta. Complete integration of Xero (incoming and outgoing payments). Intelligent process analysis using GPT-4. Secure management of tokens and user sessions. Elegant frontend built with React and TailwindCSS. Robust backend powered by Python (FastAPI/Flask depending on the version). 📜 Installation

Clone this sanctuary:
Setup

git clone https://github.com/ellipsis52/html5up-hyperspace-xero.git

git clone https://github.com/XeroAPI/xero-node.git
cd xero-node-oauth2-app

git clone https://github.com/ellipsis52/XERO.git cd XERO Install the dependencies:

git clone https://github.com/ellipsis52/Xero-Partner-2.0-Works-place.git

git clone https://github.com/ellipsis52/Xero-Partner2.0/tree/master.git cd Xero-Partner2.0/tree/master

For the Python backend

pip install -r requirements.txt

For the React frontend

cd hyperspace-react-router npm install ⚙️ Launch

Python Backend:

python main.py React Frontend:

cd hyperspace-react-router npm run dev 🛡️ Security and Best Practices

Secure storage of access tokens in the database. Robust error and exception handling across APIs. Extensive sandbox testing before going into production. Recommended deployment on a secured cloud server with active HTTPS. 🧭 Roadmap

Xero Partner 2.0 integration Okta authentication GPT-4 process analysis Automatic error notifications via Discord/Email Deployment on Vercel + Azure + WebTechnicom 🖋️ Author

🎨 Project powered by NetManagement.online 🎼 Created with love, rigor, and a touch of poetry in every line of code.

# 🚀 Xero-Partner2.0

This project contains the **Xero-Partner2.0** platform — a powerful solution that integrates various APIs for payments and financial flow management. This repository includes both backend and frontend code, with API credentials managed in a `.env` file that must be kept **private**.
# Xero Frontend Integration
# 🚀 Vanilla Web App – Payments & Intelligence

Welcome to the lightweight yet powerful financial interface from **Netmanagement.online**.

This HTML-based web app allows you to:

* Execute **Xero outgoing payments**
* Send **crypto payments via OKX**
* Ask questions to **GPT-4**
* View a **history of payments**
* Explore an elegant UI powered by **Hyperspace HTML5UP** design

---

## 📁 Project Structure

```
vanilla-app/
├── index.html         # Main UI (Hyperspace + Vanilla merged)
├── assets/            # Hyperspace CSS and JS
├── server.js          # Express backend (optional)
└── README.md          # This file
```

---

## 🔧 Getting Started

### 1. Run a simple local server

```bash
python3 -m http.server 3000
```

Open in your browser:

```
http://localhost:3000
```

### 2. Optional: Add a backend with Node.js

Install dependencies:

```bash
npm install express cors body-parser
```

Start the server:

```bash
node server.js
```

Accessible at:

```
http://localhost:4000
```

---


Vanilla Web App — Technical README

Welcome to Vanilla Web App, a modular and extensible frontend interface designed for seamless integration with financial and AI services. This app demonstrates:

Outgoing payments via Xero API
Crypto transfers to OKX exchange
Natural language queries to GPT-4 AI
Visualization of payment history
It is crafted with pure HTML, CSS, and JavaScript, relying on Axios for API communication, making it easy to embed in frameworks like Hyperspace or any HTML5 project.

Architecture & Design

Frontend
Responsive Grid Layout: Using CSS Grid with a 3-column design on wider screens, collapsing gracefully on mobile
Card Components: Each functional section is a self-contained card with rounded corners, subtle shadow, and clear labels
Form Inputs & Controls: Text inputs, selects, and buttons styled for accessibility and clarity
Status Indicators: Inline error and loading messages with dynamic display toggling
Payment History Table: Static example data showcasing usage, extendable with real API data
Backend API Endpoints (to be implemented separately)
Endpoint	Method	Description	Expected Payload
/xero/payment	POST	Initiate an outgoing payment via Xero API	{ xeroContactId, xeroIban, xeroAmount, xeroDescription }
/okx/payment	POST	Send cryptocurrency payment via OKX	{ cryptoCurrency, cryptoAmount, cryptoIban }
/gpt/ask	POST	Query GPT-4 with a user question	{ question }
Usage Instructions

Embed the following HTML snippet directly in your Hyperspace or HTML5 app page to provide the UI and frontend logic.
Ensure your backend exposes the specified API endpoints, handling authentication, validation, and communication with Xero, OKX, and GPT-4.
Serve the page over HTTPS for secure API communication.
Full HTML Snippet to Embed

# Vanilla Web App — HTML Source

Below is the complete HTML source code for the Vanilla Web App interface, ready to be embedded in your Hyperspace or HTML5 project.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vanilla Web App</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 2rem;
    }
    .grid {
      display: grid;
      gap: 1.5rem;
    }
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      padding: 1.5rem;
    }
    h2, h3 {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    label {
      font-size: 0.875rem;
      font-weight: 600;
      display: block;
      margin-top: 1rem;
    }
    input, select {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.25rem;
      border: 1px solid #ccc;
      border-radius: 0.375rem;
    }
    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: black;
      color: white;
      border: none;
      border-radius: 0.375rem;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
    }
    button:hover {
      background-color: #333;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 0.5rem;
      text-align: left;
    }
    .response {
      background: #f0f0f0;
      border-radius: 0.5rem;
      padding: 1rem;
      margin-top: 1rem;
    }
    .error {
      color: red;
      font-size: 0.875rem;
      display: none;
    }
    .loading {
      color: #007bff;
      font-size: 1rem;
      display: none;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>

  <div class="grid">
    <!-- Outgoing Payment (Xero) -->
    <div class="card">
      <h2>Outgoing Payment (Xero)</h2>
      <label for="xeroContactId">Xero Contact ID</label>
      <input id="xeroCo


Notes on Integration

Place this HTML in your Hyperspace project’s page or an HTML5 template
Adjust API endpoints /xero/payment, /okx/payment, /gpt/ask as needed
Secure the backend with proper authentication and HTTPS
Extend payment


## 🔐 API Integration & Security

> ⚠️ This app is currently using simulated responses. To make it **live**, link it to secure backend APIs.

* **/xero/payment** → Connects to Xero
* **/okx/payment** → Connects to your crypto service
* **/gpt/ask** → Connects to OpenAI GPT-4 API

---

## 🨠 Legal Disclaimer – Ipranet

> *"Ipranet is an assistant tool designed to help with technical tasks, code preparation, integration setups, and other development-related activities. It cannot execute real-world financial transactions, interact directly with external financial platforms, or perform operations involving money. All actions related to payments, transfers, and sensitive operations require human oversight and authorization."*

---

## ✨ Author

💐 [Netmanagement.online](https://netmanagement.online)

---

This project is a compass in the galaxy of financial APIs. Now it's your turn to bring it to life 🌌

## Installation
1. Clonez le dépôt
2. Exécutez `npm install` pour installer les dépendances
3. Configurez votre environnement avec les clés Xero
4. Démarrez l'application avec `npm start`

## Utilisation
1. Connectez-vous à Xero en cliquant sur "Se connecter avec Xero"
2. Une fois connecté, vous pouvez voir les factures dans la section "Factures"

---

## ✅ Finalization Checklist – Xero-Partner2.0

### 📘 README – Project Overview

**Xero-Partner2.0** is a comprehensive API integration project that connects multiple financial services into a unified backend, ready to be linked to a web interface.

### This repository includes:
- A Node.js backend with integrations for: **Xero**, **SaferPay**, **OKX**, **Solaris**, **GPT-4**, and **OKTA**.
- A **React** frontend with a dashboard, payment forms, and session management.
- A `.env` file (not versioned) where you must add your API credentials.

### 🔑 Required Environment Variables (see example in `.env.example`)

```env
### XERO ###
XERO_CLIENT_ID=
XERO_CLIENT_SECRET=
XERO_REDIRECT_URI=
XERO_SCOPE=

### SAFERPAY ###
SAFERPAY_API_KEY=
SAFERPAY_CUSTOMER_ID=
SAFERPAY_TERMINAL_ID=

### OKX ###
OKX_API_KEY=
OKX_SECRET_KEY=
OKX_PASSPHRASE=

### SOLARIS ###
SOLARIS_CLIENT_ID=
SOLARIS_CLIENT_SECRET=
SOLARIS_SANDBOX_URL=

### GPT-4 ###
OPENAI_API_KEY=

### OKTA ###
OKTA_CLIENT_ID=
OKTA_CLIENT_SECRET=
OKTA_ISSUER=
OKTA_REDIRECT_URI=
```

---

## ⚙️ Quick Setup

```bash
git clone https://github.com/ellipsis52/Xero-Partner2.0.git
cd Xero-Partner2.0
npm install
cp .env.example .env
# Then fill in your API keys in .env
npm run dev
```

---

## 🧩 Main Integrations
- **Xero** for accounting
- **SaferPay** for secure payments
- **OKX** for crypto interactions
- **Solaris** for banking services
- **GPT-4** for contextual intelligence
- **Okta** for centralized authentication

---

## 📂 Project Structure

```
.
├── .gitignore                # Files/directories ignored by Git
├── .env                      # Sensitive API credentials (not versioned)
├── backend/                  # Node.js backend code
├── netmanagement-frontend/   # React frontend code
├── .vscode/                  # VSCode configuration (optional)
├── README.md                 # This documentation file
└── package.json              # NPM dependencies and scripts
```

---

## 🚀 Usage

### Start the frontend (React)
```bash
npm run dev
```

### Start the backend (Python)
```bash
cd backend
python app.py
```

Frontend: [http://localhost:3000](http://localhost:3000)  
Backend: [http://localhost:5000](http://localhost:5000)

---

## 📊 Testing

### Backend
```bash
pytest
```

### Frontend
```bash
npm test
```

---

## ✨ Contributing

1. Fork this repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Make your changes + commits
4. Push your changes: `git push origin feature/your-feature`
5. Open a pull request

---

## 🌐 License

This project is under the **MIT** license. See the [LICENSE](./LICENSE) file for details.

---

## 🔍 View Files Ignored by `.gitignore`

### List locally ignored files
```bash
git ls-files --others -i --exclude-standard
```

### Script to automatically add them to the README

#### Using npm
```bash
npm run update:readme:ignored
```

#### Using Make
```bash
make update-readme-ignored
```

### Example of auto-generated output
```txt
📁 Locally ignored files available
node_modules/
.env
build/
.vscode/
```

> ⚠️ **Warning**: Do not force add sensitive files like `.env` or private keys!

---

## 🔐 Secret Key File `.env`

This file contains **sensitive access keys** used by the backend. It **must never be committed** to GitHub.

### Usage in backend code

- **Node.js**: via `dotenv`
- **Python**: via `python-dotenv`

#### Example in Node.js
```js
require('dotenv').config();
const xeroClientId = process.env.XERO_CLIENT_ID;
```

#### Example in Python
```python
from dotenv import load_dotenv
load_dotenv()
xero_client_id = os.getenv("XERO_CLIENT_ID")
```

---
# xero-python

### 📘 `README.md` (English version)

```markdown
# 🎷 xero-partner-netmanagement.online-integration

A symphonic Xero Partner 2.0 integration project, orchestrated with Node.js, React, and the soul of modern digital banking.  
This repository merges a powerful backend with an elegant frontend to compose an intelligent financial management suite.

---

## ✨ Features

- 🔐 OAuth2 authentication with Xero Partner
- 💸 Incoming/outgoing payment handling
- 📊 React dashboard for transaction insights & filters
- 🧠 GPT-4 & JAX automation for smart decisions
- ☁️ Deployment-ready (Docker, Vercel, Git hooks)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, Axios, Dotenv
- **Frontend**: React, Tailwind CSS, React Router
- **Authentication**: OAuth2 via Okta / Xero
- **Payments**: Xero API, GoCardless, Solaris integration
- **AI Integration**: OpenAI GPT-4, JAX, intent matching
- **Deployment**: Docker, PM2, Git hooks, Vercel, WebTechnicom VPS

---
"deploy": "gh-pages -d dist"
}
Deploy:
npm run deploy
🌟 Result

At the end of this journey,
you will have a website with the elegant structure of Hyperspace
and the dynamic energy of React,
united like a knight riding a phoenix through the digital sky. 🦅🔥

📚 Credits

Hyperspace Template (by HTML5 UP)
React (by Meta)
"In the meeting of tradition and innovation, true magic is born." ✨
Veux-tu que je le prépare tout de suite pour l'ajouter à ton dépôt GitHub aussi (avec un git add, git commit, git push) ? 🚀
Je suis prêt, dis-moi juste go ! 🌸

Vous avez dit :
oui
ChatGPT a dit :
Parfait, compagnon d'étoiles ! 🌟
Je prépare tout doucement les pas à suivre pour mettre ton nouveau README.md sur ton GitHub, comme une cérémonie sacrée sous la lumière des constellations.

Voici le plan de bataille :

1. Sauvegarder le nouveau README.md
Dans ton projet, ouvre (ou crée) le fichier README.md à la racine (/).
Copie-colle ce que je t'ai écrit juste avant (le beau README tout en anglais ✨).

2. Ensuite dans ton terminal (console magique) :
Place-toi dans ton projet :

cd /chemin/vers/ton/projet
Puis lance ces commandes :

git add README.md
git commit -m "Update README.md with Hyperspace + React instructions"
git push
Ces paroles dansent comme des incantations : elles enregistrent le fichier et l’envoient sur ton dépôt GitHub, là où ton projet grandit comme un arbre du futur. 🌳🚀
Résultat attendu
Ton GitHub sera mis à jour.
Le README.md affichera à tous comment fusionner Hyperspace et React avec élégance.
Tu auras ainsi gravé dans la bibliothèque céleste ton savoir.
Veux-tu que je t’écrive aussi un petit script automatique pour éviter de taper chaque fois ces commandes à la main ? 🎼
(genre npm run push-readme qui fait tout tout seul ?) 🚀
Dis-moi si tu veux encore plus de magie ! 🌙

Vous avez dit :
je veux juste faire la mise a jour de vsc vers github
ChatGPT a dit :
Parfait, très clair, poète du code. ✨
Nous allons faire simple et beau, comme le murmure d'une rivière claire.

Voici comment mettre à jour ton projet de Visual Studio Code (VSC) vers GitHub :

1. Ouvre Visual Studio Code
Vérifie que tu es bien dans ton dossier de projet (xero-partner-2.0 ou autre).
2. Mets à jour les fichiers
Assure-toi que ton README.md est bien prêt.
Si tu as modifié d'autres fichiers aussi, pas de souci.
3. Ouvre le terminal intégré de VSCode
Menu Terminal > New Terminal
(ou raccourci magique : Ctrl + @)
4. Tape ces trois commandes (doucement, comme une prière) :
a. Ajouter les changements :

git add .
(Le point signifie "tout ce que j'ai changé")

b. Faire un petit "commit" :

git commit -m "Update project and README.md"
(Écris un message qui explique ce que tu as fait — ici, mise à jour du projet)

c. Envoyer vers GitHub (le royaume lointain) :

git push
✨ Et voilà !
Ton projet entier (modifications du site, du README, du code…) sera envoyé sur GitHub, comme une bouteille jetée sur l’océan du Web.

Veux-tu aussi que je t'accompagne pour vérifier si ton dépôt est bien lié à GitHub ? 🌌 (parfois il faut faire un git remote -v)
Veux-tu que je reste près de toi encore un peu, pour la suite de ton aventure ? 🎻🚀


Xero Frontend Integration

Prérequis

Node.js >= 14.x
Xero API credentials
Installation

Clonez le dépôt
Exécutez npm install pour installer les dépendances
Configurez votre environnement avec les clés Xero
Démarrez l'application avec npm start
Utilisation

Connectez-vous à Xero en cliquant sur "Se connecter avec Xero"
Une fois connecté, vous pouvez voir les factures dans la section "Factures"
✅ Finalization Checklist – Xero-Partner2.0

📘 README – Project Overview

Xero-Partner2.0 is a comprehensive API integration project that connects multiple financial services into a unified backend, ready to be linked to a web interface.

This repository includes:

A Node.js backend with integrations for: Xero, SaferPay, OKX, Solaris, GPT-4, and OKTA.
A React frontend with a dashboard, payment forms, and session management.
A .env file (not versioned) where you must add your API credentials.
🔑 Required Environment Variables (see example in .env.example)

### XERO ###
XERO_CLIENT_ID=
XERO_CLIENT_SECRET=
XERO_REDIRECT_URI=
XERO_SCOPE=

### SAFERPAY ###
SAFERPAY_API_KEY=
SAFERPAY_CUSTOMER_ID=
SAFERPAY_TERMINAL_ID=

### OKX ###
OKX_API_KEY=
OKX_SECRET_KEY=
OKX_PASSPHRASE=

### SOLARIS ###
SOLARIS_CLIENT_ID=
SOLARIS_CLIENT_SECRET=
SOLARIS_SANDBOX_URL=

### GPT-4 ###
OPENAI_API_KEY=

### OKTA ###
OKTA_CLIENT_ID=
OKTA_CLIENT_SECRET=
OKTA_ISSUER=
OKTA_REDIRECT_URI=
⚙️ Quick Setup

git clone https://github.com/ellipsis52/Xero-Partner2.0.git
cd Xero-Partner2.0
npm install
cp .env.example .env
# Then fill in your API keys in .env
npm run dev
🧩 Main Integrations

Xero for accounting
SaferPay for secure payments
OKX for crypto interactions
Solaris for banking services
GPT-4 for contextual intelligence
Okta for centralized authentication
📂 Project Structure

.
├── .gitignore                # Files/directories ignored by Git
├── .env                      # Sensitive API credentials (not versioned)
├── backend/                  # Node.js backend code
├── netmanagement-frontend/   # React frontend code
├── .vscode/                  # VSCode configuration (optional)
├── README.md                 # This documentation file
└── package.json              # NPM dependencies and scripts
🚀 Usage

Start the frontend (React)

npm run dev
Start the backend (Python)

cd backend
python app.py
Frontend: http://localhost:3000
Backend: http://localhost:5000

📊 Testing

Backend

pytest
Frontend

npm test
✨ Contributing

Fork this repo
Create a branch: git checkout -b feature/your-feature
Make your changes + commits
Push your changes: git push origin feature/your-feature
Open a pull request
🌐 License

This project is under the MIT license. See the LICENSE file for details.

🔍 View Files Ignored by .gitignore

List locally ignored files

git ls-files --others -i --exclude-standard
Script to automatically add them to the README

Using npm

npm run update:readme:ignored
Using Make

make update-readme-ignored
Example of auto-generated output

📁 Locally ignored files available
node_modules/
.env
build/
.vscode/
⚠️ Warning: Do not force add sensitive files like .env or private keys!
🔐 Secret Key File .env

This file contains sensitive access keys used by the backend. It must never be committed to GitHub.

Usage in backend code

Node.js: via dotenv
Python: via python-dotenv
Example in Node.js

require('dotenv').config();
const xeroClientId = process.env.XERO_CLIENT_ID;
Example in Python

from dotenv import load_dotenv
load_dotenv()
xero_client_id = os.getenv("XERO_CLIENT_ID")
xero-python

📘 README.md (English version)

# 🎷 xero-partner-netmanagement.online-integration

A symphonic Xero Partner 2.0 integration project, orchestrated with Node.js, React, and the soul of modern digital banking.  
This repository merges a powerful backend with an elegant frontend to compose an intelligent financial management suite.

---

## ✨ Features

- 🔐 OAuth2 authentication with Xero Partner
- 💸 Incoming/outgoing payment handling
- 📊 React dashboard for transaction insights & filters
- 🧠 GPT-4 & JAX automation for smart decisions
- ☁️ Deployment-ready (Docker, Vercel, Git hooks)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, Axios, Dotenv
- **Frontend**: React, Tailwind CSS, React Router
- **Authentication**: OAuth2 via Okta / Xero
- **Payments**: Xero API, GoCardless, Solaris integration
- **AI Integration**: OpenAI GPT-4, JAX, intent matching
- **Deployment**: Docker, PM2, Git hooks, Vercel, WebTechnicom VPS

---

## 🚀 Getting Started

Clone the repository:

bash
git clone https://github.com/ellipsis52/xero-partner-netmanagement.online-integration.git
cd xero-partner-netmanagement.online-integration
Install dependencies:

npm install
Create a .env file with the following:

PORT=3000
XERO_CLIENT_ID=your_client_id
XERO_CLIENT_SECRET=your_client_secret
REDIRECT_URI=http://localhost:3000/callback
Start the application:

npm start
🎯 Project Goal

To build a secure, intuitive, and automated financial platform — fully integrated with the Xero ecosystem.
A dashboard for digital bankers, startups, and those who dream in APIs.

📬 Contact

🧑‍💻 Developed by: @ellipsis52
🌐 Website: netmanagement.online

"Code is logical poetry, and every function a stanza in a world of automation."

---

Would you like me to generate this into a `README.md` file right now, so you can drop it directly into your repo folder like a cherry on top? 🍒
Here's the translated and elegant English version of your `README.md`, still with that lyrical tone to match the flow of your project:

---
markdown
# 🌿 Xero Integration - Full Configuration Guide

Welcome to the graceful dance between your system and Xero — where each token is a step, each API call a breath of automated accounting. This guide will walk you, step by step, through the configuration of **Xero Partner 2.0**, to handle both **incoming and outgoing payments**, with clarity, security, and a touch of poetry.

---

## 🔐 Prerequisites

Before you begin, make sure you have:

- An active Xero Partner 2.0 account.
- A valid client_id and client_secret.
- An app registered at [https://developer.xero.com/myapps](https://developer.xero.com/myapps).
- A working Node.js or Python backend for API calls.
- A secure backend (with token handling, logs, and persistence).

---

## 🧩 Configuration Steps

### 1. Xero App Setup

1. Sign in to [Xero Developer](https://developer.xero.com/myapps)
2. Create a new app:
   - **Name**: Xero NetManagement
   - **Redirect URI**: https://your-backend.com/callback
   - Copy your client_id and client_secret.

---

### 2. OAuth 2.0 Authentication

Authentication is the golden key. Here’s how to get an access_token:

#### Step 1 - Generate Authorization URL:
https://login.xero.com/identity/connect/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=https://your-backend.com/callback&scope=openid profile email accounting.transactions offline_access&state=123


Replace YOUR_CLIENT_ID with your real ID.

#### Step 2 - Exchange code for token:
bash
curl -X POST https://identity.xero.com/connect/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=RECEIVED_CODE' \
-d 'redirect_uri=https://your-backend.com/callback' \
-d 'client_id=YOUR_CLIENT_ID' \
-d 'client_secret=YOUR_CLIENT_SECRET'
This will return:

{
  "access_token": "...",
  "refresh_token": "...",
  "expires_in": 1800
}
3. Connect to Your Xero Tenant

curl -X GET https://api.xero.com/connections \
-H "Authorization: Bearer ACCESS_TOKEN"
Retrieve your tenantId, the secret key to all future requests.

💸 Handling Payments (IN & OUT)

Incoming Payments (IN)

Create invoices using the /invoices endpoint.
Track their status (PAID, AUTHORISED, etc.).
Automate verification through the API.
Outgoing Payments (OUT)

Post payments to suppliers using /payments:
POST https://api.xero.com/api.xro/2.0/Payments
Headers:
  Authorization: Bearer ACCESS_TOKEN
  xero-tenant-id: TENANT_ID

Body:
{
  "Invoice": {
    "InvoiceID": "00000000-0000-0000-0000-000000000000"
  },
  "Account": {
    "AccountID": "00000000-0000-0000-0000-000000000000"
  },
  "Date": "2025-04-22",
  "Amount": 200.00
}
🛡 Security & Monitoring

Use Okta to manage sessions and user roles via JWT.
Store access_token and refresh_token securely (use .env or Vault).
Refresh tokens using the refresh_token every 30 minutes:
curl -X POST https://identity.xero.com/connect/token \
-d 'grant_type=refresh_token' \
-d 'refresh_token=...' \
-d 'client_id=...' \
-d 'client_secret=...'
🔔 Notification System

Set up a cron job to analyze daily logs.
In case of errors, alert via:
Discord (via webhook)
Email
Slack (via bot)
🧪 Test Environment

Before going live:

Use the Xero sandbox environment (via demo tenant).
Test the full flow: invoice creation, status check, payment, token refresh.
💭 Final Notes

"In every API call, a promise — of a fluid, frictionless finance, in rhythm with your vision."
🧠 Helpful Resources

Xero OAuth 2.0 Docs
Xero API Reference
Official Guides
This guide is your sheet music — and you, dear developer, are the conductor. Let your financial symphony play in harmony, precision, and grace.


Let me know if you’d like this turned into a downloadable `.md` file or published straight to your GitHub repo — I can help with either!
markdown
# Xero API Integration for Incoming and Outgoing Payments

To ensure that incoming (in) and outgoing (out) payments on Xero are effectively processed, you need to make sure that you have properly configured the Xero API integration and are correctly interacting with Xero's endpoints to record and process these payments.

## Steps to manage incoming and outgoing payments on Xero via the API:

### 1. Set up OAuth2 Authentication with Xero

Before you can interact with payments on Xero, you must authenticate with Xero via OAuth2. This allows you to obtain an access token that grants access to your Xero organization’s data. Ensure that your OAuth2 connection works correctly to obtain the proper permissions.

### 2. Manage Incoming Payments (in)

Incoming payments are typically payments made by customers to settle their invoices. You can create an incoming payment via the API by associating a payment with an existing invoice.

#### Example: Creating an Incoming Payment (e.g., via an invoice)

python
from xero import Xero
from xero.auth import OAuth2Credentials
from xero.exceptions import XeroException

# Authentication
credentials = OAuth2Credentials(client_id='your_client_id', client_secret='your_client_secret', callback_uri='your_callback_uri')
xero = Xero(credentials)

# Incoming payment details
payment = {
    'Invoice': {
        'InvoiceID': 'your_invoice_id'  # The ID of the invoice the payment is linked to
    },
    'Amount': 100.0,  # The payment amount
    'Account': {
        'Code': '100'  # The code for the bank account in Xero
    },
    'Date': '2025-04-22',  # Payment date
    'PaymentType': 'RECEIVE',  # Payment type
    'Reference': 'Payment reference',  # Reference
}

try:
    # Create the payment
    payment_response = xero.payments.create(payment)
    print("Payment created successfully:", payment_response)
except XeroException as e:
    print("Error creating payment:", e)
3. Manage Outgoing Payments (out)

Outgoing payments are payments you make to settle your own invoices or other debts. You associate an outgoing payment with an existing invoice.

Example: Creating an Outgoing Payment (e.g., for a supplier invoice)

# Outgoing payment details
payment_out = {
    'Invoice': {
        'InvoiceID': 'your_supplier_invoice_id'  # The ID of the supplier invoice to be paid
    },
    'Amount': 50.0,  # Payment amount
    'Account': {
        'Code': '200'  # The code for the bank account from which the payment is made
    },
    'Date': '2025-04-22',  # Payment date
    'PaymentType': 'PAY',  # Outgoing payment type
    'Reference': 'Outgoing payment reference',  # Reference
}

try:
    # Create the outgoing payment
    payment_out_response = xero.payments.create(payment_out)
    print("Outgoing payment created successfully:", payment_out_response)
except XeroException as e:
    print("Error creating outgoing payment:", e)
4. Check Payment Status

You can retrieve information about existing payments to check the status of incoming and outgoing payments. This allows you to track ongoing or completed payments.

Example: Retrieving Payments

# Retrieve existing payments
try:
    payments = xero.payments.all()
    print("All payments:", payments)
except XeroException as e:
    print("Error retrieving payments:", e)
5. Error Handling and Management

The Xero API may return errors, including validation errors or connection errors. Be sure to handle these errors properly in your code, as shown in the examples above with try-except and the use of XeroException.

Summary

For incoming payments (in): You associate a payment with an existing customer invoice via the Xero API.
For outgoing payments (out): You associate a payment with an existing supplier invoice or another type of debt.
OAuth2 authentication: You need to obtain an access token via OAuth2 to interact with the Xero API.
Error handling: Be sure to handle errors properly to avoid runtime issues.
Don't forget to test with real data once the integration is completed to ensure that payments are correctly recorded and visible in your Xero dashboard.

If you have further questions or need clarification on a specific part of the integration, feel free to ask!


You can copy-paste this content into a `README.md` file for your project. Let me know if you need further adjustments!
[![Github forks](https://img.shields.io/github/forks/XeroAPI/xero-python.svg)](https://github.com/XeroAPI/xero-python/network)
[![Github stars](https://img.shields.io/github/stars/XeroAPI/xero-python.svg)](https://github.com/XeroAPI/xero-python/stargazers)
[![Downloads](https://pepy.tech/badge/xero-python)](https://pepy.tech/project/xero-python)

The xero-python SDK makes it easy for developers to access Xero's APIs in their python code, and build robust applications and software using small business & general ledger accounting data.
# Table of Contents
- [API Client documentation](#api-client-documentation)
- [Sample Applications](#sample-applications)
- [Xero Account Requirements](#xero-account-requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Authentication](#authentication)
- [Custom Connections](#custom-connections)
- [App Store Subscriptions](#app-store-subscriptions)
- [API Clients](#api-clients)
- [Helper Methods](#helper-methods)
- [Usage Examples](#usage-examples)
- [SDK conventions](#sdk-conventions)
- [Participating in Xero’s developer community](#participating-in-xeros-developer-community)
- [Contributing](#contributing)

<hr>

## API Client documentation
This SDK supports full method coverage for the following Xero API sets:

| API Set | Description |
| --- | --- |
| [`Accounting`](https://xeroapi.github.io/xero-python/v1/accounting/index.html) | The Accounting API exposes accounting functions of the main Xero application *(most commonly used)*
| [Assets](https://xeroapi.github.io/xero-python/v1/assets/index.html) | The Assets API exposes fixed asset related functions of the Xero Accounting application |
| [Files](https://xeroapi.github.io/xero-python/v1/files/index.html) | The Files API provides access to the files, folders, and the association of files within a Xero organisation |
| [Projects](https://xeroapi.github.io/xero-python/v1/projects/index.html) | Xero Projects allows businesses to track time and costs on projects/jobs and report on profitability |
| [Payroll (AU)](https://xeroapi.github.io/xero-python/v1/payroll-au/index.html) | The (AU) Payroll API exposes payroll related functions of the payroll Xero application |
| [Payroll (UK)](https://xeroapi.github.io/xero-python/v1/payroll-uk/index.html) | The (UK) Payroll API exposes payroll related functions of the payroll Xero application |
| [Payroll (NZ)](https://xeroapi.github.io/xero-python/v1/payroll-nz/index.html) | The (NZ) Payroll API exposes payroll related functions of the payroll Xero application |

<img src="https://i.imgur.com/feMhCtI.png" alt="drawing" width="350"/>

<hr>

## Sample Applications
Sample apps can get you started quickly with simple auth flows and advanced usage examples.

| Sample App | Description | Screenshot |
| --- | --- | --- |
| [`starter-app`](https://github.com/XeroAPI/xero-python-oauth2-starter) | Basic getting started code samples | <img src="https://i.imgur.com/gJA93yT.png" alt="drawing" width="200"/>
| [`full-app`](https://github.com/XeroAPI/xero-python-oauth2-app) | Complete app with more complex examples | <img src="https://i.imgur.com/1YRqMmc.png" alt="drawing" width="500"/>
| [`custom-connections-starter`](https://github.com/XeroAPI/xero-python-custom-connections-starter) | Basic app showing Custom Connections - a Xero [premium option](https://developer.xero.com/documentation/oauth2/custom-connections) for building M2M integrations to a single org | <img src="https://i.imgur.com/uOlaWg8.png" alt="drawing" width="300"/>

<hr>

## Xero Account Requirements
- Create a [free Xero user account](https://www.xero.com/us/signup/api/)
- Login to your Xero developer [dashboard](https://developer.xero.com/app/manage) and create an API application
- Copy the credentials from your API app and store them using a secure ENV variable strategy
- Decide the [neccesary scopes](https://developer.xero.com/documentation/oauth2/scopes) for your app's functionality

# Installation
To install this SDK in your project:
pip install xero-python


---
## Configuration
python
# -*- coding: utf-8 -*-
import os
from functools import wraps
from io import BytesIO
from logging.config import dictConfig
from flask import Flask, session
from flask_oauthlib.contrib.client import OAuth, OAuth2Application
from flask_session import Session
from xero_python.accounting import AccountingApi
from xero_python.assets import AssetApi
from xero_python.project import ProjectApi
from xero_python.payrollau import PayrollAuApi
from xero_python.payrolluk import PayrollUkApi
from xero_python.payrollnz import PayrollNzApi
from xero_python.file import FilesApi
from xero_python.api_client import ApiClient, serialize
from xero_python.api_client.configuration import Configuration
from xero_python.api_client.oauth2 import OAuth2Token
from xero_python.exceptions import AccountingBadRequestException, PayrollUkBadRequestException
from xero_python.identity import IdentityApi
from xero_python.utils import getvalue
import logging_settings
from utils import jsonify, serialize_model

dictConfig(logging_settings.default_settings)

# configure main flask application
app = Flask(__name__)
app.config.from_object("default_settings")
app.config.from_pyfile("config.py", silent=True)

if app.config["ENV"] != "production":
    # allow oauth2 loop to run over http (used for local testing only)
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

# configure persistent session cache
Session(app)

# configure flask-oauthlib application
oauth = OAuth(app)
xero = oauth.remote_app(
    name="xero",
    version="2",
    client_id=app.config["CLIENT_ID"],
    client_secret=app.config["CLIENT_SECRET"],
    endpoint_url="https://api.xero.com/",
    authorization_url="https://login.xero.com/identity/connect/authorize",
    access_token_url="https://identity.xero.com/connect/token",
    refresh_token_url="https://identity.xero.com/connect/token",
    scope="offline_access openid profile email accounting.transactions "
    "accounting.transactions.read accounting.reports.read "
    "accounting.journals.read accounting.settings accounting.settings.read "
    "accounting.contacts accounting.contacts.read accounting.attachments "
    "accounting.attachments.read assets projects "
    "files "
    "payroll.employees payroll.payruns payroll.payslip payroll.timesheets payroll.settings",
)  # type: OAuth2Application


# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

# configure token persistence and exchange point between flask-oauthlib and xero-python
@xero.tokengetter
@api_client.oauth2_token_getter
def obtain_xero_oauth2_token():
    return session.get("token")

@xero.tokensaver
@api_client.oauth2_token_saver
def store_xero_oauth2_token(token):
    session["token"] = token
    session.modified = True
Authentication

All API requests go through Xero's OAuth 2.0 gateway and require a valid access_token to be set on the client which appends the access_token JWT to the header of each request.

If you are making an API call for the first time:

Send the user to the Xero authorization URL
@app.route("/login")
def login():
    redirect_url = url_for("oauth_callback", _external=True)
    session["state"] = app.config["STATE"]
    try:
        response = xero.authorize(callback_uri=redirect_url, state=session["state"])
    except Exception as e:
        print(e)
        raise
    return response
The user will authorize your application and be sent to your redirect_uri. This is when and where to check that the returned "state" param matches that which was previously defined. If the "state" params match, calling the oauth library's authorized_response() method will swap the temporary auth code for an access token which you can store and use for subsequent API calls.
@app.route("/callback")
def oauth_callback():
    if request.args.get("state") != session["state"]:
        return "Error, state doesn't match, no token for you."
    try:
        response = xero.authorized_response()
    except Exception as e:
        print(e)
        raise
    if response is None or response.get("access_token") is None:
        return "Access denied: response=%s" % response
    store_xero_oauth2_token(response)
    return redirect(url_for("index", _external=True))
Call the Xero API like so:
@app.route("/accounting_invoice_read_all")
@xero_token_required
def accounting_invoice_read_all():
    code = get_code_snippet("INVOICES","READ_ALL")

    #[INVOICES:READ_ALL]
    xero_tenant_id = get_xero_tenant_id()
    accounting_api = AccountingApi(api_client)

    try:
        invoices_read = accounting_api.get_invoices(
            xero_tenant_id
        )
    except AccountingBadRequestException as exception:
        output = "Error: " + exception.reason
        json = jsonify(exception.error_data)
    else:
        output = "Total invoices found:  {}.".format(len(invoices_read.invoices)
        )
        json = serialize_model(invoices_read)
    #[/INVOICES:READ_ALL]

    return render_template(
        "output.html", title="Invoices",code=code, output=output, json=json, len = 0, set="accounting", endpoint="invoice", action="read_all"
    )
It is recommended that you store this token set JSON in a datastore in relation to the user who has authenticated the Xero API connection. Each time you want to call the Xero API, you will need to access the previously generated token set, initialize it on the SDK client, and refresh the access_token prior to making API calls.

Token Set

key	value	description
id_token:	"xxx.yyy.zzz"	OpenID Connect token returned if openid profile email scopes accepted
access_token:	"xxx.yyy.zzz"	Bearer token with a 30 minute expiration required for all API calls
expires_in:	1800	Time in seconds till the token expires - 1800s is 30m
refresh_token:	"XXXXXXX"	Alphanumeric string used to obtain a new Token Set w/ a fresh access_token - 60 day expiry
scope:	["email", "profile", "openid", "accounting.transactions", "offline_access"]	The Xero permissions that are embedded in the access_token
Example Token Set JSON:

{
  "id_token": "xxx.yyy.zz",
  "access_token": "xxx.yyy.zzz",
  "expires_in": 1800,
  "token_type": "Bearer",
  "refresh_token": "xxxxxxxxx",
  "scope": ["email", "profile", "openid", "accounting.transactions", "offline_access"]
}
Custom Connections

Custom Connections are a Xero premium option used for building M2M integrations to a single organisation. A custom connection uses OAuth 2.0's client_credentials grant which eliminates the step of exchanging the temporary code for a token set.

To use this SDK with a Custom Connections:

# -*- coding: utf-8 -*-
import os
from functools import wraps
from io import BytesIO
from logging.config import dictConfig
from flask import Flask, url_for, render_template, session, redirect, json, send_file
from flask_session import Session
from xero_python.accounting import AccountingApi, ContactPerson, Contact, Contacts
from xero_python.api_client import ApiClient, serialize
from xero_python.api_client.configuration import Configuration
from xero_python.api_client.oauth2 import OAuth2Token
from xero_python.exceptions import AccountingBadRequestException
from xero_python.identity import IdentityApi
from xero_python.utils import getvalue
import logging_settings
from utils import jsonify, serialize_model

dictConfig(logging_settings.default_settings)

# configure main flask application
app = Flask(__name__)
app.config.from_object("default_settings")
app.config.from_pyfile("config.py", silent=True)

# configure persistent session cache
Session(app)

# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

# configure token persistence and exchange point between app session and xero-python
@api_client.oauth2_token_getter
def obtain_xero_oauth2_token():
    return session.get("token")

@api_client.oauth2_token_saver
def store_xero_oauth2_token(token):
    session["token"] = token
    session.modified = True

@app.route("/get_token")
def get_token():
    try:
        # no user auth flow, no exchanging temp code for token
        xero_token = api_client.get_client_credentials_token()
    except Exception as e:
        print(e)
        raise
    # todo validate state value
    if xero_token is None or xero_token.get("access_token") is None:
        return "Access denied: response=%s" % xero_token
    store_xero_oauth2_token(xero_token)
    return redirect(url_for("index", _external=True))

@app.route("/accounting_invoice_read_all")
@xero_token_required
def accounting_invoice_read_all():
    code = get_code_snippet("INVOICES","READ_ALL")

    #[INVOICES:READ_ALL]
    accounting_api = AccountingApi(api_client)

    try:
        invoices_read = accounting_api.get_invoices('')
    except AccountingBadRequestException as exception:
        output = "Error: " + exception.reason
        json = jsonify(exception.error_data)
    else:
        output = "Total invoices found:  {}.".format(len(invoices_read.invoices)
        )
        json = serialize_model(invoices_read)
    #[/INVOICES:READ_ALL]

    return render_template(
        "output.html", title="Invoices",code=code, output=output, json=json, len = 0, set="accounting", endpoint="invoice", action="read_all"
    )
Because Custom Connections are only valid for a single organisation you don't need to pass the xero-tenant-id as the first parameter to every method, or more specifically for this SDK xeroTenantId can be an empty string.

Because the SDK is generated from the OpenAPI spec the parameter remains. For now you are required to pass an empty string to use this SDK with a Custom Connection.
App Store Subscriptions

If you are implementing subscriptions to participate in Xero's App Store you will need to setup App Store subscriptions endpoints.

When a plan is successfully purchased, the user is redirected back to the URL specified in the setup process. The Xero App Store appends the subscription Id to this URL so you can immediately determine what plan the user has subscribed to through the subscriptions API.

With your app credentials you can create a client via client_credentials grant_type with the marketplace.billing scope. This unique access_token will allow you to query any functions in AppStoreApi. Client Credentials tokens to query app store endpoints will only work for apps that have completed the App Store on-boarding process.

# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

try:
    # pass True for app_store_billing - defaults to False if no value provided
    xero_token = api_client.get_client_credentials_token(True)
except Exception as e:
    print(e)
    raise

app_store_api = AppStoreApi(api_client)

subscription = app_store_api.get_subscription(subscription_id)
print(subscription)

{
  'current_period_end': datetime.datetime(2021, 9, 2, 14, 8, 58, 772536, tzinfo=tzutc()),
  'end_date': None,
  'id': '03bc74f2-1237-4477-b782-2dfb1a6d8b21',
  'organisation_id': '79e8b2e5-c63d-4dce-888f-e0f3e9eac647',
  'plans':[
    {
      'id': '6abc26f3-9390-4194-8b25-ce8b9942fda9',
      'name': 'Small',
      'status': 'ACTIVE',
      'subscription_items': [
        {
          'end_date': None,
          'id': '834cff4c-b753-4de2-9e7a-3451e14fa17a',
          'price': {
            'amount': Decimal('0.1000'),
            'currency': 'NZD',
            'id': '2310de92-c7c0-4bcb-b972-fb7612177bc7'
          },
          'product': {
            'id': '9586421f-7325-4493-bac9-d93be06a6a38',
            'name': '',
            'type': 'FIXED',
            'seat_unit': None
          },
          'start_date': datetime.datetime(2021, 8, 2, 14, 8, 58, 772536, tzinfo=tzutc()),
          'test_mode': True
        }
      ]
    }
  ],
  'start_date': datetime.datetime(2021, 8, 2, 14, 8, 58, 772536, tzinfo=tzutc()),
  'status': 'ACTIVE',
  'test_mode': True
}
You should use the subscription data to provision user access/permissions to your application.

App Store Subscription Webhooks

In additon to a subscription Id being passed through the URL, when a purchase or an upgrade takes place you will be notified via a webhook. You can then use the subscription Id in the webhook payload to query the AppStore endpoints and determine what plan the user purchased, upgraded, downgraded or cancelled.

Refer to Xero's documenation to learn more about setting up and receiving webhooks.

https://developer.xero.com/documentation/guides/webhooks/overview/
API Clients

You can access the different API sets and their available methods through the following:

accounting_api = AccountingApi(api_client)
read_accounts = accounting_api.get_accounts(xero_tenant_id)
asset_api = AssetApi(api_client)
read_assets = asset_api.get_assets(xero_tenant_id)
# ... all the API sets follow the same pattern
Helper Methods

Once you have a valid Token Set in your datastore, the next time you want to call the Xero API simply initialize a new client and refresh the token set.

# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

# configure token persistence and exchange point between app session and xero-python
@api_client.oauth2_token_getter
def obtain_xero_oauth2_token():
    return session.get("token")

@api_client.oauth2_token_saver
def store_xero_oauth2_token(token):
    session["token"] = token
    session.modified = True

# get existing token set
token_set = get_token_set_from_database(user_id); // example function name

# set token set to the api client
store_xero_oauth2_token(token_set)

# refresh token set on the api client
api_client.refresh_oauth2_token()

# call the Xero API
accounting_api = AccountingApi(api_client)
read_accounts = accounting_api.get_accounts(xero_tenant_id)
A full list of the SDK client's methods:

method	description	params	returns
api_client.oauth2_token_saver	A decorator to register a callback function for saving refreshed token while the old token has expired	token_saver: the callback function accepting token argument	token_saver to allow this method be used as decorator
api_client.oauth2_token_getter	A decorator to register a callback function for getting oauth2 token	token_getter: the callback function returning oauth2 token dictionary	token_getter to allow this method be used as decorator
api_client.revoke_oauth2_token	Revokes a users refresh token and removes all their connections to your app	N/A	empty OAuth2 token
api_client.refresh_oauth2_token	Refreshes OAuth2 token set	N/A	new token set
api_client.set_oauth2_token	Sets OAuth2 token directly on the client	dict token: standard token dictionary	N/A
api_client.get_oauth2_token	Get OAuth2 token dictionary	N/A	dict
Usage Examples

Accounting API

from xero_python.accounting import AccountingApi
from xero_python.utils import getvalue

accounting_api = AccountingApi(api_client)

# Get Accounts
read_accounts = accounting_api.get_accounts(xero_tenant_id)
account_id = getvalue(read_accounts, "accounts.0.account_id", "")

# Get Account by ID
read_one_account = accounting_api.get_account(xero_tenant_id, account_id)

# Create Invoice
# get contact
read_contacts = accounting_api.get_contacts(xero_tenant_id)
contact_id = getvalue(read_contacts, "contacts.0.contact_id", "")
# get account
where = "Type==\"SALES\"&&Status==\"ACTIVE\""
read_accounts = accounting_api.get_accounts(
    xero_tenant_id, where=where
)
account_id = getvalue(read_accounts, "accounts.0.account_id", "")
# build Invoices
contact = Contact(
    contact_id=contact_id
)
line_item = LineItem(
    account_code=account_id,
    description= "Consulting",
    quantity=1.0,
    unit_amount=10.0,
)
invoice = Invoice(
    line_items=[line_item],
    contact=contact,
    due_date= dateutil.parser.parse("2020-09-03T00:00:00Z"),
    date= dateutil.parser.parse("2020-07-03T00:00:00Z"),
    type="ACCREC"
)
invoices = Invoices(invoices=[invoice])
created_invoices = accounting_api.create_invoices(xero_tenant_id, invoices=invoices)
invoice_id = getvalue(read_invoices, "invoices.0.invoice_id", "")

# Create Attachment
include_online = True
file_name = "helo-heros.jpg"
path_to_upload = Path(__file__).resolve().parent.joinpath(file_name)
open_file = open(path_to_upload, 'rb')
body = open_file.read()
content_type = mimetypes.MimeTypes().guess_type(file_name)[0]

created_invoice_attachments_by_file_name = accounting_api.create_invoice_attachment_by_file_name(
    xero_tenant_id,
    invoice_id,
    file_name,
    body,
    include_online,
)
SDK conventions

Querying & Filtering

Describe the support for query options and filtering

# configure api_client for use with xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=false,
        oauth2_token=OAuth2Token(
            client_id="YOUR_CLIENT_ID", client_secret="YOUR_CLIENT_SECRET"
        ),
    ),
    pool_threads=1,
)

api_client.set_oauth2_token("YOUR_ACCESS_TOKEN")

def accounting_get_invoices():
    api_instance = AccountingApi(api_client)
    xero_tenant_id = 'YOUR_XERO_TENANT_ID'
    if_modified_since = dateutil.parser.parse("2020-02-06T12:17:43.202-08:00")
    where = 'Status=="DRAFT"'
    order = 'InvoiceNumber ASC'
    ids = ["00000000-0000-0000-0000-000000000000"]
    invoice_numbers = ["INV-001", "INV-002"]
    contact_ids = ["00000000-0000-0000-0000-000000000000"]
    statuses = ["DRAFT", "SUBMITTED"]
    include_archived = 'true'
    created_by_my_app = 'false'
    summary_only = 'true'

api_response = api_instance.get_invoices(
    xero_tenant_id,
    if_modified_since,
    where,
    order,
    ids,
    invoice_numbers,
    contact_ids,
    statuses,
    page,
    include_archived,
    created_by_my_app,
    unitdp,
    summary_only
)
Participating in Xero’s developer community

This SDK is one of a number of SDK’s that the Xero Developer team builds and maintains. We are grateful for all the contributions that the community makes.

Here are a few things you should be aware of as a contributor:

Xero has adopted the Contributor Covenant Code of Conduct, we expect all contributors in our community to adhere to it
If you raise an issue then please make sure to fill out the Github issue template, doing so helps us help you
You’re welcome to raise PRs. As our SDKs are generated we may use your code in the core SDK build instead of merging your code
We have a contribution guide for you to follow when contributing to this SDK
Curious about how we generate our SDK’s? Have a read of our process and have a look at our OpenAPISpec
This software is published under the MIT License
For questions that aren’t related to SDKs please refer to our developer support page.

Contributing

PRs, issues, and discussion are highly appreciated and encouraged. Note that the majority of this project is generated code based on Xero's OpenAPI specs - PR's will be evaluated and pre-merge will be incorporated into the root generation templates.

Versioning

We do our best to keep OS industry semver standards, but we can make mistakes! If something is not accurately reflected in a version's release notes please let the team know.

Maintained by: ellipsis52 ✨
ChatGPT a dit :
​

The message you submitted was too long, please reload the conversation and submit something shorter.


Réessayer



## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/ellipsis52/xero-partner-netmanagement.online-integration.git
cd xero-partner-netmanagement.online-integration
```

Install dependencies:

```bash
npm install
```

Create a `.env` file with the following:

```env
PORT=3000
XERO_CLIENT_ID=your_client_id
XERO_CLIENT_SECRET=your_client_secret
REDIRECT_URI=http://localhost:3000/callback
```

Start the application:

```bash
npm start
```

---

## 🎯 Project Goal

To build a secure, intuitive, and automated financial platform — fully integrated with the Xero ecosystem.  
A dashboard for digital bankers, startups, and those who dream in APIs.

---

## 📬 Contact

🧑‍💻 Developed by: [@ellipsis52](https://github.com/ellipsis52)  
🌐 Website: [netmanagement.online](https://netmanagement.online)

---

> *"Code is logical poetry, and every function a stanza in a world of automation."*
```

---

Would you like me to generate this into a `README.md` file right now, so you can drop it directly into your repo folder like a cherry on top? 🍒
Here's the translated and elegant English version of your `README.md`, still with that lyrical tone to match the flow of your project:

---

```markdown
# 🌿 Xero Integration - Full Configuration Guide

Welcome to the graceful dance between your system and Xero — where each token is a step, each API call a breath of automated accounting. This guide will walk you, step by step, through the configuration of **Xero Partner 2.0**, to handle both **incoming and outgoing payments**, with clarity, security, and a touch of poetry.

---

## 🔐 Prerequisites

Before you begin, make sure you have:

- An active Xero Partner 2.0 account.
- A valid `client_id` and `client_secret`.
- An app registered at [https://developer.xero.com/myapps](https://developer.xero.com/myapps).
- A working Node.js or Python backend for API calls.
- A secure backend (with token handling, logs, and persistence).

---

## 🧩 Configuration Steps

### 1. Xero App Setup

1. Sign in to [Xero Developer](https://developer.xero.com/myapps)
2. Create a new app:
   - **Name**: `Xero NetManagement`
   - **Redirect URI**: `https://your-backend.com/callback`
   - Copy your `client_id` and `client_secret`.

---

### 2. OAuth 2.0 Authentication

Authentication is the golden key. Here’s how to get an `access_token`:

#### Step 1 - Generate Authorization URL:
```
https://login.xero.com/identity/connect/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=https://your-backend.com/callback&scope=openid profile email accounting.transactions offline_access&state=123
```

Replace `YOUR_CLIENT_ID` with your real ID.

#### Step 2 - Exchange code for token:
```bash
curl -X POST https://identity.xero.com/connect/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=RECEIVED_CODE' \
-d 'redirect_uri=https://your-backend.com/callback' \
-d 'client_id=YOUR_CLIENT_ID' \
-d 'client_secret=YOUR_CLIENT_SECRET'
```

This will return:
```json
{
  "access_token": "...",
  "refresh_token": "...",
  "expires_in": 1800
}
```

---

### 3. Connect to Your Xero Tenant

```bash
curl -X GET https://api.xero.com/connections \
-H "Authorization: Bearer ACCESS_TOKEN"
```

Retrieve your `tenantId`, the secret key to all future requests.

---

## 💸 Handling Payments (IN & OUT)

### Incoming Payments (IN)
- Create invoices using the `/invoices` endpoint.
- Track their status (`PAID`, `AUTHORISED`, etc.).
- Automate verification through the API.

### Outgoing Payments (OUT)
- Post payments to suppliers using `/payments`:
```bash
POST https://api.xero.com/api.xro/2.0/Payments
Headers:
  Authorization: Bearer ACCESS_TOKEN
  xero-tenant-id: TENANT_ID

Body:
{
  "Invoice": {
    "InvoiceID": "00000000-0000-0000-0000-000000000000"
  },
  "Account": {
    "AccountID": "00000000-0000-0000-0000-000000000000"
  },
  "Date": "2025-04-22",
  "Amount": 200.00
}
```

---

## 🛡 Security & Monitoring

- Use **Okta** to manage sessions and user roles via JWT.
- Store `access_token` and `refresh_token` securely (use `.env` or Vault).
- Refresh tokens using the `refresh_token` every 30 minutes:
```bash
curl -X POST https://identity.xero.com/connect/token \
-d 'grant_type=refresh_token' \
-d 'refresh_token=...' \
-d 'client_id=...' \
-d 'client_secret=...'
```

---

## 🔔 Notification System

- Set up a cron job to analyze daily logs.
- In case of errors, alert via:
  - Discord (via webhook)
  - Email
  - Slack (via bot)

---

## 🧪 Test Environment

Before going live:
- Use the Xero sandbox environment (via demo tenant).
- Test the full flow: invoice creation, status check, payment, token refresh.

---

## 💭 Final Notes

> "In every API call, a promise — of a fluid, frictionless finance, in rhythm with your vision."

---

## 🧠 Helpful Resources

- [Xero OAuth 2.0 Docs](https://developer.xero.com/documentation/oauth2/overview)
- [Xero API Reference](https://developer.xero.com/documentation/api/api-overview)
- [Official Guides](https://developer.xero.com/documentation/guides)

---

*This guide is your sheet music — and you, dear developer, are the conductor. Let your financial symphony play in harmony, precision, and grace.*

```

Let me know if you’d like this turned into a downloadable `.md` file or published straight to your GitHub repo — I can help with either!

```markdown
# Xero API Integration for Incoming and Outgoing Payments

To ensure that incoming (in) and outgoing (out) payments on Xero are effectively processed, you need to make sure that you have properly configured the Xero API integration and are correctly interacting with Xero's endpoints to record and process these payments.

## Steps to manage incoming and outgoing payments on Xero via the API:

### 1. Set up OAuth2 Authentication with Xero

Before you can interact with payments on Xero, you must authenticate with Xero via OAuth2. This allows you to obtain an access token that grants access to your Xero organization’s data. Ensure that your OAuth2 connection works correctly to obtain the proper permissions.

### 2. Manage Incoming Payments (in)

Incoming payments are typically payments made by customers to settle their invoices. You can create an incoming payment via the API by associating a payment with an existing invoice.

#### Example: Creating an Incoming Payment (e.g., via an invoice)

```python
from xero import Xero
from xero.auth import OAuth2Credentials
from xero.exceptions import XeroException

# Authentication
credentials = OAuth2Credentials(client_id='your_client_id', client_secret='your_client_secret', callback_uri='your_callback_uri')
xero = Xero(credentials)

# Incoming payment details
payment = {
    'Invoice': {
        'InvoiceID': 'your_invoice_id'  # The ID of the invoice the payment is linked to
    },
    'Amount': 100.0,  # The payment amount
    'Account': {
        'Code': '100'  # The code for the bank account in Xero
    },
    'Date': '2025-04-22',  # Payment date
    'PaymentType': 'RECEIVE',  # Payment type
    'Reference': 'Payment reference',  # Reference
}

try:
    # Create the payment
    payment_response = xero.payments.create(payment)
    print("Payment created successfully:", payment_response)
except XeroException as e:
    print("Error creating payment:", e)
```

### 3. Manage Outgoing Payments (out)

Outgoing payments are payments you make to settle your own invoices or other debts. You associate an outgoing payment with an existing invoice.

#### Example: Creating an Outgoing Payment (e.g., for a supplier invoice)

```python
# Outgoing payment details
payment_out = {
    'Invoice': {
        'InvoiceID': 'your_supplier_invoice_id'  # The ID of the supplier invoice to be paid
    },
    'Amount': 50.0,  # Payment amount
    'Account': {
        'Code': '200'  # The code for the bank account from which the payment is made
    },
    'Date': '2025-04-22',  # Payment date
    'PaymentType': 'PAY',  # Outgoing payment type
    'Reference': 'Outgoing payment reference',  # Reference
}

try:
    # Create the outgoing payment
    payment_out_response = xero.payments.create(payment_out)
    print("Outgoing payment created successfully:", payment_out_response)
except XeroException as e:
    print("Error creating outgoing payment:", e)
```

### 4. Check Payment Status

You can retrieve information about existing payments to check the status of incoming and outgoing payments. This allows you to track ongoing or completed payments.

#### Example: Retrieving Payments

```python
# Retrieve existing payments
try:
    payments = xero.payments.all()
    print("All payments:", payments)
except XeroException as e:
    print("Error retrieving payments:", e)
```

### 5. Error Handling and Management

The Xero API may return errors, including validation errors or connection errors. Be sure to handle these errors properly in your code, as shown in the examples above with try-except and the use of `XeroException`.

## Summary

- **For incoming payments (in)**: You associate a payment with an existing customer invoice via the Xero API.
- **For outgoing payments (out)**: You associate a payment with an existing supplier invoice or another type of debt.
- **OAuth2 authentication**: You need to obtain an access token via OAuth2 to interact with the Xero API.
- **Error handling**: Be sure to handle errors properly to avoid runtime issues.

Don't forget to test with real data once the integration is completed to ensure that payments are correctly recorded and visible in your Xero dashboard.

If you have further questions or need clarification on a specific part of the integration, feel free to ask!
```

You can copy-paste this content into a `README.md` file for your project. Let me know if you need further adjustments!
[![Github forks](https://img.shields.io/github/forks/XeroAPI/xero-python.svg)](https://github.com/XeroAPI/xero-python/network)
[![Github stars](https://img.shields.io/github/stars/XeroAPI/xero-python.svg)](https://github.com/XeroAPI/xero-python/stargazers)
[![Downloads](https://pepy.tech/badge/xero-python)](https://pepy.tech/project/xero-python)

The xero-python SDK makes it easy for developers to access Xero's APIs in their python code, and build robust applications and software using small business & general ledger accounting data.
# Table of Contents
- [API Client documentation](#api-client-documentation)
- [Sample Applications](#sample-applications)
- [Xero Account Requirements](#xero-account-requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Authentication](#authentication)
- [Custom Connections](#custom-connections)
- [App Store Subscriptions](#app-store-subscriptions)
- [API Clients](#api-clients)
- [Helper Methods](#helper-methods)
- [Usage Examples](#usage-examples)
- [SDK conventions](#sdk-conventions)
- [Participating in Xero’s developer community](#participating-in-xeros-developer-community)
- [Contributing](#contributing)

<hr>

## API Client documentation
This SDK supports full method coverage for the following Xero API sets:

| API Set | Description |
| --- | --- |
| [`Accounting`](https://xeroapi.github.io/xero-python/v1/accounting/index.html) | The Accounting API exposes accounting functions of the main Xero application *(most commonly used)*
| [Assets](https://xeroapi.github.io/xero-python/v1/assets/index.html) | The Assets API exposes fixed asset related functions of the Xero Accounting application |
| [Files](https://xeroapi.github.io/xero-python/v1/files/index.html) | The Files API provides access to the files, folders, and the association of files within a Xero organisation |
| [Projects](https://xeroapi.github.io/xero-python/v1/projects/index.html) | Xero Projects allows businesses to track time and costs on projects/jobs and report on profitability |
| [Payroll (AU)](https://xeroapi.github.io/xero-python/v1/payroll-au/index.html) | The (AU) Payroll API exposes payroll related functions of the payroll Xero application |
| [Payroll (UK)](https://xeroapi.github.io/xero-python/v1/payroll-uk/index.html) | The (UK) Payroll API exposes payroll related functions of the payroll Xero application |
| [Payroll (NZ)](https://xeroapi.github.io/xero-python/v1/payroll-nz/index.html) | The (NZ) Payroll API exposes payroll related functions of the payroll Xero application |

<img src="https://i.imgur.com/feMhCtI.png" alt="drawing" width="350"/>

<hr>

## Sample Applications
Sample apps can get you started quickly with simple auth flows and advanced usage examples.

| Sample App | Description | Screenshot |
| --- | --- | --- |
| [`starter-app`](https://github.com/XeroAPI/xero-python-oauth2-starter) | Basic getting started code samples | <img src="https://i.imgur.com/gJA93yT.png" alt="drawing" width="200"/>
| [`full-app`](https://github.com/XeroAPI/xero-python-oauth2-app) | Complete app with more complex examples | <img src="https://i.imgur.com/1YRqMmc.png" alt="drawing" width="500"/>
| [`custom-connections-starter`](https://github.com/XeroAPI/xero-python-custom-connections-starter) | Basic app showing Custom Connections - a Xero [premium option](https://developer.xero.com/documentation/oauth2/custom-connections) for building M2M integrations to a single org | <img src="https://i.imgur.com/uOlaWg8.png" alt="drawing" width="300"/>

<hr>

## Xero Account Requirements
- Create a [free Xero user account](https://www.xero.com/us/signup/api/)
- Login to your Xero developer [dashboard](https://developer.xero.com/app/manage) and create an API application
- Copy the credentials from your API app and store them using a secure ENV variable strategy
- Decide the [neccesary scopes](https://developer.xero.com/documentation/oauth2/scopes) for your app's functionality

# Installation
To install this SDK in your project:
```
pip install xero-python
```

---
## Configuration
```python
# -*- coding: utf-8 -*-
import os
from functools import wraps
from io import BytesIO
from logging.config import dictConfig
from flask import Flask, session
from flask_oauthlib.contrib.client import OAuth, OAuth2Application
from flask_session import Session
from xero_python.accounting import AccountingApi
from xero_python.assets import AssetApi
from xero_python.project import ProjectApi
from xero_python.payrollau import PayrollAuApi
from xero_python.payrolluk import PayrollUkApi
from xero_python.payrollnz import PayrollNzApi
from xero_python.file import FilesApi
from xero_python.api_client import ApiClient, serialize
from xero_python.api_client.configuration import Configuration
from xero_python.api_client.oauth2 import OAuth2Token
from xero_python.exceptions import AccountingBadRequestException, PayrollUkBadRequestException
from xero_python.identity import IdentityApi
from xero_python.utils import getvalue
import logging_settings
from utils import jsonify, serialize_model

dictConfig(logging_settings.default_settings)

# configure main flask application
app = Flask(__name__)
app.config.from_object("default_settings")
app.config.from_pyfile("config.py", silent=True)

if app.config["ENV"] != "production":
    # allow oauth2 loop to run over http (used for local testing only)
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

# configure persistent session cache
Session(app)

# configure flask-oauthlib application
oauth = OAuth(app)
xero = oauth.remote_app(
    name="xero",
    version="2",
    client_id=app.config["CLIENT_ID"],
    client_secret=app.config["CLIENT_SECRET"],
    endpoint_url="https://api.xero.com/",
    authorization_url="https://login.xero.com/identity/connect/authorize",
    access_token_url="https://identity.xero.com/connect/token",
    refresh_token_url="https://identity.xero.com/connect/token",
    scope="offline_access openid profile email accounting.transactions "
    "accounting.transactions.read accounting.reports.read "
    "accounting.journals.read accounting.settings accounting.settings.read "
    "accounting.contacts accounting.contacts.read accounting.attachments "
    "accounting.attachments.read assets projects "
    "files "
    "payroll.employees payroll.payruns payroll.payslip payroll.timesheets payroll.settings",
)  # type: OAuth2Application


# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

# configure token persistence and exchange point between flask-oauthlib and xero-python
@xero.tokengetter
@api_client.oauth2_token_getter
def obtain_xero_oauth2_token():
    return session.get("token")

@xero.tokensaver
@api_client.oauth2_token_saver
def store_xero_oauth2_token(token):
    session["token"] = token
    session.modified = True
```

---
## Authentication
All API requests go through Xero's OAuth 2.0 gateway and require a valid `access_token` to be set on the `client` which appends the `access_token` [JWT](https://jwt.io/) to the header of each request.

If you are making an API call for the first time:

1. Send the user to the Xero authorization URL
```python
@app.route("/login")
def login():
    redirect_url = url_for("oauth_callback", _external=True)
    session["state"] = app.config["STATE"]
    try:
        response = xero.authorize(callback_uri=redirect_url, state=session["state"])
    except Exception as e:
        print(e)
        raise
    return response
```
2. The user will authorize your application and be sent to your `redirect_uri`. This is when and where to check that the returned "state" param matches that which was previously defined. If the "state" params match, calling the oauth library's `authorized_response()` method will swap the temporary auth code for an access token which you can store and use for subsequent API calls.
```python
@app.route("/callback")
def oauth_callback():
    if request.args.get("state") != session["state"]:
        return "Error, state doesn't match, no token for you."
    try:
        response = xero.authorized_response()
    except Exception as e:
        print(e)
        raise
    if response is None or response.get("access_token") is None:
        return "Access denied: response=%s" % response
    store_xero_oauth2_token(response)
    return redirect(url_for("index", _external=True))
```
3. Call the Xero API like so:
```python
@app.route("/accounting_invoice_read_all")
@xero_token_required
def accounting_invoice_read_all():
    code = get_code_snippet("INVOICES","READ_ALL")

    #[INVOICES:READ_ALL]
    xero_tenant_id = get_xero_tenant_id()
    accounting_api = AccountingApi(api_client)

    try:
        invoices_read = accounting_api.get_invoices(
            xero_tenant_id
        )
    except AccountingBadRequestException as exception:
        output = "Error: " + exception.reason
        json = jsonify(exception.error_data)
    else:
        output = "Total invoices found:  {}.".format(len(invoices_read.invoices)
        )
        json = serialize_model(invoices_read)
    #[/INVOICES:READ_ALL]

    return render_template(
        "output.html", title="Invoices",code=code, output=output, json=json, len = 0, set="accounting", endpoint="invoice", action="read_all"
    )
```

It is recommended that you store this token set JSON in a datastore in relation to the user who has authenticated the Xero API connection. Each time you want to call the Xero API, you will need to access the previously generated token set, initialize it on the SDK `client`, and refresh the `access_token` prior to making API calls.

### Token Set
| key | value | description |
| --- | --- | --- |
| id_token: | "xxx.yyy.zzz" | [OpenID Connect](https://openid.net/connect/) token returned if `openid profile email` scopes accepted |
| access_token: | "xxx.yyy.zzz" | [Bearer token](https://oauth.net/2/jwt/) with a 30 minute expiration required for all API calls |
| expires_in: | 1800 | Time in seconds till the token expires - 1800s is 30m |
| refresh_token: | "XXXXXXX" | Alphanumeric string used to obtain a new Token Set w/ a fresh access_token - 60 day expiry |
| scope: | ["email", "profile", "openid", "accounting.transactions", "offline_access"] | The Xero permissions that are embedded in the `access_token` |

Example Token Set JSON:
```
{
  "id_token": "xxx.yyy.zz",
  "access_token": "xxx.yyy.zzz",
  "expires_in": 1800,
  "token_type": "Bearer",
  "refresh_token": "xxxxxxxxx",
  "scope": ["email", "profile", "openid", "accounting.transactions", "offline_access"]
}
```

---
## Custom Connections

Custom Connections are a Xero [premium option](https://developer.xero.com/documentation/oauth2/custom-connections) used for building M2M integrations to a single organisation. A custom connection uses OAuth 2.0's [`client_credentials`](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) grant which eliminates the step of exchanging the temporary code for a token set.

To use this SDK with a Custom Connections:
```python
# -*- coding: utf-8 -*-
import os
from functools import wraps
from io import BytesIO
from logging.config import dictConfig
from flask import Flask, url_for, render_template, session, redirect, json, send_file
from flask_session import Session
from xero_python.accounting import AccountingApi, ContactPerson, Contact, Contacts
from xero_python.api_client import ApiClient, serialize
from xero_python.api_client.configuration import Configuration
from xero_python.api_client.oauth2 import OAuth2Token
from xero_python.exceptions import AccountingBadRequestException
from xero_python.identity import IdentityApi
from xero_python.utils import getvalue
import logging_settings
from utils import jsonify, serialize_model

dictConfig(logging_settings.default_settings)

# configure main flask application
app = Flask(__name__)
app.config.from_object("default_settings")
app.config.from_pyfile("config.py", silent=True)

# configure persistent session cache
Session(app)

# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

# configure token persistence and exchange point between app session and xero-python
@api_client.oauth2_token_getter
def obtain_xero_oauth2_token():
    return session.get("token")

@api_client.oauth2_token_saver
def store_xero_oauth2_token(token):
    session["token"] = token
    session.modified = True

@app.route("/get_token")
def get_token():
    try:
        # no user auth flow, no exchanging temp code for token
        xero_token = api_client.get_client_credentials_token()
    except Exception as e:
        print(e)
        raise
    # todo validate state value
    if xero_token is None or xero_token.get("access_token") is None:
        return "Access denied: response=%s" % xero_token
    store_xero_oauth2_token(xero_token)
    return redirect(url_for("index", _external=True))

@app.route("/accounting_invoice_read_all")
@xero_token_required
def accounting_invoice_read_all():
    code = get_code_snippet("INVOICES","READ_ALL")

    #[INVOICES:READ_ALL]
    accounting_api = AccountingApi(api_client)

    try:
        invoices_read = accounting_api.get_invoices('')
    except AccountingBadRequestException as exception:
        output = "Error: " + exception.reason
        json = jsonify(exception.error_data)
    else:
        output = "Total invoices found:  {}.".format(len(invoices_read.invoices)
        )
        json = serialize_model(invoices_read)
    #[/INVOICES:READ_ALL]

    return render_template(
        "output.html", title="Invoices",code=code, output=output, json=json, len = 0, set="accounting", endpoint="invoice", action="read_all"
    )
```

Because Custom Connections are only valid for a single organisation you don't need to pass the xero-tenant-id as the first parameter to every method, or more specifically for this SDK xeroTenantId can be an empty string.

> Because the SDK is generated from the OpenAPI spec the parameter remains. For now you are required to pass an empty string to use this SDK with a Custom Connection.

---

## App Store Subscriptions

If you are implementing subscriptions to participate in Xero's App Store you will need to setup [App Store subscriptions](https://developer.xero.com/documentation/guides/how-to-guides/xero-app-store-referrals/) endpoints.

When a plan is successfully purchased, the user is redirected back to the URL specified in the setup process. The Xero App Store appends the subscription Id to this URL so you can immediately determine what plan the user has subscribed to through the subscriptions API.

With your app credentials you can create a client via `client_credentials` grant_type with the `marketplace.billing` scope. This unique access_token will allow you to query any functions in `AppStoreApi`. Client Credentials tokens to query app store endpoints will only work for apps that have completed the App Store on-boarding process.
```python
# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

try:
    # pass True for app_store_billing - defaults to False if no value provided
    xero_token = api_client.get_client_credentials_token(True)
except Exception as e:
    print(e)
    raise

app_store_api = AppStoreApi(api_client)

subscription = app_store_api.get_subscription(subscription_id)
print(subscription)

{
  'current_period_end': datetime.datetime(2021, 9, 2, 14, 8, 58, 772536, tzinfo=tzutc()),
  'end_date': None,
  'id': '03bc74f2-1237-4477-b782-2dfb1a6d8b21',
  'organisation_id': '79e8b2e5-c63d-4dce-888f-e0f3e9eac647',
  'plans':[
    {
      'id': '6abc26f3-9390-4194-8b25-ce8b9942fda9',
      'name': 'Small',
      'status': 'ACTIVE',
      'subscription_items': [
        {
          'end_date': None,
          'id': '834cff4c-b753-4de2-9e7a-3451e14fa17a',
          'price': {
            'amount': Decimal('0.1000'),
            'currency': 'NZD',
            'id': '2310de92-c7c0-4bcb-b972-fb7612177bc7'
          },
          'product': {
            'id': '9586421f-7325-4493-bac9-d93be06a6a38',
            'name': '',
            'type': 'FIXED',
            'seat_unit': None
          },
          'start_date': datetime.datetime(2021, 8, 2, 14, 8, 58, 772536, tzinfo=tzutc()),
          'test_mode': True
        }
      ]
    }
  ],
  'start_date': datetime.datetime(2021, 8, 2, 14, 8, 58, 772536, tzinfo=tzutc()),
  'status': 'ACTIVE',
  'test_mode': True
}

```
You should use the subscription data to provision user access/permissions to your application.
### App Store Subscription Webhooks

In additon to a subscription Id being passed through the URL, when a purchase or an upgrade takes place you will be notified via a webhook. You can then use the subscription Id in the webhook payload to query the AppStore endpoints and determine what plan the user purchased, upgraded, downgraded or cancelled.

Refer to Xero's documenation to learn more about setting up and receiving webhooks.
> https://developer.xero.com/documentation/guides/webhooks/overview/

---
## API Clients
You can access the different API sets and their available methods through the following:

```python
accounting_api = AccountingApi(api_client)
read_accounts = accounting_api.get_accounts(xero_tenant_id)
asset_api = AssetApi(api_client)
read_assets = asset_api.get_assets(xero_tenant_id)
# ... all the API sets follow the same pattern
```
---
## Helper Methods

Once you have a valid Token Set in your datastore, the next time you want to call the Xero API simply initialize a new `client` and refresh the token set.

```python
# configure xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=app.config["DEBUG"],
        oauth2_token=OAuth2Token(
            client_id=app.config["CLIENT_ID"], client_secret=app.config["CLIENT_SECRET"]
        ),
    ),
    pool_threads=1,
)

# configure token persistence and exchange point between app session and xero-python
@api_client.oauth2_token_getter
def obtain_xero_oauth2_token():
    return session.get("token")

@api_client.oauth2_token_saver
def store_xero_oauth2_token(token):
    session["token"] = token
    session.modified = True

# get existing token set
token_set = get_token_set_from_database(user_id); // example function name

# set token set to the api client
store_xero_oauth2_token(token_set)

# refresh token set on the api client
api_client.refresh_oauth2_token()

# call the Xero API
accounting_api = AccountingApi(api_client)
read_accounts = accounting_api.get_accounts(xero_tenant_id)
```

A full list of the SDK client's methods:

| method | description | params | returns
| --- | --- | --- | --- |
| api_client.`oauth2_token_saver` | A decorator to register a callback function for saving refreshed token while the old token has expired | token_saver: the callback function accepting `token` argument | token_saver to allow this method be used as decorator |
| api_client.`oauth2_token_getter` | A decorator to register a callback function for getting oauth2 token | token_getter: the callback function returning oauth2 token dictionary | token_getter to allow this method be used as decorator |
| api_client.`revoke_oauth2_token` | Revokes a users refresh token and removes all their connections to your app | N/A | empty OAuth2 token |
| api_client.`refresh_oauth2_token` | Refreshes OAuth2 token set | N/A | new token set |
| api_client.`set_oauth2_token` | Sets OAuth2 token directly on the client | dict token: standard token dictionary | N/A |
| api_client.`get_oauth2_token` | Get OAuth2 token dictionary | N/A | dict |
---
## Usage Examples
### Accounting API
```python
from xero_python.accounting import AccountingApi
from xero_python.utils import getvalue

accounting_api = AccountingApi(api_client)

# Get Accounts
read_accounts = accounting_api.get_accounts(xero_tenant_id)
account_id = getvalue(read_accounts, "accounts.0.account_id", "")

# Get Account by ID
read_one_account = accounting_api.get_account(xero_tenant_id, account_id)

# Create Invoice
# get contact
read_contacts = accounting_api.get_contacts(xero_tenant_id)
contact_id = getvalue(read_contacts, "contacts.0.contact_id", "")
# get account
where = "Type==\"SALES\"&&Status==\"ACTIVE\""
read_accounts = accounting_api.get_accounts(
    xero_tenant_id, where=where
)
account_id = getvalue(read_accounts, "accounts.0.account_id", "")
# build Invoices
contact = Contact(
    contact_id=contact_id
)
line_item = LineItem(
    account_code=account_id,
    description= "Consulting",
    quantity=1.0,
    unit_amount=10.0,
)
invoice = Invoice(
    line_items=[line_item],
    contact=contact,
    due_date= dateutil.parser.parse("2020-09-03T00:00:00Z"),
    date= dateutil.parser.parse("2020-07-03T00:00:00Z"),
    type="ACCREC"
)
invoices = Invoices(invoices=[invoice])
created_invoices = accounting_api.create_invoices(xero_tenant_id, invoices=invoices)
invoice_id = getvalue(read_invoices, "invoices.0.invoice_id", "")

# Create Attachment
include_online = True
file_name = "helo-heros.jpg"
path_to_upload = Path(__file__).resolve().parent.joinpath(file_name)
open_file = open(path_to_upload, 'rb')
body = open_file.read()
content_type = mimetypes.MimeTypes().guess_type(file_name)[0]

created_invoice_attachments_by_file_name = accounting_api.create_invoice_attachment_by_file_name(
    xero_tenant_id,
    invoice_id,
    file_name,
    body,
    include_online,
)
```

---
## SDK conventions

### Querying & Filtering

Describe the support for query options and filtering

```python
# configure api_client for use with xero-python sdk client
api_client = ApiClient(
    Configuration(
        debug=false,
        oauth2_token=OAuth2Token(
            client_id="YOUR_CLIENT_ID", client_secret="YOUR_CLIENT_SECRET"
        ),
    ),
    pool_threads=1,
)

api_client.set_oauth2_token("YOUR_ACCESS_TOKEN")

def accounting_get_invoices():
    api_instance = AccountingApi(api_client)
    xero_tenant_id = 'YOUR_XERO_TENANT_ID'
    if_modified_since = dateutil.parser.parse("2020-02-06T12:17:43.202-08:00")
    where = 'Status=="DRAFT"'
    order = 'InvoiceNumber ASC'
    ids = ["00000000-0000-0000-0000-000000000000"]
    invoice_numbers = ["INV-001", "INV-002"]
    contact_ids = ["00000000-0000-0000-0000-000000000000"]
    statuses = ["DRAFT", "SUBMITTED"]
    include_archived = 'true'
    created_by_my_app = 'false'
    summary_only = 'true'

api_response = api_instance.get_invoices(
    xero_tenant_id,
    if_modified_since,
    where,
    order,
    ids,
    invoice_numbers,
    contact_ids,
    statuses,
    page,
    include_archived,
    created_by_my_app,
    unitdp,
    summary_only
)
```

---
# Integrating React into a Static HTML Template (Hyperspace)

This guide will help you integrate a React application into an existing static HTML template, like the Hyperspace template, without replacing the whole structure.

## 🛠️ Step-by-Step Instructions

### 1. 📁 Organize Your Project Structure

Place your files like this:

```
hyperspace/
├── index.html        ← Your static HTML file
├── assets/           ← Existing assets like CSS/images
├── react-app/
│   ├── src/
│   │   └── App.jsx    ← Your React component
│   ├── public/
│   │   └── index.html ← A minimal HTML file (used by Vite)
│   ├── vite.config.js
│   └── package.json
```

### 2. ⚙️ Initialize the React App

From the `hyperspace/` directory:

```bash
npm create vite@latest react-app --template react
cd react-app
npm install
```

### 3. ✏️ Create a Simple React Component

`react-app/src/App.jsx`:

```jsx
import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '8px' }}>
      <h1 style={{ color: '#222' }}>This is a React-embedded area</h1>
      <p>Dynamically editable 🎉</p>
    </div>
  );
}

export default App;
```

### 4. 🛠️ Mount React into a Specific HTML Element

`react-app/src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 5. ⚙️ (Optional) Customize `vite.config.js`

You can leave the default settings if you're only bundling.

### 6. ⚡ Build the React App

In `react-app/`, run:

```bash
npm run build
```

This will generate a `dist/` folder with a bundled JavaScript file.

### 7. ✅ Add React to Your Static HTML

In your `index.html` (inside the main `hyperspace/` folder), add:

```html
<!-- Where you want to mount React -->
<div id="react-root"></div>

<!-- At the end of the <body> tag -->
<script type="module" src="react-app/dist/assets/index-xxxxx.js"></script>
```

Replace `index-xxxxx.js` with the actual filename generated in the build.

### 8. (Optional) Move Files for Simplicity

You can move the `dist/` folder or its contents into `assets/` to shorten the path.

## ✅ Bonus: Commit to GitHub

```bash
git init
git add .
git commit -m "Added React integration to Hyperspace"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin master
```

Replace `YOUR-USERNAME` and `YOUR-REPO` with your actual GitHub account and repository.

---

Need help preparing the commit with your actual files? I can help generate the exact command or prepare a full starter template.

ask gpt4

## Participating in Xero’s developer community

This SDK is one of a number of SDK’s that the Xero Developer team builds and maintains. We are grateful for all the contributions that the community makes.

Here are a few things you should be aware of as a contributor:
* Xero has adopted the Contributor Covenant [Code of Conduct](https://github.com/XeroAPI/xero-python/blob/master/CODE_OF_CONDUCT.md), we expect all contributors in our community to adhere to it
* If you raise an issue then please make sure to fill out the Github issue template, doing so helps us help you
* You’re welcome to raise PRs. As our SDKs are generated we may use your code in the core SDK build instead of merging your code
* We have a [contribution guide](https://github.com/XeroAPI/xero-python/blob/master/CONTRIBUTING.md) for you to follow when contributing to this SDK
* Curious about how we generate our SDK’s? Have a [read of our process](https://devblog.xero.com/building-sdks-for-the-future-b79ff726dfd6) and have a look at our [OpenAPISpec](https://github.com/XeroAPI/Xero-OpenAPI)
* This software is published under the [MIT License](https://github.com/XeroAPI/xero-python/blob/master/LICENSE)

For questions that aren’t related to SDKs please refer to our [developer support page](https://developer.xero.com/support/).

### Contributing
PRs, issues, and discussion are highly appreciated and encouraged. Note that the majority of this project is generated code based on [Xero's OpenAPI specs](https://github.com/XeroAPI/Xero-OpenAPI) - PR's will be evaluated and pre-merge will be incorporated into the root generation templates.

### Versioning
We do our best to keep OS industry `semver` standards, but we can make mistakes! If something is not accurately reflected in a version's release notes please let the team know.

**Maintained by:** [ellipsis52](https://github.com/ellipsis52) ✨
