# 🚀 Hostinger Deployment via GitHub

This repository is fully configured for seamless, automated deployment to **Hostinger Web Hosting** via GitHub.

---

## 📁 Files Included for Hostinger Deployment

| File / Directory | Description | Location in Hostinger (`public_html`) |
|---|---|---|
| `index.html` | Production HTML entrypoint | Root |
| `assets/` | Compiled JavaScript & CSS bundles | `assets/` |
| `.htaccess` | Apache configuration for React SPA routing (prevents 404 on page refresh) | Root |
| `contact-handler.php` | Backend PHP script for contact form submissions | Root |
| `.github/workflows/deploy-to-hostinger.yml` | GitHub Actions workflow for automatic builds | `.github/workflows/` |

---

## 🛠️ Step 1: Push to GitHub

Your git remote has already been updated to:
`https://github.com/sharathindya/stellar-ai-website.git`

### 1️⃣ Make sure the repository exists on GitHub
If you haven't created the repository on GitHub yet:
1. Go to [https://github.com/new](https://github.com/new).
2. Repository name: `stellar-ai-website`
3. Click **Create repository** (Do NOT add README or .gitignore).

### 2️⃣ Log in & Push from Terminal
Run in your Terminal:

```bash
gh auth login
```
*(Follow the brief on-screen prompt to authenticate GitHub).*

Then push both branches:
```bash
git push -u origin main
git push origin deploy
```

---

## 🌐 Step 2: Deploy to Hostinger via GitHub

1. Log into your **Hostinger hPanel** (`hpanel.hostinger.com`).
2. Go to **Websites** -> Click **Manage** next to your domain.
3. In the left sidebar or search bar, open **Advanced** -> **Git**.
4. Fill in the **Create a New Repository** form:
   - **Repository URL**: `https://github.com/sharathindya/stellar-ai-website.git`
   - **Branch**: `deploy`
   - **Install Directory**: `public_html`
5. Click **Create**.
6. Click **Deploy** to instantly launch your website live!

---

## 🔄 Automatic Deployment (CI/CD)

Whenever you push new changes to the `main` branch, the GitHub Action workflow (`.github/workflows/deploy-to-hostinger.yml`) will automatically:
1. Build your Vite React application (`npm run build`)
2. Push the updated built files directly to the `deploy` branch.
3. Hostinger will instantly refresh your live site!

---
✅ **Status**: Repository linked to Hostinger and GitHub Actions active.

