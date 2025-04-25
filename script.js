const locations = [
    { title: "1 THE PYLON", coords: "1075,590,1042,570,1075,555,1098,569,1106,574", shape: "poly", image: "images/1 THE PYLON.jpg", description: "Iconic university entrance marker that stood for the true, the good, and the beautiful." },
    { title: "2 THE MURAL", coords: "1014,621,1007,602,1015,585,1026,590,1038,604,1031,614", shape: "poly", image: "images/2 THE MURAL.jpg", description: "Large artwork depicting university history/struggles." },
    { title: "3 VISITOR'S LOUNGE", coords: "1048,556,1070,544,1026,513,996,522,1022,551,1034,556", shape: "poly", image: "images/3 VISITOR's LOUNGE.png", description: "Reception and waiting area for campus guests." },
    { title: "4 OPEN COURT", coords: "1178,546,1081,488,1013,501,1122,571", shape: "poly", image: "images/4 OPEN COURT.jpg", description: "Outdoor multi-use court for gatherings or sports." },
    { title: "5 LAWN TENNIS COURT", coords: "929,448,988,431,1069,473,1013,492,961,476", shape: "poly", image: "images/5 LAWN TENNIS COURT.jpg", description: "Outdoor court specifically for lawn tennis." },
    { title: "6 BASKETBALL COURT", coords: "913,448,833,408,897,388,974,426", shape: "poly", image: "images/6 BASKETBALL COURT.jpg", description: "Outdoor court dedicated to basketball games." },
    { title: "7 SOUVENIR SHOP", coords: "821,505,763,472,791,442,833,458,847,471,858,483", shape: "poly", image: "images/7 SOUVENIR SHOP.jpg", description: "Official store for PUP memorabilia and merchandise." },
    { title: "8 MABINI SHRINE", coords: "746,468,686,455,716,413,750,426,772,439", shape: "poly", image: "images/8 MABINI SHRINE.jpg", description: "Relocated historical house of Apolinario Mabini." },
    { title: "9 MABINI MUSEUM", coords: "679,458,615,455,650,410,687,417,697,429", shape: "poly", image: "images/9 MABINI MUSEUM.jpg", description: "Displays artifacts related to Apolinario Mabini." },
    { title: "10 OBELISK", coords: "771,405,739,416,703,396,725,381,732,347,767,389", shape: "poly", image: "images/10 OBELISK.png", description: "Monument representing university aspirations and milestones." },
    { title: "11 FREEDOM PARK", coords: "609,447,536,421,549,388,613,388,641,396", shape: "poly", image: "images/11 FREEDOM PARK.jpg", description: "Open green space for student gatherings/relaxation." },
    { title: "12 FOUNTAIN PARK", coords: "537,462,440,470,423,462,433,451,444,441,454,437,478,425,523,435,536,439", shape: "poly", image: "images/12 FOUNTAIN PARK.jpg", description: "Relaxing park area featuring a water fountain." },
    { title: "13 INTER-FAITH CHAPEL", coords: "376,463,348,481,302,483,250,485,197,467,194,446,223,429,253,418,273,414,293,397,309,402,338,412,377,417,398,421,408,431,411,446,398,454", shape: "poly", image: "images/13 INTER-FAITH CHAPEL.jpg", description: "Spiritual center catering to diverse faiths." },
    { title: "14 MAIN ACADEMIC BUILDING", coords: "114,350,122,397,139,421,245,401,312,389,346,395,404,399,448,413,500,421,524,413,546,387,542,345,513,331,420,312,432,304,420,268,350,261,314,310,122,337", shape: "poly", image: "images/14 MAIN ACADEMIC BUILDING.jpg", description: "Primary building complex housing classes and offices." },
    { title: "15 GAZEBO", coords: "108,396,77,400,62,372,72,363,101,368,110,371", shape: "poly", image: "images/15 GAZEBO.png", description: "Sheltered outdoor spot for studying or socializing." },
    { title: "15 GAZEBO", coords: "418,473,469,480,524,480,492,498,439,494,415,489", shape: "poly", image: "images/15 GAZEBO 2.jpg", description: "Sheltered outdoor spot for studying or socializing." },
    { title: "16 GRANDSTAND", coords: "545,489,559,458,691,460,687,500", shape: "poly", image: "images/16 GRANDSTAND.jpg", description: "Tiered seating area overlooking the sports oval." },
    { title: "17 OVAL", coords: "398,506,255,551,235,590,253,627,286,644,490,665,617,673,749,683,862,669,917,635,909,599,894,565,858,545,810,532,624,515", shape: "poly", image: "images/17 OVAL.jpg", description: "Sports track and field for athletics events." },
    { title: "18 TAHANAN NG ATLETA", coords: "504,669,495,698,511,705,520,717,557,711,570,707,577,682,566,675,577,673", shape: "poly", image: "images/18 TAHANAN NG ATLETA.jpg", description: "Dormitory or housing facility for university athletes." },
    { title: "19 GABRIELA SILANG BUILDING", coords: "463,752,465,714,453,690,418,694,410,728,425,764", shape: "poly", image: "images/19 GABRIELA SILANG BUILDING.jpg", description: "Houses specific academic departments and offices." },
    { title: "20 FOOD AND NUTRITION BUILDING", coords: "160,500,130,505,81,416,100,410,121,408,146,446", shape: "poly", image: "images/20 FOOD AND NUTRITION BUILDING.jpg", description: "Houses food technology and nutrition related programs." },
    { title: "21 FACILITY MANAGEMENT OFFICE", coords: "121,331,121,315,167,296,259,271,324,275,305,302", shape: "poly", image: "images/21 FACILITY MANAGEMENT OFFICE.jpg", description: "Manages campus maintenance and physical plant operations." },
    { title: "22 SAMPAGUITA BUILDING", coords: "436,287,458,260,433,242,408,254,373,259,429,267", shape: "poly", image: "images/22 SAMPAGUITA BUILDING.jpg", description: "Academic building, often housing specific colleges (e.g., Education)." },
    { title: "23 STUDENT CENTER", coords: "452,290,498,288,496,264,461,276,466,264,478,263", shape: "poly", image: "images/23 STUDENT CENTER.jpg", description: "Central hub for student organizations and services." },
    { title: "24 CHARLIE DEL ROSARIO BUILDING", coords: "514,242,554,242,575,263,567,290,537,296,507,292,503,263", shape: "poly", image: "images/24 CHARLIE DEL ROSARIO BUILDING.jpg", description: "Named building, serves as the Student Center." },
    { title: "25 LINEAR PARK", coords: "577,238,584,206,519,217,528,226,565,243,578,251", shape: "poly", image: "images/25 LINEAR PARK.jpg", description: "Landscaped pathway park along the Pasig River." },
    { title: "26 LABORATORY HIGH SCHOOL BUILDING", coords: "596,251,629,251,661,238,697,241,701,197,613,191,594,197,587,222", shape: "poly", image: "images/26 LABORATORY HIGH SCHOOL BUILDING.png", description: "Home building for the PUP Laboratory High School." },
    { title: "27 PRINTING PRESS BUILDING", coords: "633,183,693,171,703,181,679,187,703,191", shape: "poly", image: "images/27 PRINTING PRESS BUILDING.jpg", description: "University's in-house printing production facility." },
    { title: "28 PROPERTY AND SUPPLY MANAGEMENT OFFICE", coords: "704,222,741,201,739,189,713,184,708,198", shape: "poly", image: "images/28 PROPERTY AND SUPPLY MANAGEMENT OFFICE.jpg", description: "Manages university assets, procurement, and supplies." },
    { title: "29 WATER TOWER", coords: "738,239,720,218,747,209,755,213,754,227", shape: "poly", image: "images/29 WATER TOWER.jpg", description: "Distinctive campus structure holding water supply." },
    { title: "30 NINOY AQUINO LEARNING RESOURCE CENTER", coords: "613,280,612,317,650,319,692,315,726,302,745,310,797,315,839,310,834,267,818,259,820,238,777,231", shape: "poly", image: "images/30 NINOY AQUINO LEARNING RESOURCE CENTER.jpg", description: "Main university library and learning resource hub." },
    { title: "31 LAGOON COMMERCIAL SPACES", coords: "540,312,586,301,603,310,595,333,565,343,540,327", shape: "poly", image: "images/31 LAGOON COMMERCIAL SPACES.jpg", description: "Food stalls and small shops near the lagoon." },
    { title: "32 AMPHITHEATER", coords: "471,313,498,301,524,296,519,322,525,321,512,326,485,322", shape: "poly", image: "images/32 AMPHITHEATER.jpg", description: "Outdoor tiered venue for performances and events." },
    { title: "33 LAGOON PARK", coords: "594,343,623,325,689,321,729,322,708,348,676,364,615,361,588,364,587,352", shape: "poly", image: "images/33 LAGOON PARK.jpg", description: "Iconic, central park area surrounding the lagoon." },
    { title: "34 NUTRITION & FOOD TECHNOLOGY RESEARCH AND DEVELOPMENT CENTER BUILDING", coords: "841,279,844,263,865,252,881,266,900,271,908,277,911,290,883,306,847,296", shape: "poly", image: "images/34 NUTRITION & FOOD TECHNOLOGY RESEARCH AND DEVELOPMENT CENTER BUILDING.jpg", description: "Dedicated facility for food/nutrition research development." },
    { title: "35 HUMAN KINETICS BUILDING", coords: "787,323,808,348,865,339,876,319,852,313", shape: "poly", image: "images/35 HUMAN KINETICS BUILDING.jpg", description: "Center for sports science/human kinetics programs." },
    { title: "36 TAHANAN NG ALUMNI", coords: "883,321,883,343,913,338,944,335,942,312,911,312", shape: "poly", image: "images/36 TAHANAN NG ALUMNI.jpg", description: "Dedicated center and gathering place for alumni." },
    { title: "37 SWIMMING POOL", coords: "908,348,960,339,1013,364,999,382,978,396,926,367", shape: "poly", image: "images/37 SWIMMING POOL.jpg", description: "Aquatic facility for swimming activities and training." },
    { title: "38 MULTI-PURPOSE BUILDING", coords: "1123,363,1080,344,1046,346,1006,375,1025,423,1089,450,1130,478,1173,480,1166,430,1289,419,1183,388,1162,374,1150,372", shape: "poly", image: "images/38 MULTI-PURPOSE BUILDING.jpg", description: "Flexible indoor space for various events/activities (Gymnasium)." },
    { title: "39 ENGINEERING AND SCIENCE RESEARCH CENTER", coords: "1185,506,1181,434,1277,431,1304,444,1296,489,1298,496,1223,511,1207,518", shape: "poly", image: "images/39 ENGINEERING AND SCIENCE RESEARCH CENTER.jpg", description: "Hub for engineering and science research activities." },
    { title: "40 COMMUNICATION BUILDING", coords: "1006,159,1024,133,1064,134,1076,158,1060,175", shape: "poly", image: "images/40 COMMUNICATION BUILDING.jpg", description: "Houses College of Communication programs/offices (NDC Compound)." },
    { title: "41 PUP THEATER", coords: "1028,126,1051,105,1080,126,1056,133", shape: "poly", image: "images/41 PUP THEATER.jpg", description: "Main indoor performance and assembly venue (NDC Compound)." },
    { title: "42 ENGINEERING AND ARCHITECTURE BUILDING", coords: "1076,96,1098,89,1119,104,1122,122,1101,127,1080,114", shape: "poly", image: "images/42 ENGINEERING AND ARCHITECTURE BUILDING.jpg", description: "Houses Engineering/Architecture colleges (NDC Compound)." },
    { title: "43 CONDOTEL", coords: "931,75,939,42,974,37,996,54,996,75", shape: "poly", image: "images/43 CONDOTEL.jpg", description: "University-operated condominium hotel facility." },
    { title: "44 NDC TENNIS COURT AND CLUB HOUSE", coords: "1128,125,1143,116,1177,117,1191,133,1174,143,1148,143", shape: "poly", image: "images/44 NDC TENNIS COURT AND CLUB HOUSE.jpg", description: "Tennis courts and associated clubhouse (NDC Area)." },
    { title: "45 NDC COVERED COURT", coords: "1123,85,1173,85,1181,106,1136,106", shape: "poly", image: "images/45 NDC COVERED COURT.jpg", description: "Sheltered court for sports and events (NDC Area)." },
    { title: "46 BUSINESS PROCESSING OFFICE", coords: "1195,110,1194,91,1248,89,1274,118,1223,125", shape: "poly", image: "images/46 BUSINESS PROCESSING OFFICE.png", description: "Office managing specific university business operations." },
    { title: "47 INFORMATION TECHNOLOGY BUILDING", coords: "1171,64,1185,57,1224,45,1253,51,1266,86,1228,85", shape: "poly", image: "images/47 INFORMATION TECHNOLOGY BUILDING.jpg", description: "Center for IT programs, services, and infrastructure." },
    { title: "48 ANTIQUE HOUSE", coords: "1137,57,1158,58,1171,83,1132,78,1128,64", shape: "poly", image: "images/48 ANTIQUE HOUSE.jpg", description: "Preserved historical house structure within the campus." },
    { title: "49 GRADUATE SCHOOL", coords: "1292,17,1299,54,1354,59,1379,55,1368,18,1328,8", shape: "poly", image: "images/49 GRADUATE SCHOOL.jpg", description: "Houses post-graduate programs and administration (M.H. Del Pilar Campus)." },
    { title: "50 HASMIN BUILDING", coords: "1387,53,1368,9,1400,5,1428,22,1433,54", shape: "poly", image: "images/50 HASMIN BUILDING.jpg", description: "Houses offices/colleges like CHTM (M.H. Del Pilar Campus)." }
];

