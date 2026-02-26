# Smart Plus Innovation - Setup Guide

## 🚀 Quick Start (Demo Mode)

The app works **immediately** without any configuration:

```bash
npm install
npm run dev
```

Open http://localhost:5173 - Everything works in demo mode!

## 🔥 Backend Setup (For Production)

> The project now uses a local demo API and is designed to plug into a real backend such as **Express + MongoDB**. Any older cloud-setup steps from previous versions can be ignored.

### Setup Steps

1. **Create your backend project (e.g. Node.js + MongoDB)**
   - Visit https://console.firebase.google.com
   - Click "Add Project"
   - Name: "Smart Plus Innovation"
   - Continue → Enable Analytics (optional) → Create

2. **Enable Authentication**
   - Go to **Authentication** → **Sign-in method**
   - Enable **Email/Password** → Save
   - Enable **Google** → Add OAuth consent → Save

3. **Create Firestore Database**
   - Go to **Firestore Database**
   - Click "Create database"
   - Start in **Production mode**
   - Choose location → Enable

4. **Get Configuration**
   - Go to **Project Settings** (gear icon)
   - Scroll to "Your apps"
   - Click Web icon (`</>`)
   - Register app: "Smart Plus Innovation"
   - Copy config values

5. **Create `.env` File**
   ```env
   VITE_FIREBASE_API_KEY=AIza...
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

6. **Set Firestore Rules**
   - Go to **Firestore** → **Rules**
   - Paste rules from `PRODUCTION_CHECKLIST.md`
   - Publish

7. **Restart Dev Server**
   ```bash
   npm run dev
   ```

## ✅ What Works in Demo Mode?

- ✅ User Registration (email/password)
- ✅ User Login
- ✅ Course Enrollment
- ✅ Blog Writing
- ✅ Testimonials
- ✅ Contact Form
- ✅ Newsletter Subscription
- ✅ Dynamic Stats
- ✅ Google Sign-In (demo local account)
- ❌ Password Reset Emails (shows message)

## 📊 Dynamic Stats

Stats automatically update:
- **Active Students**: Increments when users register
- **Student Rating**: Calculated from testimonials
- **Other stats**: Use default values (can later be updated from your backend)

## 🔐 Password Reset

### Demo Mode
- Shows helpful message
- User must remember password or register new account

### With a real backend
- Sends real email to registered address
- User clicks link to reset password
- Works automatically once your backend is configured

## 🎨 Branding

All instances show: **"Smart Plus Innovation"**
- Navbar logo
- Footer
- Page titles
- Meta tags (can be added)

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variables
5. Deploy

### Environment Variables in Vercel
Add all variables from `.env` file:
- Settings → Environment Variables
- Add each `VITE_*` variable
- Redeploy

## 🐛 Troubleshooting

**Problem**: Google Sign-In button disabled
**Solution**: In demo mode this uses a local test account. For real Google OAuth, connect it in your backend.

**Problem**: Stats showing 0
**Solution**: Normal on first load. They update as users register.

**Problem**: Password reset not working
**Solution**: 
- Demo mode: Shows message (expected)
- With backend email service: verify SMTP / provider configuration

**Problem**: Data lost after refresh
**Solution**: Demo mode uses localStorage. Connect a real database (e.g. MongoDB) for persistent storage.

## 📝 Notes

- Demo mode uses `localStorage` (browser storage)
- A future backend can use a real database (e.g. MongoDB)
- Stats update automatically in demo mode
- Google Sign-In currently uses a local demo account

---

**Ready to go!** Start with demo mode, add your backend when ready. 🚀
