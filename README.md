# MI COCINA Mobile App 🌮

A modern React mobile web application for MI COCINA restaurant, featuring authentic Mexican food ordering with bilingual support (English/Spanish).

## 🌟 Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Bilingual Support**: Full Spanish and English translation
- **Interactive Menu**: Browse tacos, burritos, tortas, and platos with ratings and reviews
- **Shopping Cart**: Add/remove items with customization options
- **User Authentication**: Sign up/sign in functionality
- **Order Tracking**: Real-time order status updates
- **AI Chat Assistant**: Interactive chatbot for customer support
- **Loyalty Program**: Points system and rewards tracking
- **Payment Integration**: Zelle QR code support for payments
- **PWA Ready**: Progressive Web App capabilities for mobile installation

## 🚀 Live Demo

Visit the live application: [MI COCINA Mobile App](https://yourusername.github.io/mi-cocina-mobile-app)

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **GitHub Pages** - Deployment platform

## 📱 Restaurant Information

**MI COCINA**
- **Location**: Mason & Devonshire (across from Vons)
- **Hours**: Monday-Friday: 7:00 AM - 12:00 PM
- **Phone**: (818) 938-3955
- **Service**: Pickup Only (No Delivery)
- **Payment**: Cash or Zelle accepted

## 🏗️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mi-cocina-mobile-app.git
   cd mi-cocina-mobile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment to GitHub Pages

1. **Update package.json**
   Replace `yourusername` in the homepage URL with your GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/mi-cocina-mobile-app"
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

## 📂 Project Structure

```
mi-cocina-mobile-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── CustomerMobileApp.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Key Components

### CustomerMobileApp Component
Main application component featuring:
- **Navigation Tabs**: Home, Search, Orders, Profile
- **Menu Management**: Category filtering and item display
- **Cart Functionality**: Add/remove items with quantity management
- **Authentication System**: Login/signup modals
- **Order Processing**: Status tracking and notifications
- **Chat Widget**: AI assistant for customer support

## 🌮 Menu Categories

- **Tacos** ($2.50 - $3.00)
- **Burritos** ($10.00 - $12.00)
- **Tortas** ($10.00 - $12.00)
- **Platos** ($12.00 - $15.00)

Popular items include Taco de Pastor, Plato de Camarón, and Burrito de Asada.

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages
- `npm run eject` - Eject from Create React App

## 📱 Mobile Features

- Touch-optimized interface
- Swipe gestures support
- Mobile-friendly modals and overlays
- Responsive grid and list views
- Mobile keyboard optimization

## 🌍 Internationalization

The app supports both English and Spanish with a language toggle button. All text content is translated including:
- Menu items and descriptions
- UI labels and buttons
- Error messages and notifications
- Business information

## 🔒 Security Features

- Secure authentication flow
- Input validation
- XSS protection
- HTTPS deployment ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions about MI COCINA restaurant:
- Phone: (818) 938-3955
- Location: Mason & Devonshire (across from Vons)

For technical issues with the app:
- Create an issue in this repository
- Email: [your-email@example.com]

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Create React App](https://create-react-app.dev/)

---

**¡Con Sazón y Alegría!** 🎉