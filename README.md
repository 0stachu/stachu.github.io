# Personal BIO Website

A sleek, modern personal bio website with a dark mode aesthetic, smooth animations, and responsive design. This website includes location, real-time clock for your timezone, age display, and social media links including Discord and fakecrime.bio.

## Features

- **Dark/Light Mode Toggle**: Switch between dark and light themes with a single click
- **Real-time Clock**: Displays the current time in your local timezone
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and micro-interactions
- **Social Links**: Easily connect your social media profiles
- **Customizable Profile Image**: Change your profile picture with a click
- **Modern UI**: Clean, minimalist design with glassmorphism effects

## How to Use

### Basic Setup

1. Download all files and folders
2. Open `index.html` in a text editor
3. Replace "Your Name" with your actual name (lines 19 and 100)
4. Update "Your Location" with your location (line 47)
5. Update the age number if needed (line 55)
6. Edit the bio text to describe yourself (lines 62-64)
7. Update social media links with your actual profile URLs (lines 71-94)

### Customizing Profile Image

The website comes with a placeholder profile image. To change it:

1. Click on the profile image circle on the website
2. In a real implementation, this would open a file picker
3. For manual customization, edit line 35 in `assets/css/style.css`:
   ```css
   background-image: url('path/to/your/image.jpg');
   ```

### Customizing Social Links

1. Open `index.html` in a text editor
2. Find the social links section (around line 70)
3. Update the `href` attributes with your actual profile URLs
4. You can add or remove social links as needed
5. To change icons, refer to [Font Awesome](https://fontawesome.com/icons) for available icons

### Customizing Colors

1. Open `assets/css/style.css` in a text editor
2. Find the `:root` section at the top
3. Modify the color variables to match your preferred color scheme:
   ```css
   --accent-primary: #00b3ff; /* Change to your preferred accent color */
   --accent-secondary: #a64dff; /* Change to your preferred secondary accent */
   ```

## Technical Details

### File Structure

```
personal-bio-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── animations.css  # Animation styles
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/
│       └── favicon.png     # Website favicon
└── README.md               # This documentation
```

### Technologies Used

- HTML5
- CSS3 (with variables and modern features)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts (Montserrat, Inter, Space Mono)

### Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

### Adding New Sections

To add a new section to the website:

1. Add the HTML structure in `index.html`:
   ```html
   <section class="new-section">
       <h2 class="section-title">Section Title</h2>
       <div class="section-content">
           <!-- Your content here -->
       </div>
   </section>
   ```

2. Add corresponding styles in `assets/css/style.css`:
   ```css
   .new-section {
       background: var(--card-bg);
       border-radius: var(--radius-md);
       padding: var(--spacing-lg);
       margin: var(--spacing-lg) 0;
   }
   
   .section-content {
       /* Your styles here */
   }
   ```

### Modifying Animations

To adjust animations:

1. Open `assets/css/animations.css`
2. Modify the timing, delay, or effect of animations:
   ```css
   .element {
       animation-duration: 800ms; /* Change duration */
       animation-delay: 300ms; /* Change delay */
   }
   ```

## Credits

- Fonts: Google Fonts (Montserrat, Inter, Space Mono)
- Icons: Font Awesome
- Design inspiration: Modern UI trends 2025

## License

This project is available for personal and commercial use.

---

Enjoy your new personal bio website! If you have any questions or need assistance, please refer to this documentation or contact the developer.