function openModal(title, imageSrc, description, event) {
    const modal = document.getElementById("modal");
    if (!modal) return;

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-description").innerText = description;

    modal.style.display = "block";
    updateModalPosition(event);
    
    // Add mousemove event listener to track cursor movement
    document.addEventListener("mousemove", updateModalPosition);
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
        // Remove mousemove event listener when modal is closed
        document.removeEventListener("mousemove", updateModalPosition);
    }
}

function updateModalPosition(event) {
    const modal = document.getElementById("modal");
    if (!modal || modal.style.display === "none") return;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;
    const windowWidth = document.documentElement.clientWidth; 
    const windowHeight = document.documentElement.clientHeight;
    const offset = 15;

    let finalX = mouseX + offset;
    let finalY = mouseY + offset;

    if (finalX + modalWidth > windowWidth) {
        finalX = windowWidth - modalWidth - offset;
    }

    if (finalY + modalHeight > windowHeight) {
        finalY = windowHeight - modalHeight - offset;
    }

    if (finalX < 0) {
        finalX = offset;
    }

    if (finalY < 0) {
        finalY = offset;
    }

    // Add smooth transition with CSS
    modal.style.transition = "left 0.1s, top 0.1s";
    modal.style.left = `${finalX}px`;
    modal.style.top = `${finalY}px`;
}

