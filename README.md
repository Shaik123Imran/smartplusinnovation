# Smart Plus Innovation

A modern, production-ready educational platform built with React, Vite, and Tailwind CSS.

![Smart Plus Innovation](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)

## 🚀 Features

- **Multi-page Application** - Home, Programs, About, Pricing, Blog, FAQ, Contact, Dashboard
- **User Authentication** - Register, Login, Password Reset (demo/local mode, ready for real backend)
- **Course Enrollment** - Browse and enroll in 10+ tech programs
- **Blog System** - Read and write blog posts
- **Responsive Design** - Mobile-first, works on all devices
- **Dynamic Data** - Programs, testimonials, FAQs all dynamically rendered

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router DOM
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Backend:** Local demo API (ready for Express + MongoDB)
- **Email:** EmailJS

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Shaik123Imran/Smart-plus-innovation.git
cd Smart-plus-innovation
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## 🔧 Configuration (Optional)

For email features and backend services, create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Payment (Razorpay serverless)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# MongoDB (Express backend)
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=your_db_name

# Cloudinary (video uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

> **Note:** The app works fully in **demo mode** with localStorage and a small Express API, and is ready to plug into your real MongoDB backend when you add the credentials.

## 📁 Project Structure

```
src/
├── components/
│   ├── common/        # Reusable UI components
│   ├── home/          # Home page sections
│   ├── layout/        # Layout components
│   └── programs/      # Program-related components
├── context/           # React Context providers
├── data/              # Static data files
├── pages/             # Page components
├── services/          # API & EmailJS services
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Color Theme

| Color | Hex Code |
|-------|----------|
| Primary | `#2563EB` |
| Secondary | `#7C3AED` |
| Accent | `#06B6D4` |
| Background | `#F8FAFC` |
| Text | `#0F172A` |

## 📄 Pages

- **Home** - Landing page with hero, stats, featured programs, testimonials
- **Programs** - Browse all courses with search & filter
- **Program Detail** - Detailed program info with enrollment
- **About** - Company story, team, values
- **Pricing** - Subscription plans
- **Blog** - Articles with categories
- **FAQ** - Frequently asked questions
- **Contact** - Contact form
- **Login/Register** - User authentication
- **Dashboard** - User profile and enrolled courses

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Smart Plus Innovation Team
