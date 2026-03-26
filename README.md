# CartNova - E-Commerce Website

A fully functional e-commerce website for CartNova clothing brand built with vanilla HTML, CSS, and JavaScript.

## Features

✅ **Complete E-Commerce Functionality**
- Homepage with hero section and featured categories
- Shop page with advanced filtering and sorting
- Shopping cart with localStorage persistence
- Product catalog with 8 products (men's & women's fashion)
- Responsive design for all devices

✅ **Pages Included**
- Home (`index.html`)
- Shop (`shop.html`)
- Cart (`cart.html`)
- About (`about.html`)
- Contact (`contact.html`)

✅ **Key Features**
- Add to cart functionality
- Cart counter in navigation
- Product filtering by gender, category, and price
- Product sorting options
- LocalStorage for cart persistence
- Cookie consent banner
- Mobile-responsive navigation
- Contact form
- Google Maps integration

## How to Use

### Option 1: Direct Opening
1. Download all files from the `/public` folder
2. Open `index.html` in any modern web browser
3. The website will work immediately - no server or build process required!

### Option 2: Local Server (Recommended)
For the best experience, serve the files using a local server:

**Using Python:**
```bash
# Navigate to the public folder
cd public

# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Using Node.js (http-server):**
```bash
# Install http-server globally
npm install -g http-server

# Navigate to the public folder
cd public

# Start the server
http-server

# Then visit: http://localhost:8080
```

**Using VS Code Live Server:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## File Structure

```
public/
├── index.html          # Homepage
├── shop.html          # Shop/Products page
├── cart.html          # Shopping cart page
├── about.html         # About us page
├── contact.html       # Contact page
├── styles.css         # Main stylesheet
├── data.js            # Products data
├── script.js          # Main JavaScript (cart, navigation, etc.)
├── shop.js            # Shop page functionality
├── cart.js            # Cart page functionality
└── README.md          # This file
```

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Font Awesome** - Icons (CDN)
- **Google Maps** - Location embed

## Features Breakdown

### Shopping Cart
- Add products to cart
- Update quantities
- Remove items
- Persistent storage using localStorage
- Real-time cart counter
- Order summary with totals

### Product Filtering
- Filter by gender (Men/Women/All)
- Filter by category
- Filter by price range
- Sort by: Featured, Price (Low to High), Price (High to Low), Name

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktop
- Collapsible mobile menu
- Touch-friendly interface

## Customization

### Adding Products
Edit `data.js` and add new product objects:
```javascript
{
    id: 'unique-id',
    name: 'Product Name',
    price: 99,
    image: 'https://image-url.com/image.jpg',
    category: 'Category Name',
    gender: 'men' or 'women',
    description: 'Product description',
    sizes: ['S', 'M', 'L', 'XL']
}
```

### Changing Colors
Edit the color values in `styles.css`:
- Primary color: `#111827`
- Background: `#f9fafb`
- Text: `#111827`

### Updating Content
All text content can be edited directly in the HTML files.

## Notes

- Cart data is stored in localStorage and persists between sessions
- Cookie consent preference is also stored in localStorage
- All images are loaded from Unsplash CDN
- No backend required - everything runs client-side

## Support

For questions or issues, please contact: support@cartnova.com

## License

© 2026 CartNova. All rights reserved.

---

**Enjoy your CartNova E-Commerce Website! 🛍️**