// Add canvas highlighting functionality
let canvas, ctx, scaleX, scaleY;

function initializeCanvas() {
    canvas = document.getElementById('highlight-canvas');
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match the natural dimensions of the image
    const mapImg = document.getElementById('pup-map-img');
    
    // Function to update canvas size
    function updateCanvasSize() {
        if (!mapImg.complete) {
            // If image hasn't loaded yet, try again soon
            setTimeout(updateCanvasSize, 100);
            return;
        }
        
        // Set canvas dimensions to match the displayed image size
        canvas.width = mapImg.offsetWidth;
        canvas.height = mapImg.offsetHeight;
        
        // Calculate scale factors
        scaleX = canvas.width / mapImg.naturalWidth;
        scaleY = canvas.height / mapImg.naturalHeight;
    }
    
    // Call once and also on window resize
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    mapImg.addEventListener('load', updateCanvasSize);
}

function highlightArea(coords, shape) {
    if (!ctx || !canvas) return;
    
    // Clear previous highlights
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the highlighted area
    ctx.fillStyle = 'rgba(122, 12, 12, 0.4)'; // PUP maroon with 40% opacity
    ctx.strokeStyle = 'rgba(122, 12, 12, 0.8)'; // PUP maroon with 80% opacity
    ctx.lineWidth = 2;
    
    if (shape === 'poly') {
        const points = coords.split(',').map(Number);
        
        // Draw the polygon
        ctx.beginPath();
        
        // Move to the first point
        ctx.moveTo(points[0] * scaleX, points[1] * scaleY);
        
        // Connect to all other points
        for (let i = 2; i < points.length; i += 2) {
            ctx.lineTo(points[i] * scaleX, points[i + 1] * scaleY);
        }
        
        // Close the path
        ctx.closePath();
        
        // Fill and stroke
        ctx.fill();
        ctx.stroke();
    }
    // Add support for other shapes (rect, circle) if needed
}

function clearHighlight() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Modify existing event handlers to include highlighting
function generateMapAreas() {
    const map = document.getElementById("pup-map");

    if (!map) return;

    locations.forEach((location) => {
        const area = document.createElement("area");
        area.shape = location.shape;
        area.coords = location.coords;
        area.href = "#";
        area.alt = location.title;
        area.title = location.title;

        // Update event handlers to include highlighting
        area.addEventListener("mouseenter", (event) => {
            highlightArea(location.coords, location.shape);
            openModal(location.title, location.image, location.description, event);
        });
        
        area.addEventListener("mouseleave", () => {
            clearHighlight();
            closeModal();
        });

        map.appendChild(area);
    });

    if (typeof imageMapResize === "function") {
        imageMapResize();
    }
    
    // Initialize the canvas for highlighting
    initializeCanvas();
}

window.addEventListener("load", generateMapAreas);
