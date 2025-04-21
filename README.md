# 🚀 Xero-Partner2.0

Ce projet contient la plateforme **Xero-Partner2.0**, une solution puissante qui intègre diverses APIs pour le paiement et la gestion de flux financiers. Ce dépôt contient le code backend et frontend, avec une gestion des identifiants API dans un fichier `.env` à maintenir **secret**.

---

## ✅ Checklist de Finalisation – Xero-Partner2.0

### 📘 README – Présentation du Projet

**Xero-Partner2.0** est un projet complet d'intégration API permettant de connecter plusieurs services financiers dans un backend unifié, prêt à être relié à un site web.

### Ce dépôt contient :
- Un backend Node.js avec intégration des API suivantes : **Xero**, **SaferPay**, **OKX**, **Solaris**, **GPT-4**, et **OKTA**.
- Un frontend **React** avec un tableau de bord, des formulaires de paiement et de gestion de sessions.
- Un fichier `.env` (non versionné) où vous devez ajouter vos identifiants API.

### 🔑 Variables d’environnement requises (exemple dans `.env.example`)

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

## ⚙️ Installation rapide

```bash
git clone https://github.com/ellipsis52/Xero-Partner2.0.git
cd Xero-Partner2.0
npm install
cp .env.example .env
# Puis remplir les clés API dans .env
npm run dev
```

---

## 🧩 Intégrations principales
- **Xero** pour la comptabilité
- **SaferPay** pour les paiements sécurisés
- **OKX** pour l'interaction crypto
- **Solaris** pour les services bancaires
- **GPT-4** pour l'intelligence contextuelle
- **Okta** pour l'authentification centralisée

---

## 📂 Structure du projet

```
.
├── .gitignore                # Fichiers/répertoires à ignorer par Git
├── .env                      # Identifiants API sensibles (non versionné)
├── backend/                  # Code backend Node.js
├── netmanagement-frontend/   # Code frontend React
├── .vscode/                  # Configuration Visual Studio Code (facultatif)
├── README.md                 # Ce fichier de documentation
└── package.json              # Dépendances et scripts npm
```

---

## 🚀 Utilisation

### Lancer le frontend (React)
```bash
npm run dev
```

### Lancer le backend (Python)
```bash
cd backend
python app.py
```

Accès frontend : [http://localhost:3000](http://localhost:3000)  
Accès backend : [http://localhost:5000](http://localhost:5000)

---

## 📊 Tests

### Backend
```bash
pytest
```

### Frontend
```bash
npm test
```

---

## ✨ Contribuer

1. Fork ce dépôt
2. Crée une branche : `git checkout -b feature/ta-feature`
3. Fais tes modifications + commits
4. Pousse les changements : `git push origin feature/ta-feature`
5. Ouvre une pull request

---

## 🌐 Licence

Ce projet est sous la licence **MIT**. Voir le fichier [LICENSE](./LICENSE).

---

## 🔍 Voir les fichiers ignorés par `.gitignore`

### Liste des fichiers ignorés localement
```bash
git ls-files --others -i --exclude-standard
```

### Script pour les ajouter automatiquement au README

#### Avec npm
```bash
npm run update:readme:ignored
```

#### Avec Make
```bash
make update-readme-ignored
```

### Exemple de sortie automatique
```txt
📁 Fichiers ignorés disponibles localement
node_modules/
.env
build/
.vscode/
```

> ⚠️ **Attention** : Ne pas forcer l'ajout de `.env` ou de fichiers sensibles !

---

## 🔐 Dossier des Clés Secrètes `.env`

Ce fichier contient les **clés d'accès sensibles** utilisées par le backend. Il **ne doit jamais être versionné** dans GitHub.

### Utilisation dans le code backend

- **Node.js** : `dotenv`
- **Python** : `python-dotenv`

#### Exemple en Node.js
```js
require('dotenv').config();
const xeroClientId = process.env.XERO_CLIENT_ID;
```

#### Exemple en Python
```python
from dotenv import load_dotenv
load_dotenv()
xero_client_id = os.getenv("XERO_CLIENT_ID")
```

---

**Maintenu par :** [ellipsis52](https://github.com/ellipsis52) ✨

