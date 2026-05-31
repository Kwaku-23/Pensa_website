# 🚀 PENSA-UMaT Website — Hosting Guide

> **Which platform should you use to put your site live on the internet?**
> This guide breaks it all down based on what YOUR specific project actually does.

---

## 📋 What Your Site Actually Is

Before choosing a host, let's be clear about what you're working with:

| Feature | Technology | Runs On |
|---|---|---|
| All pages (Home, About, Sermons, etc.) | Static HTML + CSS + JS | **Browser only** |
| Contact Form | EmailJS (external API) | **Browser only** |
| Birthday Registration | Google Sheets via Apps Script | **Browser only** |
| Donations / Give | Paystack (external API) | **Browser only** |
| Auth System | localStorage (demo, client-side) | **Browser only** |
| Department Requests | Google Sheets via Apps Script | **Browser only** |

### ✅ Key Takeaway
**Your site is 100% static.** You have NO server-side code — no Node.js, no Python, no database running on your host. Everything talks to external services (EmailJS, Paystack, Google Apps Script) directly from the browser.

This means you need a **static site host**, NOT a server/backend host.

---

## 🏆 The Platforms Compared

### 1. Vercel — ⭐ BEST CHOICE for Your Site

| | Details |
|---|---|
| **What it is** | A platform built for frontend/static sites. Made by the creators of Next.js |
| **Cost** | ✅ **Completely free** for personal/hobby projects |
| **Custom domain** | ✅ Free — connect `pensaumat.org` or any domain you buy |
| **SSL (HTTPS)** | ✅ Free automatic HTTPS |
| **Speed** | ⚡ Extremely fast — uses a global CDN (Content Delivery Network) |
| **Deploy method** | Push to GitHub → site updates automatically |
| **Good for static sites?** | ✅ **Perfect** — this is literally what it's built for |

#### Why Vercel is Best for PENSA-UMaT:
- **Zero configuration needed** — just connect your GitHub repo and it works
- **Instant deploys** — push code to GitHub, site goes live in seconds
- **Preview deployments** — every pull request gets its own preview URL (great for testing changes before going live)
- **Global CDN** — your site loads fast in Ghana, the US, and everywhere else
- **Free forever** for your use case (hobby tier covers everything you need)

#### How to Deploy to Vercel (5 minutes):
```
Step 1: Push your project to GitHub
  - Create a GitHub account (github.com) if you don't have one
  - Create a new repository called "pensa-umat-website"
  - Upload all your files (HTML, CSS, JS, images)

Step 2: Go to vercel.com
  - Sign up with your GitHub account
  - Click "Add New Project"
  - Select your "pensa-umat-website" repository
  - Click "Deploy"
  
Step 3: Done! 🎉
  - Vercel gives you a free URL like: pensa-umat-website.vercel.app
  - Every time you push changes to GitHub, site updates automatically
```

#### Connecting Your Own Domain (e.g., pensaumat.org):
```
1. Buy a domain from Namecheap, GoDaddy, or Google Domains (~$10-15/year)
2. In Vercel dashboard → Settings → Domains → Add your domain
3. Vercel gives you DNS records to add at your domain registrar
4. Wait 5-30 minutes for it to propagate
5. Your site is now live at pensaumat.org with free HTTPS!
```

---

### 2. Render — ❌ NOT the Best Fit

| | Details |
|---|---|
| **What it is** | A cloud platform mainly for **backend services** (servers, databases, APIs) |
| **Cost** | Free tier exists, BUT limited and designed for servers |
| **Custom domain** | ✅ Supported |
| **SSL (HTTPS)** | ✅ Free |
| **Speed** | 🐌 **Cold starts** — free tier servers "sleep" after 15 mins of inactivity, takes 30-60 seconds to wake up |
| **Good for static sites?** | ⚠️ It CAN host static sites, but it's overkill and slower |

#### Why Render is NOT Ideal for You:
- **Render is built for backend apps** — Node.js servers, Python APIs, databases. You don't have any of that.
- **Cold start problem** — On the free tier, your site goes to "sleep" when nobody visits for 15 minutes. The next visitor waits 30-60 seconds for it to wake up. That's a TERRIBLE experience for a church website.
- **More complex setup** — You'd need to configure build commands and environment settings that don't make sense for plain HTML files.
- **Wasted resources** — You'd be using a full server to serve files that don't need a server.

#### When WOULD Render Make Sense?
Render would be the right choice IF you later build:
- A Node.js/Express backend API
- A Python Flask/Django server
- A PostgreSQL database for member management
- Server-side authentication (not localStorage)

**But right now, you don't need any of that.**

---

### 3. Other Options Worth Knowing About

#### Netlify — 🥈 Excellent Alternative to Vercel
| | Details |
|---|---|
| **Cost** | Free |
| **Speed** | ⚡ Fast (global CDN) |
| **Deploy** | GitHub push → auto deploy |
| **Forms** | ✅ Has built-in form handling (could replace EmailJS!) |
| **Best for** | Static sites — very similar to Vercel |

