// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the clock
    initClock();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize profile image functionality
    initProfileImage();
    
    // Add scroll reveal animations
    initScrollReveal();
    
    // Add click sound effects
    initClickSounds();
});

// Function to initialize and update the clock
function initClock() {
    // Get the elements
    const timeElement = document.getElementById('current-time');
    const timezoneElement = document.getElementById('timezone');
    
    // Update the time immediately
    updateTime();
    
    // Then update every second
    setInterval(updateTime, 1000);
    
    // Function to update the time
    function updateTime() {
        const now = new Date();
        
        // Format the time: HH:MM:SS AM/PM
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        // Convert to 12-hour format
        const formattedHours = hours % 12 || 12;
        
        // Add leading zeros
        const displayHours = formattedHours.toString().padStart(2, '0');
        const displayMinutes = minutes.toString().padStart(2, '0');
        const displaySeconds = seconds.toString().padStart(2, '0');
        
        // Create the time string
        const timeString = `${displayHours}:${displayMinutes}:${displaySeconds} ${ampm}`;
        
        // Get timezone abbreviation
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const timezoneAbbr = getTimezoneAbbreviation(timezone);
        
        // Update the elements with a smooth transition
        if (timeElement.textContent !== timeString) {
            // Apply a fade transition
            timeElement.style.opacity = 0;
            
            setTimeout(() => {
                timeElement.textContent = timeString;
                timeElement.style.opacity = 1;
            }, 200);
        } else {
            timeElement.textContent = timeString;
        }
        
        timezoneElement.textContent = timezoneAbbr;
    }
    
    // Function to get timezone abbreviation
    function getTimezoneAbbreviation(timezone) {
        // This is a simplified version - in a real app, you might want a more comprehensive solution
        const date = new Date();
        const options = { timeZoneName: 'short' };
        const timeString = date.toLocaleString('en-US', options);
        const abbr = timeString.split(' ').pop();
        return abbr || timezone;
    }
}

// Function to initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        // Play click sound
        playClickSound('toggle');
        
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply the new theme
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update the icon
        updateThemeIcon(newTheme);
    });
    
    // Update the theme icon based on current theme
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
}

// Function to initialize profile image functionality
function initProfileImage() {
    const profileImage = document.getElementById('profile-image');
    
    // Check for saved profile image or use default
    const savedImageUrl = localStorage.getItem('profileImage');
    if (savedImageUrl) {
        profileImage.style.backgroundImage = `url(${savedImageUrl})`;
    }
    
    // Handle click on profile image
    profileImage.addEventListener('click', () => {
        // Play click sound
        playClickSound('profile');
        
        // In a real application, you would implement file upload functionality here
        // For this demo, we'll just show an alert
        alert('In a real application, this would open a file picker to change your profile image.');
        
        // Simulated image change (in a real app, this would be the uploaded image URL)
        const demoImages = [
            'https://via.placeholder.com/180/00b3ff/ffffff?text=Profile',
            'https://via.placeholder.com/180/a64dff/ffffff?text=Profile',
            'https://via.placeholder.com/180/ff6b6b/ffffff?text=Profile'
        ];
        
        const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)];
        profileImage.style.backgroundImage = `url(${randomImage})`;
        
        // Save to localStorage
        localStorage.setItem('profileImage', randomImage);
    });
}

// Function to initialize scroll reveal animations
function initScrollReveal() {
    // Get all elements that should animate on scroll
    const elements = document.querySelectorAll('.info-card, .bio-section, .social-item');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the visible class
                entry.target.classList.add('visible');
                // Stop observing the element
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    // Observe each element
    elements.forEach(element => {
        // Add a base class for the initial state
        element.classList.add('reveal');
        // Start observing
        observer.observe(element);
    });
}

// Function to initialize click sound effects
function initClickSounds() {
    // Add click event listeners to interactive elements
    const clickableElements = document.querySelectorAll('.social-item, .info-card, .theme-toggle, .social-link');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            playClickSound('click');
        });
        
        element.addEventListener('mouseenter', () => {
            playClickSound('hover', 0.2);
        });
    });
}

// Function to play click sounds
function playClickSound(type, volume = 0.5) {
    // In a real application, you would implement actual sound effects
    // This is just a placeholder for the concept
    console.log(`Sound effect: ${type} (volume: ${volume})`);
    
    // If you want to implement actual sounds:
    /*
    const sound = new Audio();
    
    switch(type) {
        case 'click':
            sound.src = 'assets/sounds/click.mp3';
            break;
        case 'hover':
            sound.src = 'assets/sounds/hover.mp3';
            break;
        case 'toggle':
            sound.src = 'assets/sounds/toggle.mp3';
            break;
        case 'profile':
            sound.src = 'assets/sounds/profile.mp3';
            break;
        default:
            sound.src = 'assets/sounds/click.mp3';
    }
    
    sound.volume = volume;
    sound.play().catch(e => console.log('Sound play prevented by browser policy'));
    */
}

// Add a class to the body when the page is fully loaded
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a staggered animation to social items
    const socialItems = document.querySelectorAll('.social-item');
    socialItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 100}ms`;
    });
});

