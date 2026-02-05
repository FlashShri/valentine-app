# 💝 Valentine's Day Proposal App 💝

A cute and interactive Valentine's Day proposal web app with adorable cats! 😻

## Features

- 🐱 Cute cat animations
- 💖 Playful "No" button that shrinks with each click
- 💕 Growing "Yes" button that becomes impossible to resist
- 🎉 Beautiful celebration screen when she says yes
- 📱 Fully responsive design
- 🎨 Modern gradient UI with smooth animations

## How It Works

1. The app asks "Will You Be My Valentine?"
2. Two buttons appear: "Yes! 💕" and "No"
3. Every time the "No" button is clicked:
   - The "No" button gets smaller
   - The "Yes" button gets bigger
   - A cheeky message appears
4. Eventually, the "No" button becomes too small to click!
5. When "Yes" is clicked, a celebration screen appears with dancing cats and hearts

## Deployment to Vercel

### Prerequisites
- A [Vercel account](https://vercel.com/signup) (free)
- [Git](https://git-scm.com/) installed on your computer

### Step-by-Step Deployment

#### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project directory:**
   ```bash
   cd valentine-app
   ```

3. **Login to Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `valentine-app` (or any name you prefer)
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

#### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Initialize Git and push to GitHub:**
   ```bash
   cd valentine-app
   git init
   git add .
   git commit -m "Initial commit - Valentine's proposal app"
   ```

2. **Create a new repository on GitHub** and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/valentine-app.git
   git branch -M main
   git push -u origin main
   ```

3. **Go to [Vercel Dashboard](https://vercel.com/new)**

4. **Click "Import Project"**

5. **Import your GitHub repository**

6. **Configure the project:**
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`

7. **Click "Deploy"**

8. **Wait for deployment to complete** - you'll get a live URL!

### Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Customization

You can customize the app by editing:
- `src/App.js` - Main logic and content
- `src/App.css` - Styling and animations
- Change the cat emojis: Look for `😻` and `🐱` in App.js
- Modify button texts in the `getNoButtonText()` function
- Adjust colors in the CSS gradient backgrounds

## Technologies Used

- React 18
- CSS3 with animations
- Responsive design
- Emoji for adorable cats! 🐱

## Tips for Success

- Test on mobile before sharing!
- Make sure the "Yes" button is hard to miss
- The "No" button will become nearly impossible to click after 5-6 attempts
- Share the Vercel URL with your special someone! 💕

---

Made with 💖 for the perfect Valentine's Day proposal!
