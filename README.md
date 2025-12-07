# Scanner CV - Application Frontend & Backend

Cette application permet d'analyser des CV avec une interface moderne et un backend robuste.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn
- MongoDB (pour le backend)

### Installation et Démarrage

#### 1. Backend (NestJS)

```bash
cd scanner-cv
npm install
npm run start:dev
```

Le backend sera accessible sur `http://localhost:3000`

#### 2. Frontend (Angular)

```bash
cd frontend
npm install
npm start
```

Le frontend sera accessible sur `http://localhost:4200`

## 📁 Structure du Projet

```
scannerCV/
├── frontend/                 # Application Angular
│   ├── src/app/
│   │   ├── components/      # Composants UI
│   │   │   ├── login/       # Page de connexion
│   │   │   ├── signup/      # Page d'inscription
│   │   │   └── dashboard/   # Tableau de bord
│   │   ├── services/        # Services API
│   │   └── guards/          # Guards d'authentification
│   └── ...
└── scanner-cv/              # Backend NestJS
    ├── src/
    │   ├── auth/           # Authentification JWT
    │   ├── users/          # Gestion des utilisateurs
    │   └── email/          # Service d'email
    └── ...
```

## 🔐 Authentification

L'application utilise JWT pour l'authentification :

- **Login** : `POST /auth/login`
- **Register** : `POST /auth/register`
- **Profile** : `GET /auth/profile` (protégé)

## 🎨 Interface Utilisateur

### Pages Disponibles

1. **Login** (`/login`)
   - Connexion avec email/mot de passe
   - Validation en temps réel
   - Gestion des erreurs

2. **Signup** (`/signup`)
   - Inscription avec validation
   - Confirmation de mot de passe
   - Redirection automatique après inscription

3. **Dashboard** (`/dashboard`)
   - Interface moderne avec sidebar
   - Affichage des activités CV
   - Analyse des mots-clés
   - Recommandations d'emploi

## 🔧 Configuration

### Variables d'Environnement Backend

Créez un fichier `.env` dans le dossier `scanner-cv/` :

```env
MONGODB_URI=mongodb://localhost:27017/scanner-cv
JWT_SECRET=votre_secret_jwt
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123
```

### CORS

Le backend est configuré pour accepter les requêtes depuis `http://localhost:4200` (Angular dev server).

## 🛠️ Technologies Utilisées

### Frontend
- **Angular 17** - Framework principal
- **Bootstrap 5** - Framework CSS
- **RxJS** - Gestion des observables
- **Angular Router** - Navigation

### Backend
- **NestJS** - Framework Node.js
- **MongoDB** - Base de données
- **Mongoose** - ODM
- **JWT** - Authentification
- **bcrypt** - Hashage des mots de passe
- **Swagger** - Documentation API

## 📱 Fonctionnalités

### Authentification
- ✅ Connexion/Inscription sécurisée
- ✅ Protection des routes
- ✅ Gestion des tokens JWT
- ✅ Validation des formulaires

### Interface
- ✅ Design moderne et responsive
- ✅ Animations fluides
- ✅ Gestion des états de chargement
- ✅ Messages d'erreur/succès

### Dashboard
- ✅ Affichage des données utilisateur
- ✅ Timeline des activités
- ✅ Analyse des mots-clés
- ✅ Recommandations d'emploi

## 🚀 Déploiement

### Backend
```bash
cd scanner-cv
npm run build
npm run start:prod
```

### Frontend
```bash
cd frontend
npm run build
```

## 📝 API Documentation

L'API est documentée avec Swagger et accessible sur :
`http://localhost:3000/api-docs`

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. 