Netlify is basically tied with Vercel for your use case. The only reason Vercel edges ahead is slightly faster deploys and a cleaner dashboard. But you can't go wrong with either.

**Bonus:** Netlify has built-in form submissions — you could potentially drop EmailJS for the contact form and use Netlify Forms instead (100 free submissions/month).

#### GitHub Pages — 🥉 Simplest Option
| | Details |
|---|---|
| **Cost** | Free |
| **Speed** | Good |
| **Deploy** | Push to GitHub → auto deploy |
| **Custom domain** | ✅ Free |
| **Limitations** | No server-side anything, 1GB storage limit, 100GB/month bandwidth |

Your backend guide already mentions GitHub Pages. It works perfectly fine and is the simplest option — your site lives right inside your GitHub repository.

**Limitation:** No HTTPS on custom domains was historically an issue, but GitHub now provides it free.

---

## 📊 Side-by-Side Comparison

| Feature | Vercel ⭐ | Render | Netlify | GitHub Pages |
|---|---|---|---|---|
| **Free tier** | ✅ Generous | ✅ Limited | ✅ Generous | ✅ Generous |
| **Static site hosting** | ⭐ Perfect | ⚠️ Overkill | ⭐ Perfect | ✅ Good |
| **Deploy speed** | ⚡ ~5 seconds | 🐌 30-60s cold start | ⚡ ~10 seconds | ⚡ ~30 seconds |
| **Custom domain** | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| **Free HTTPS/SSL** | ✅ | ✅ | ✅ | ✅ |
| **Global CDN** | ✅ | ❌ (free tier) | ✅ | ✅ |
| **Preview deploys** | ✅ | ❌ | ✅ | ❌ |
| **Complexity** | Easy | Moderate | Easy | Easiest |
| **Works with Paystack** | ✅ | ✅ | ✅ | ✅ |
| **Works with EmailJS** | ✅ | ✅ | ✅ | ✅ |
| **Backend servers** | Serverless only | ✅ Full servers | Serverless only | ❌ None |
| **Best for your site?** | ⭐ YES | ❌ No | ✅ Yes | ✅ Yes |

---

## 🎯 Final Recommendation

### For RIGHT NOW (Static Site):

> **Use Vercel** (or Netlify as a close second).
> 
> Your site is static HTML/CSS/JS. Vercel will host it for free, serve it blazing fast globally, auto-deploy from GitHub, and give you free HTTPS on a custom domain. 
>
> **Do NOT use Render** — it's designed for backend servers you don't have. The cold-start delay alone would make your church website feel broken to first-time visitors.

### For THE FUTURE (If You Add a Backend):

If you ever decide to build a proper backend (e.g., a Node.js API, a real database for member management, server-side auth), THEN consider:
- **Render** for the backend API/database
- **Keep Vercel** for the frontend

This is called a "split architecture" — your frontend stays on Vercel (fast, free), and your backend runs on Render (powerful, flexible).

---

## ⚡ Quick Start: Deploy to Vercel in 5 Minutes

### Prerequisites
- A GitHub account (free at github.com)
- Your PENSA-UMaT website files

### Steps

**1. Create a GitHub Repository**
```
Go to github.com → New Repository → Name it "pensa-umat-website"
Upload all your files:
  ├── index.html
  ├── about.html
  ├── contact.html
  ├── ... (all HTML files)
  ├── css/
  │   ├── styles.css
  │   └── auth.css
  ├── js/
  │   ├── main.js
  │   └── auth.js
  └── images/
      └── (all your images)
```

**2. Connect to Vercel**
```
Go to vercel.com → Sign up with GitHub
Click "Add New Project" → Import your repository
Framework Preset: "Other" (since it's plain HTML)
Click "Deploy"
```

**3. Your Site is Live! 🎉**
```
Vercel gives you: https://pensa-umat-website.vercel.app
Every git push automatically redeploys
```

**4. (Optional) Add Custom Domain**
```
Dashboard → Settings → Domains → Add "pensaumat.org"
Update DNS records at your domain registrar
Wait 5-30 minutes → Done!
```

---

## ⚠️ Important Notes

### About Your API Keys
Your site currently has these keys visible in the HTML source code:
- **Paystack Public Key** (`pk_test_...`) in `give.html`
- **EmailJS Public Key** (`41R4Z94qAY1Xyz4w_`) in `contact.html`

**This is normal and safe for PUBLIC keys.** These are designed to be in frontend code. However:
- ⚠️ **Never put SECRET/PRIVATE keys in your HTML/JS files** — those belong on a server
- 🔒 Before going live, switch Paystack from `pk_test_` to `pk_live_` (your production key)

### About Your Auth System
Your current auth uses `localStorage` — this is fine for a demo but is NOT secure for production. Anyone can fake being logged in. If you need real authentication in the future, consider:
- **Firebase Auth** (free, easy to integrate, works with static sites)
- **A proper backend** (then Render would make sense)

---

*Built for PENSA-UMaT | "Christ in You — The Hope of Glory"*
