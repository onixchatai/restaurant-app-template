import React, { useState, useEffect } from 'react';
import { 
  Home, Search, ShoppingBag, User, MessageCircle, Clock, MapPin, 
  Star, Plus, Minus, ChevronRight, Heart, Tag, Bell, CreditCard,
  Check, X, Send, Bot, Loader, Filter, Grid, List, Sparkles, Settings,
  Lock, Mail, Eye, EyeOff, Shield, LogOut, UserPlus, CheckCircle
} from 'lucide-react';

const CustomerMobileApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "¡Hola! Welcome to MI COCINA! I can help you with our menu, hours, or take your order. What can I get started for you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [language, setLanguage] = useState('en');
  const [showZelleQR, setShowZelleQR] = useState(false);
  const [orderReady, setOrderReady] = useState(false);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  
  const [savedCards, setSavedCards] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    zip: ''
  });

  const translations = {
    en: {
      home: 'restaurant-app-template',
      search: 'Search',
      orders: 'Orders',
      profile: 'Profile',
      cart: 'Cart',
      menu: 'Menu',
      yourCart: 'Your Cart',
      subtotal: 'Subtotal',
      tax: 'Tax',
      total: 'Total',
      placeOrder: 'Place Pickup Order',
      signIn: 'Sign In to Order',
      pickupOnly: 'Pickup Only - No Delivery',
      paymentInfo: 'Payment: Cash or Zelle at pickup',
      addToCart: 'Add',
      specialInstructions: 'Customize Your Order',
      onion: 'Onion',
      cilantro: 'Cilantro',
      hotSauce: 'Hot Sauce',
      orderReady: 'Your order is ready for pickup!',
      callUs: 'Call us at'
    },
    es: {
      home: 'Inicio',
      search: 'Buscar',
      orders: 'Órdenes',
      profile: 'Perfil',
      cart: 'Carrito',
      menu: 'Menú',
      yourCart: 'Tu Carrito',
      subtotal: 'Subtotal',
      tax: 'Impuesto',
      total: 'Total',
      placeOrder: 'Ordenar para Recoger',
      signIn: 'Iniciar Sesión para Ordenar',
      pickupOnly: 'Solo para Recoger - No Entrega',
      paymentInfo: 'Pago: Efectivo o Zelle al recoger',
      addToCart: 'Agregar',
      specialInstructions: 'Personaliza Tu Orden',
      onion: 'Cebolla',
      cilantro: 'Cilantro',
      hotSauce: 'Salsa Picante',
      orderReady: '¡Tu orden está lista para recoger!',
      callUs: 'Llámanos al'
    }
  };

  const t = (key) => translations[language][key] || key;

  const businessInfo = {
    name: "MI COCINA",
    slogan: language === 'es' ? "Con Sazón y Alegría" : "With Flavor and Joy",
    rating: 4.9,
    reviews: 287,
    address: "Mason & Devonshire (across from Vons)",
    hours: language === 'es' ? "Lun-Vie: 7:00 AM - 12:00 PM" : "Mon-Fri: 7:00 AM - 12:00 PM",
    phone: "(818) 938-3955",
    delivery: language === 'es' ? "Solo para recoger - NO entrega" : "Pickup only - NO delivery available"
  };

  const menuItems = [
    { id: 1, name: 'Taco de Asada', category: 'Tacos', price: 2.50, image: '🌮', rating: 4.9, reviews: 145, time: '5-10 min', popular: true, description: 'Grilled beef with onions and cilantro' },
    { id: 2, name: 'Taco de Pastor', category: 'Tacos', price: 2.50, image: '🌮', rating: 4.9, reviews: 178, time: '5-10 min', popular: true, description: 'Marinated pork with pineapple, onions and cilantro' },
    { id: 3, name: 'Taco de Chorizo', category: 'Tacos', price: 2.50, image: '🌮', rating: 4.8, reviews: 112, time: '5-10 min', description: 'Mexican sausage with onions and cilantro' },
    { id: 4, name: 'Taco de Pollo', category: 'Tacos', price: 2.50, image: '🌮', rating: 4.7, reviews: 89, time: '5-10 min', description: 'Seasoned chicken with onions and cilantro' },
    { id: 5, name: 'Taco de Ranchera', category: 'Tacos', price: 3.00, image: '🌮', rating: 4.9, reviews: 134, time: '5-10 min', popular: true, description: 'Ranch-style beef with special sauce' },
    { id: 6, name: 'Taco de Camarón', category: 'Tacos', price: 3.00, image: '🦐', rating: 4.8, reviews: 156, time: '5-10 min', description: 'Grilled shrimp with chipotle mayo' },
    { id: 7, name: 'Taco de Pescado', category: 'Tacos', price: 3.00, image: '🐟', rating: 4.8, reviews: 123, time: '5-10 min', description: 'Grilled fish with cabbage and cream' },
    { id: 8, name: 'Taco de Cecina', category: 'Tacos', price: 3.00, image: '🌮', rating: 4.7, reviews: 98, time: '5-10 min', description: 'Salted beef with onions and cilantro' },
    { id: 9, name: 'Burrito de Asada', category: 'Burritos', price: 10.00, image: '🌯', rating: 4.9, reviews: 167, time: '10-15 min', popular: true, description: 'Large flour tortilla with grilled beef, beans, rice, and salsa' },
    { id: 10, name: 'Burrito de Pastor', category: 'Burritos', price: 10.00, image: '🌯', rating: 4.8, reviews: 145, time: '10-15 min', description: 'Large flour tortilla with marinated pork, beans, rice, and salsa' },
    { id: 11, name: 'Burrito de Chorizo', category: 'Burritos', price: 10.00, image: '🌯', rating: 4.8, reviews: 93, time: '10-15 min', description: 'Large flour tortilla with Mexican sausage, beans, rice, and salsa' },
    { id: 12, name: 'Burrito de Pollo', category: 'Burritos', price: 10.00, image: '🌯', rating: 4.7, reviews: 81, time: '10-15 min', description: 'Large flour tortilla with chicken, beans, rice, and salsa' },
    { id: 13, name: 'Burrito de Ranchera', category: 'Burritos', price: 12.00, image: '🌯', rating: 4.9, reviews: 112, time: '10-15 min', description: 'Large flour tortilla with ranch-style beef, beans, rice, and salsa' },
    { id: 14, name: 'Burrito de Camarón', category: 'Burritos', price: 12.00, image: '🌯', rating: 4.8, reviews: 134, time: '10-15 min', description: 'Large flour tortilla with shrimp, beans, rice, and chipotle sauce' },
    { id: 15, name: 'Burrito de Pescado', category: 'Burritos', price: 12.00, image: '🌯', rating: 4.8, reviews: 98, time: '10-15 min', description: 'Large flour tortilla with fish, beans, rice, and cream sauce' },
    { id: 16, name: 'Burrito de Cecina', category: 'Burritos', price: 12.00, image: '🌯', rating: 4.7, reviews: 76, time: '10-15 min', description: 'Large flour tortilla with salted beef, beans, rice, and salsa' },
    { id: 17, name: 'Torta de Asada', category: 'Tortas', price: 10.00, image: '🥖', rating: 4.9, reviews: 134, time: '10-15 min', popular: true, description: 'Mexican sandwich with grilled beef, beans, lettuce, tomato, and avocado' },
    { id: 18, name: 'Torta de Pastor', category: 'Tortas', price: 10.00, image: '🥖', rating: 4.8, reviews: 123, time: '10-15 min', description: 'Mexican sandwich with marinated pork, beans, lettuce, tomato, and avocado' },
    { id: 19, name: 'Torta de Chorizo', category: 'Tortas', price: 10.00, image: '🥖', rating: 4.8, reviews: 78, time: '10-15 min', description: 'Mexican sandwich with Mexican sausage, beans, lettuce, tomato, and avocado' },
    { id: 20, name: 'Torta de Pollo', category: 'Tortas', price: 10.00, image: '🥖', rating: 4.7, reviews: 72, time: '10-15 min', description: 'Mexican sandwich with chicken, beans, lettuce, tomato, and avocado' },
    { id: 21, name: 'Torta de Ranchera', category: 'Tortas', price: 12.00, image: '🥖', rating: 4.9, reviews: 98, time: '10-15 min', description: 'Mexican sandwich with ranch-style beef, beans, lettuce, tomato, and avocado' },
    { id: 22, name: 'Torta de Camarón', category: 'Tortas', price: 12.00, image: '🥖', rating: 4.8, reviews: 112, time: '10-15 min', description: 'Mexican sandwich with shrimp, beans, lettuce, tomato, and chipotle mayo' },
    { id: 23, name: 'Torta de Pescado', category: 'Tortas', price: 12.00, image: '🥖', rating: 4.8, reviews: 89, time: '10-15 min', description: 'Mexican sandwich with fish, beans, lettuce, tomato, and cream' },
    { id: 24, name: 'Torta de Cecina', category: 'Tortas', price: 12.00, image: '🥖', rating: 4.7, reviews: 67, time: '10-15 min', description: 'Mexican sandwich with salted beef, beans, lettuce, tomato, and avocado' },
    { id: 25, name: 'Plato de Asada', category: 'Platos', price: 12.00, image: '🍽️', rating: 4.9, reviews: 156, time: '15-20 min', popular: true, description: 'Grilled beef plate with rice, beans, salad, and tortillas' },
    { id: 26, name: 'Plato de Pastor', category: 'Platos', price: 12.00, image: '🍽️', rating: 4.8, reviews: 134, time: '15-20 min', description: 'Marinated pork plate with rice, beans, salad, and tortillas' },
    { id: 27, name: 'Plato de Chorizo', category: 'Platos', price: 12.00, image: '🍽️', rating: 4.8, reviews: 98, time: '15-20 min', description: 'Mexican sausage plate with rice, beans, salad, and tortillas' },
    { id: 28, name: 'Plato de Pollo', category: 'Platos', price: 12.00, image: '🍽️', rating: 4.7, reviews: 87, time: '15-20 min', description: 'Chicken plate with rice, beans, salad, and tortillas' },
    { id: 29, name: 'Plato de Ranchera', category: 'Platos', price: 15.00, image: '🍽️', rating: 4.9, reviews: 123, time: '15-20 min', description: 'Ranch-style beef plate with rice, beans, salad, and tortillas' },
    { id: 30, name: 'Plato de Camarón', category: 'Platos', price: 15.00, image: '🦐', rating: 4.9, reviews: 145, time: '15-20 min', popular: true, description: 'Grilled shrimp plate with rice, beans, salad, and tortillas' },
    { id: 31, name: 'Plato de Pescado', category: 'Platos', price: 15.00, image: '🐟', rating: 4.8, reviews: 112, time: '15-20 min', description: 'Grilled fish plate with rice, beans, salad, and tortillas' },
    { id: 32, name: 'Plato de Cecina', category: 'Platos', price: 15.00, image: '🍽️', rating: 4.7, reviews: 89, time: '15-20 min', description: 'Salted beef plate with rice, beans, salad, and tortillas' }
  ];

  const categories = ['all', 'Tacos', 'Burritos', 'Tortas', 'Platos'];

  const promos = [
    { id: 1, title: "Early Bird Special", desc: "Order before 9 AM", time: "Mon-Fri 7-9 AM", color: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
    { id: 2, title: "Combo Deal", desc: "Any 3 Tacos + Drink", price: "$8.50", color: "bg-gradient-to-r from-green-400 to-green-500" },
    { id: 3, title: "Con Sazón y Alegría", desc: "Authentic Mexican Flavors Daily", time: "All Day", color: "bg-gradient-to-r from-red-500 to-red-600" }
  ];

  const addToCart = (item) => {
    const customizations = {
      onion: true,
      cilantro: true,
      hotSauce: false
    };
    
    const existingItem = cartItems.find(cartItem => 
      cartItem.id === item.id && 
      JSON.stringify(cartItem.customizations) === JSON.stringify(customizations)
    );
    
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id && JSON.stringify(cartItem.customizations) === JSON.stringify(customizations)
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1, customizations }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleFavorite = (itemId) => {
    setFavorites(favorites.includes(itemId)
      ? favorites.filter(id => id !== itemId)
      : [...favorites, itemId]
    );
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = { id: messages.length + 1, type: 'user', text: inputMessage };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      setTimeout(() => {
        const responses = [
          "Our most popular items are the Taco de Pastor and Plato de Camarón! Tacos start at just $2.50. Would you like to add some to your order?",
          "We're open Monday to Friday from 7:00 AM to 12:00 PM. Perfect for breakfast and lunch! Remember, we're pickup only.",
          "All our food is made con sazón y alegría! We have Asada, Pastor, Chorizo, Pollo, and our premium options: Ranchera, Camarón, Pescado, and Cecina.",
          "For payment, we accept Cash or Zelle with our QR code. No online payments yet, but we're working on it!"
        ];
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: responses[Math.floor(Math.random() * responses.length)]
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const placeOrder = () => {
    setShowCart(false);
    setOrderStatus('preparing');
    setCartItems([]);
    
    setTimeout(() => setOrderStatus('cooking'), 3000);
    setTimeout(() => setOrderStatus('ready'), 6000);
    setTimeout(() => {
      setOrderStatus('ready');
      setOrderReady(true);
      setTimeout(() => setOrderReady(false), 10000);
    }, 8000);
  };

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 min-h-screen relative">
      {/* Header with enhanced styling */}
      <header className="bg-white shadow-lg sticky top-0 z-40 border-b border-gray-100">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{businessInfo.name}</h1>
              <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{businessInfo.address}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{businessInfo.hours}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium"
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        
        {activeTab === 'home' && (
          <div className="px-6 pb-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
              />
            </div>
          </div>
        )}
      </header>

      <main className="pb-20">
        {activeTab === 'home' && (
          <div className="bg-gray-50">
            {/* Enhanced Promo Cards */}
            <div className="px-6 py-6">
              <div className="overflow-x-auto -mx-6 px-6">
                <div className="flex space-x-4">
                  {promos.map(promo => (
                    <div key={promo.id} className={`${promo.color} rounded-2xl p-6 text-white min-w-[280px] shadow-lg`}>
                      <h3 className="font-bold text-xl mb-2">{promo.title}</h3>
                      <p className="text-sm opacity-90 mb-1">{promo.desc}</p>
                      {promo.time && <p className="text-sm mt-3 font-medium bg-white/20 rounded-full px-3 py-1 inline-block">{promo.time}</p>}
                      {promo.price && <p className="text-3xl font-bold mt-3">{promo.price}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Menu Section */}
            <div className="px-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">{t('menu')}</h2>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowAddCard(true)}
                    className="px-4 py-2 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors font-medium"
                  >
                    {t('specialInstructions')}
                  </button>
                  <button
                    onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              {/* Enhanced Category Buttons */}
              <div className="flex space-x-3 overflow-x-auto -mx-6 px-6 pb-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all shadow-sm ${
                      activeCategory === category
                        ? 'bg-red-500 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:shadow-md'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Menu Items */}
            <div className={`px-6 ${viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}`}>
              {filteredItems.map(item => {
                const cartItem = cartItems.find(ci => ci.id === item.id);
                const quantity = cartItem ? cartItem.quantity : 0;
                
                return (
                  <div key={item.id} className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    <div className={`${viewMode === 'list' ? 'flex items-center p-4 flex-1' : 'p-5'}`}>
                      <div className={`${viewMode === 'list' ? 'flex items-center flex-1' : ''}`}>
                        <div className={`text-5xl mb-3 ${viewMode === 'list' ? 'mr-4 mb-0 text-4xl' : 'text-center'}`}>
                          {item.image}
                        </div>
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-gray-900 flex-1 text-base leading-tight">{item.name}</h3>
                            {item.popular && (
                              <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full flex items-center font-medium">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center mb-2 text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 font-medium">{item.rating}</span>
                            <span className="mx-2">·</span>
                            <span>{item.reviews} reviews</span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-xl text-gray-900">${item.price}</span>
                            <button
                              onClick={() => toggleFavorite(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-current text-red-500' : ''}`} />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.time}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`flex items-center justify-center mt-4 ${viewMode === 'list' ? 'ml-4 mt-0' : ''}`}>
                        {quantity > 0 ? (
                          <div className="flex items-center bg-red-500 rounded-full shadow-lg">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-3 text-white hover:bg-red-600 rounded-l-full transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 text-white font-bold text-lg">{quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="p-3 text-white hover:bg-red-600 rounded-r-full transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="flex items-center px-5 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            {t('addToCart')}
                          </button>
                        )}
                      
