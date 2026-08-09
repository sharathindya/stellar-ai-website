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

## 🛠️ Step 1: Create & Push to GitHub

### Option A: Using GitHub Web Interface (Recommended)
1. Go to [GitHub - New Repository](https://github.com/new).
2. Set Repository Name (e.g. `stellar-ai-website`).
3. Select **Public** or **Private** and click **Create repository** (Do not check "Add README" or ".gitignore" as we already have them).
4. Run the following commands in your terminal inside this project folder:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/stellar-ai-website.git
git push -u origin main
git push origin deploy
```

*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username).*

### Option B: Using GitHub CLI (`gh`)
Run in your terminal:
```bash
gh auth login
gh repo create stellar-ai-website --public --source=. --remote=origin --push
git push origin deploy
```

---

## 🌐 Step 2: Deploy to Hostinger via GitHub

1. Log into your **Hostinger hPanel** (`hpanel.hostinger.com`).
2. Go to **Websites** -> Click **Manage** next to your domain.
3. In the left sidebar or search bar, open **Advanced** -> **Git**.
4. Fill in the **Create a New Repository** form:
   - **Repository URL**: `https://github.com/YOUR_GITHUB_USERNAME/stellar-ai-website.git`
   - **Branch**: `deploy`
   - **Install Directory**: `public_html` (leave default or specify target folder)
5. Click **Create**.
6. Click **Deploy** to instantly launch your website live!

---

## 🔄 Automatic Deployment (CI/CD)

Whenever you push new changes to the `main` branch, the GitHub Action workflow (`.github/workflows/deploy-to-hostinger.yml`) will automatically:
1. Build your Vite React application (`npm run build`)
2. Push the updated built files directly to the `deploy` branch.
3. Hostinger (if Webhook or Auto Deploy is enabled in hPanel) will instantly refresh your live site!

---

## 📧 Contact Form Configuration on Hostinger

`contact-handler.php` uses PHP `mail()` by default or custom SMTP environment variables.
To configure Hostinger SMTP (Optional):
- `SMTP_HOST`: `smtp.hostinger.com`
- `SMTP_PORT`: `465`
- `SMTP_USERNAME`: `your-email@yourdomain.com`
- `SMTP_PASSWORD`: `your-email-password`
