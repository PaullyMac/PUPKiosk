# Changelog

## [Initial Release] - 2025-04-25

### Added
- Basic HTML structure with header and map container
- Interactive image map functionality using JavaScript
- Information modal popup on hover over map locations
- Data for 50 PUP campus locations with titles, coordinates, and descriptions
- Dynamic map area generation from location data

### Style Features
- PUP themed color scheme with maroon (#7a0c0c) accents
- Responsive map container with border and shadow effects
- Campus oval background image with semi-transparent overlay
- Styled modal popups with location title, image, and description
- Modal animation effects

### JavaScript Features
- Dynamic generation of map areas from location data array
- Smart modal positioning to avoid viewport boundaries
- Mouse hover events for showing/hiding location information
- Image map resizing for responsive display

## [Updated Map Coordinates & Images] - 2025-04-25

### script.js
- Replaced all `coords` and `shape` values in the `locations` array with polygon data from `map.txt`.
- Updated each `image` path to match the renamed files in the `/images` folder.

## [Smooth Modal Movement] - 2025-04-25

### JavaScript Features
- Enhanced modal behavior to follow cursor smoothly when hovering over map areas
- Added mousemove event listener to track cursor position in real-time
- Created updateModalPosition function for continuous position updates

### Style Features
- Added smooth CSS transitions for modal movement
- Set pointer-events to none to prevent modal from interfering with mouse interactions

## [Enhanced Modal Animation] - 2025-04-25

### JavaScript Features
- Implemented advanced cursor following using requestAnimationFrame for smoother animation
- Added velocity-based positioning for more natural movement
- Created dynamic offset calculation that responds to cursor speed and direction
- Implemented easing function for smooth, organic cursor following

### Style Features
- Removed fixed CSS transitions in favor of JavaScript-based animation
- Added will-change property for better performance with hardware acceleration
- Optimized rendering and animation cycles for smoother visual experience

## [Updated Location Descriptions] - 2025-04-25

### JavaScript Features
- Enhanced all campus location descriptions with more detailed and specific information
- Added contextual details about building functions and locations (e.g., NDC Compound, M.H. Del Pilar Campus)
- Improved clarity of descriptions to provide better user understanding of each location

## [Single-Screen Layout Optimization] - 2025-04-25

### HTML Features
- Added viewport-container to manage full-screen layout
- Restructured HTML for better space utilization

### Style Features
- Reduced top banner height from 132px to 70px for more compact display
- Changed banner position from fixed to relative for better space usage
- Added overflow:hidden to body to prevent scrollbars
- Implemented responsive sizing using viewport units and flex layout
- Optimized map container to fill available screen space
- Added height-based media queries for shorter screens
- Fine-tuned spacing throughout to maximize map visibility
- Reduced font sizes and padding for more efficient use of space

## [Map Display Clean-up] - 2025-04-25

### Style Features
- Removed `.map-section::before` pseudo-element that was causing rendering artifacts
- Eliminated unnecessary gradient bar at the top of the map section
- Enhanced direct image styling with cleaner border and shadow effects
- Optimized whitespace around map image for better visual appearance
- Maintained PUP maroon (#7a0c0c) color theme while simplifying styling
- Improved responsiveness by focusing on direct element styling rather than nested containers

## [Enhanced Modal Design] - 2025-04-25

### Style Features
- Redesigned modal with more sophisticated styling
- Changed border-radius to 16px for consistency with map design
- Replaced left border with full-width gradient top bar
- Enhanced drop shadow with PUP maroon tint for better depth perception
- Improved typography with better letter spacing and line height
- Increased padding for better content breathing room
- Added subtle box shadow outline for definition
- Applied hardware acceleration with transform: translateZ(0)
- Improved responsive behavior at different breakpoints
- Enhanced visual hierarchy with refined spacing

## [Code Cleanup] - 2025-04-25

### HTML Features
- Removed redundant elements and improved markup organization

### Style Features
- Removed unused CSS classes (.header and .close)
- Eliminated non-functional CSS pseudo-element (img::after)
- Cleaned up commented-out code and instructions
- Removed redundant transition properties

### JavaScript Features
- Improved organization of location data with clearer naming
- Removed unnecessary code duplication

## [Area Highlighting Feature] - 2025-04-26

### HTML Features
- Added canvas overlay element for area highlighting
- Created map-container structure to properly position the canvas

### Style Features
- Added CSS for canvas overlay positioning
- Ensured highlighted areas maintain proper positioning
- Used PUP maroon theme (#7a0c0c) with appropriate opacity levels
- Implemented pointer-events: none to ensure clickthrough functionality

### JavaScript Features
- Added canvas initialization and scaling functions
- Implemented polygon drawing based on area coordinates
- Added functions to highlight areas on hover
- Enhanced event handlers to synchronize highlighting with modal display
- Added support for window resizing to maintain highlight positioning

## [Code Optimization] - 2025-04-26

### Style Features
- Removed duplicate animation declaration for `#pup-map-img` element to fix CSS conflict
- Streamlined CSS animation properties to ensure proper execution order
- Ensured consistent animation behavior across all browsers

## [Footer Enhancement] - 2025-04-28

### HTML Features
- Added responsive footer with PUP maroon color scheme 
- Included university name and campus information
- Added developer credit with hyperlink to portfolio

### Style Features
- Created fixed-position footer with appropriate sizing and spacing
- Implemented responsive font sizes for different screen widths
- Added subtle shadow effect for visual separation
- Created hover effects for footer links
- Used semi-transparent text for better visual harmony

### Layout Improvements
- Adjusted spacing between header, map container, and footer
- Modified map container height calculation to accommodate footer
- Improved padding and margins for better visual balance
- Added additional responsive breakpoints for different device heights
- Optimized whitespace distribution across viewport