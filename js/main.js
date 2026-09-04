// Initialize AOS Animations
AOS.init({
    duration: 1000,
    once: true
});

// Typed.js for Hero subheadline
const typed = new Typed('#typed-text', {
    strings: [
        "Sustainability Advocate & IT Engineer",
        "Circular Economy Explorer",
        "Green Technology & E-Waste Researcher"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Footer Current Year
document.getElementById('footer-year').textContent = new Date().getFullYear();

// Custom Cursor Follower
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// ================= ASSIGNMENT DATA SYSTEM =================
const assignmentsData = [
    {
        title: "Assignment 1: The Sustainability Promise (E-Waste Pledge)",
        category: "Report",
        date: "29/07/2026",
        shortDesc: "E-Waste Pledge – My Commitment to a Sustainable Future, detailing personal accountability and electronic waste reduction.",
        pdfLink: "pdf/Swapnil Bhabal 24101B0065 E-pledge.pdf",
        images: [
            "img/Swapnil Bhabal 24101B0065 E-pledge.png"
        ],
        sections: {
            title: "E-Waste Pledge – My Commitment to a Sustainable Future",
            objective: "The objective of this activity was to create awareness about responsible e-waste management and encourage students to adopt environmentally friendly practices. By taking the pledge, I committed to using technology responsibly, reducing waste, conserving resources, disposing of electronic waste properly, and inspiring others to contribute towards a cleaner and greener environment.",
            evidence: "• Signed E-Waste Pledge Certificate<br>• Student Commitment Poster<br>• Signature and Date (29/07/2026)",
            learned: "Through this activity, I understood that every individual has an important role in protecting the environment. Electronic devices become e-waste after their useful life, and if they are not disposed of responsibly, they can harm both people and nature. The pledge reminded me that sustainability is not limited to industries or governments—it begins with our daily habits. I learned the importance of reducing unnecessary electronic purchases, repairing devices whenever possible, recycling old electronics through authorized collection centers, and conserving valuable resources. The activity also highlighted that responsible engineering involves designing and using technology in ways that minimize environmental impact. As a future engineer, I realized that innovation should always go hand in hand with sustainability. Taking this pledge has motivated me to adopt eco-friendly practices in my personal and professional life and encourage my family and friends to do the same for a cleaner and greener future.",
            sustainability: "This activity promotes sustainable development by encouraging the proper disposal and recycling of e-waste. Responsible e-waste management reduces landfill waste, prevents hazardous materials from polluting the environment, conserves valuable metals through recycling, and supports a circular economy.",
            reflection: "<b>• What surprised me?</b><br>I was surprised to learn that simple actions, such as recycling old electronic devices, can make a significant contribution toward environmental protection.<br><br><b>• What challenge did I face?</b><br>The biggest challenge was understanding how to identify authorized e-waste recycling methods and changing everyday habits.<br><br><b>• What will I do differently?</b><br>I will avoid throwing electronic devices in regular garbage, choose repair over replacement whenever possible, and spread awareness about responsible e-waste disposal.",
            references: "Student Commitment – My Commitment to a Sustainable Future (E-Waste Pledge)."
        }
    },
    {
        title: "Assignment 2: E-Waste Mastermind – Crossword Puzzle",
        category: "Activity",
        date: "29/07/2026",
        shortDesc: "E-Waste Mastermind – Crossword Puzzle Activity to improve e-waste management knowledge through interactive problem solving.",
        pdfLink: "pdf/E-Waste Mastermind - Crossword Labs.pdf",
        images: [
            "img/Crossword.png"
        ],
        sections: {
            title: "E-Waste Mastermind – Crossword Puzzle Activity",
            objective: "The objective of this activity was to improve knowledge of e-waste management through an interactive crossword puzzle. It aimed to familiarize students with important concepts related to electronic waste, hazardous materials, recycling, environmental impacts, and sustainable disposal practices.",
            evidence: "• Completed E-Waste Mastermind Crossword<br>• Crossword Answers Sheet (PDF)",
            learned: "This crossword activity made learning about e-waste interesting and engaging. While solving the puzzle, I learned several important terms related to electronic waste, including lead, ferrous metals, plastic, recycling, hazardous waste testing (TCLP), compact fluorescent lamps (CFLs), and environmental components such as soil that are affected by improper disposal. I also learned that Maharashtra contributes the highest amount of WEEE in India, while Bihar has the lowest per capita e-waste generation. The activity helped me understand that valuable materials can be recovered from discarded electronic devices through recycling, reducing the need for new raw materials. Solving the crossword improved my understanding of e-waste terminology and strengthened my awareness of responsible waste management. Overall, the activity showed that learning through games and puzzles can be both enjoyable and effective while promoting environmental responsibility.",
            sustainability: "The crossword activity increased awareness about proper e-waste management, recycling, hazardous waste handling, and resource recovery. Such awareness encourages responsible disposal practices, reduces environmental pollution, conserves natural resources, and supports sustainable development by promoting recycling instead of dumping electronic waste.",
            reflection: "<b>• What surprised me?</b><br>I was surprised to discover how many technical terms and environmental concepts are connected to e-waste management.<br><br><b>• What challenge did I face?</b><br>Some crossword clues required knowledge of technical terms such as TCLP and ferrous metals, making them difficult initially.<br><br><b>• What will I do differently?</b><br>I will continue learning about sustainable technology, participate in more environmental awareness activities, and encourage responsible recycling practices among my peers.",
            references: "E-Waste Mastermind – Crossword Puzzle Activity."
        }
    },
    {
        title: "Assignment 3: Carbon Footprint Calculator & Sustainability Report",
        category: "Case Study",
        date: "05/08/2026",
        shortDesc: "Analysis of personal electronic lifestyle carbon emissions (11 tCO₂e/year), gadget lifecycle manufacturing impacts, and e-waste reduction strategies.",
        pdfLink: "pdf/Swapnil Bhabal 24101B0065 EWEM Carbon Footprint Calculator.pdf",
        images: [
            "img/CALC1.png",
            "img/CALC2.png",
            "img/CALC3.png",
            "img/CALC4.png" 
        ],
        sections: {
            title: "The Hidden Carbon Footprint of Our Gadgets – Personal Assessment",
            objective: "To calculate personal annual carbon footprint (tCO₂e/year), analyze electronic lifestyle habits, evaluate product lifecycle emission stages, and propose engineering solutions to minimize electronic waste and carbon emissions.",
            evidence: "• Completed Carbon Footprint Calculator Worksheet (Score: 11 tCO₂e/year)<br>• Personal Electronic Inventory (Smartphones, Chargers, Cables)<br>• Student ID: 24101B0065 | Division: B",
            learned: "Through this carbon footprint activity, I calculated my annual emissions to be 11 tCO₂e/year, which is higher than the Indian national average (7 tCO₂e) but lower than the global average (19 tCO₂e). Evaluating my digital lifestyle revealed that the manufacturing stage contributes the highest carbon emissions due to intensive raw material extraction, component production, and assembly. Cataloging household unused electronics (3 mobile phones, 2 chargers, 3 cables) showed how storing old devices increases household e-waste. Furthermore, I learned that recycling alone is not enough because it still requires energy and cannot recover 100% of materials—making the 5Rs (Refuse, Reduce, Reuse, Repair, Recycle) critical.",
            sustainability: "This assessment promotes sustainable development by exposing the hidden environmental costs of consumer electronics. Adopting behaviors like extending smartphone lifespans to 5–6 years, repairing cracked screens, and avoiding phantom energy consumption (leaving chargers/appliances plugged in) directly lowers carbon emissions and conserves natural resources.",
            reflection: "<b>• What surprised me?</b><br>I was surprised that my footprint (11 tons) is higher than the Indian national average (7 tons), though it is lower than the global average (19 tons).<br><br><b>• What challenge did I face?</b><br>Assessing how daily electronics usage habits and unmanaged drawer clutter contribute heavily to cumulative carbon output.<br><br><b>• What will I do differently?</b><br>I will use my smartphone for 5–6 years before replacing it, switch off appliances when not in use, and properly recycle old electronic items instead of storing them.",
            references: "E-Waste & Environmental Management Activity Worksheet: The Hidden Carbon Footprint of Our Gadgets (Vidyalankar Institute of Technology)."
        }
    },
    {
        title: "Assignment 4: Video Based Quiz – Inside an E-Waste Plant",
        category: "Quiz",
        date: "12/08/2026",
        shortDesc: "Assessment of e-waste recycling processes, material recovery, and circular economy based on a real-world case study video.",
        pdfLink: "pdf/QUIZ1.pdf", // Your custom PDF Link
        videoLink: "https://youtu.be/Ey-qPao1Wms?si=dRT0iTlyuJ4-foqn", // Dedicated Video Link
        images: [
            "img/QUIZ1.jpg" // User's requested image file path
        ],
        sections: {
            title: "Video Based Quiz – Inside an E-Waste Plant",
            objective: "To understand the real-world processes of e-waste recycling, from collection challenges to manual dismantling and precious material recovery, by analyzing a video case study and completing an assessment quiz.",
            evidence: "• Completed Online Video Quiz<br>• Wayground Quiz Score: 6900<br>• Accuracy: 100%",
            learned: "The video case study highlighted that e-waste management starts with collection, which is the biggest challenge in India despite over 100 million mobile phones entering the market annually. I learned that discarded computers are manually dismantled by skilled workers because every CPU is designed differently. Complex parts like wires are stripped of plastic to recover metal, and heat sinks are melted into aluminum ingots. Motherboards yield precious metals like gold, platinum, and palladium through specialized vendors. The recycling process relies heavily on a circular economy and collaboration among various formal dismantling units because a single plant cannot process all types of e-waste.",
            sustainability: "By safely recovering valuable materials such as aluminum, copper, and gold from e-waste, the need for virgin mining is significantly reduced. This circular economy approach lowers greenhouse gas emissions, prevents hazardous components from contaminating soil and water (which happens during open burning or dumping), and conserves natural resources.",
            reflection: "<b>• What surprised me?</b><br>I was surprised to see how much manual labor is involved in dismantling CPUs due to varying designs, and that complex parts like motherboards contain trace amounts of highly precious metals like gold and palladium.<br><br><b>• What challenge did I face?</b><br>Understanding the extensive collaborative network required to process different electronic components, as one plant cannot manage all types of e-waste alone.<br><br><b>• What will I do differently?</b><br>I will actively support the circular economy by ensuring my discarded electronics reach authorized recyclers rather than throwing them into regular garbage, where they could cause environmental pollution.",
            references: "Outlook Business Video - 'Inside an E-Waste Plant: The Truth About Recycling in India' & Wayground Quiz Assessment."
        }
    },
    {
        title: "Assignment 5: Quiz 2 – Recycling of E-Waste Technologies",
        category: "Quiz",
        date: "19/08/2026",
        shortDesc: "Technical assessment covering advanced metallurgical processes, mechanical separation, and industrial e-waste recycling methodologies.",
        pdfLink: "pdf/QUIZ2.pdf", // Update with your actual PDF link if available
        images: [
             "img/QUIZ2.jpg"
           
        ],
        sections: {
            title: "Advanced E-Waste Recycling Methodologies Assessment",
            objective: "To evaluate knowledge on industrial-scale e-waste recycling technologies, including mechanical separation, hydrometallurgical leaching, pyrometallurgical smelting, and the sequential steps of commercial material recovery.",
            evidence: "• Completed Wayground Online Quiz<br>• Wayground Quiz Score: 6590 (8 Correct, 2 Incorrect)<br>• Accuracy: 80%",
            learned: "This technical quiz deepened my understanding of the specific scientific processes used in large-scale e-waste recycling. I learned the core three-step recycling sequence: Disassembly → Upgrading → Refining. The quiz highlighted specific industrial techniques, such as how an Eddy current separator repels non-ferrous metals like aluminum into a different trajectory to isolate them. I also explored advanced chemical recovery methods, noting that hydrometallurgical processes utilize acid or caustic leaches followed by separation, while specific techniques like thiourea leaching are used for gold extraction. Furthermore, I studied real-world commercial operations, such as Umicore's Precious Metal Operations, which begins with smelting in an IsaSmelt furnace, and the Noranda process where iron, lead, and zinc impurities are converted into oxides and bound into silica-based slag.",
            sustainability: "Understanding these advanced separation and metallurgical techniques is critical for maximizing resource recovery rates. Highly efficient processes like hydrometallurgy and pyrometallurgy ensure that rare earth elements and toxic heavy metals are safely extracted and repurposed rather than leaching into groundwater from landfills, driving the viability of urban mining.",
            reflection: "<b>• What surprised me?</b><br>I was surprised by the chemical complexity required to extract precious metals, specifically the use of mechanisms like activated carbon adsorption and thiourea leaching.<br><br><b>• What challenge did I face?</b><br>Differentiating between specific industrial processes (e.g., Noranda vs. Umicore) and memorizing the exact metallurgical reactions used for different alloy separations.<br><br><b>• What will I do differently?</b><br>I will research more about emerging bio-metallurgical processes (like bioleaching) to understand greener, low-energy alternatives to traditional smelting methods.",
            references: "Course Materials on Hydrometallurgical & Pyrometallurgical E-Waste Recovery and Wayground Quiz Assessment."
        }
    },
    {
        title: "Assignment 6: Device Anatomy 2.0 – Engineering Investigation",
        category: "Lab Activity",
        date: "02/09/2026",
        shortDesc: "Physical dismantling and engineering investigation of non-functional wired earphones to evaluate material recovery and propose circular design improvements.",
        pdfLink: "pdf/Device anatomy.pdf",
        images: [
            "img/D1.jpeg",
            "img/D2.jpeg",
            "img/D3.jpeg"
        ],
        sections: {
            title: "Device Anatomy 2.0 – Engineering Investigation of an Electronic Device at End-of-Life",
            objective: "To investigate the material anatomy of a non-functional electronic device (Vivo wired earphones), identify recovery opportunities and environmental risks, and propose engineering modifications to make the device more circular.",
            evidence: "• Investigated Device: Non-functional Vivo Wired Earphones<br>• Physical dismantling and material categorization by Group 6 (including Devangini Jadhav, Swapnil Bhabal, Dhanraj Mogera, Nikhat Momin)<br>• Completed Device Anatomy Worksheet detailing components like Neodymium magnets, FR-4 PCBs, and Copper coils",
            learned: "Through the physical teardown of the earphones, I identified core components including the copper cable conductors, PVC/TPE outer insulation, FR-4 inline PCB, and the neodymium permanent magnet in the speaker driver. I learned that while copper and neodymium are highly valuable, they are difficult to recover because they are tightly integrated and glued together in a very small assembly. Additionally, components like the PCB contain toxic materials that can cause soil and water pollution if improperly discarded, while burning plastic PVC cables releases harmful fumes. I also realized that current designs use permanent soldering and glued casings, which severely limits repairability.",
            sustainability: "The activity highlighted the importance of 'Design for Disassembly'. By applying a circular strategy—such as repairing the device to extend its life—we can significantly reduce e-waste. Furthermore, re-engineering the device with snap-fit casings and detachable connectors allows for easier material separation, ensuring valuable resources like copper are kept in the loop rather than lost to landfills.",
            reflection: "<b>• What surprised me?</b><br>I was surprised to discover that a device as small as wired earphones contains several valuable and complex materials hidden inside.<br><br><b>• What challenge did I face?</b><br>The biggest challenge during dismantling was dealing with glued/closed casings and permanently soldered wires, which made separating the mixed materials very difficult.<br><br><b>• What will I do differently?</b><br>I will no longer look at broken electronics simply as 'waste,' because many of their components can actually be repaired, reused, or recycled if managed properly. I will also advocate for designing devices for easy repair to extend product life and reduce e-waste.",
            references: "Device Anatomy 2.0 - E-Waste & Environmental Management Worksheet (Group 6)."
        }
    }
];

const grid = document.getElementById('assignment-grid');
const modal = document.getElementById('assignment-modal');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalTag = document.getElementById('modal-tag');
const modalFullContent = document.getElementById('modal-full-content');
const modalPdf = document.getElementById('modal-pdf');
const modalVideo = document.getElementById('modal-video');
const modalImage = document.getElementById('modal-image');
const imgCounter = document.getElementById('img-counter');
const prevImgBtn = document.getElementById('prev-img');
const nextImgBtn = document.getElementById('next-img');
const closeModal = document.getElementById('close-modal');

let currentImages = [];
let currentImageIndex = 0;

// Render Assignment Cards with Hover Scale & Glow Effect
assignmentsData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = "assignment-card-hover p-8 rounded-[2rem] bg-eco-800/60 border border-white/5 flex flex-col justify-between space-y-6 cursor-pointer";
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index + 1) * 100);

    card.innerHTML = `
        <div class="space-y-3">
            <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-eco-700 text-eco-400 text-xs font-semibold uppercase">${item.category}</span>
                <span class="text-xs text-gray-400">${item.date}</span>
            </div>
            <h3 class="font-display text-xl font-bold text-white">${item.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${item.shortDesc}</p>
        </div>
        <button onclick="openModal(${index})" class="inline-flex items-center gap-2 text-eco-400 font-semibold text-sm hover:text-white transition-colors">
            View Details & PDF <i class="ri-arrow-right-line"></i>
        </button>
    `;
    grid.appendChild(card);
});

function openModal(index) {
    const data = assignmentsData[index];
    modalTitle.textContent = data.title;
    modalDate.textContent = "Date: " + data.date;
    modalTag.textContent = data.category;
    modalPdf.href = data.pdfLink;

    // Toggle Video Button conditionally
    if (data.videoLink) {
        modalVideo.href = data.videoLink;
        modalVideo.classList.remove('hidden');
        modalVideo.classList.add('flex');
    } else {
        modalVideo.classList.add('hidden');
        modalVideo.classList.remove('flex');
    }

    // Handle multi-image arrays or single image fallbacks seamlessly
    currentImages = data.images || (data.image ? [data.image] : ["img/about_me.jpg"]);
    currentImageIndex = 0;
    updateModalImage();

    // Populate the 7-Point format
    modalFullContent.innerHTML = `
        <div class="space-y-4 text-sm">
            <div>
                <h4 class="font-bold text-eco-400">1. Activity Title</h4>
                <p class="text-white font-medium mt-1">${data.sections.title}</p>
            </div>
            <div>
                <h4 class="font-bold text-eco-400">2. Objective</h4>
                <p class="text-gray-300 mt-1">${data.sections.objective}</p>
            </div>
            <div>
                <h4 class="font-bold text-eco-400">3. Evidence</h4>
                <p class="text-gray-300 mt-1">${data.sections.evidence}</p>
            </div>
            <div>
                <h4 class="font-bold text-eco-400">4. What I Learned</h4>
                <p class="text-gray-300 mt-1">${data.sections.learned}</p>
            </div>
            <div>
                <h4 class="font-bold text-eco-400">5. Sustainability Connection</h4>
                <p class="text-gray-300 mt-1">${data.sections.sustainability}</p>
            </div>
            <div>
                <h4 class="font-bold text-eco-400">6. Reflection</h4>
                <p class="text-gray-300 mt-1">${data.sections.reflection}</p>
            </div>
            <div>
                <h4 class="font-bold text-eco-400">7. References</h4>
                <p class="text-gray-300 mt-1">${data.sections.references}</p>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function updateModalImage() {
    modalImage.src = currentImages[currentImageIndex];
    imgCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
    
    // Hide or show carousel navigation arrows depending on image count
    if (currentImages.length <= 1) {
        prevImgBtn.style.display = 'none';
        nextImgBtn.style.display = 'none';
    } else {
        prevImgBtn.style.display = 'flex';
        nextImgBtn.style.display = 'flex';
    }
}

nextImgBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateModalImage();
});

prevImgBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateModalImage();
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

// ================= CERTIFICATE LIGHTBOX MODAL =================
const certModal = document.getElementById("certModal");
const certFullView = document.getElementById("certFullView");
const certClose = document.querySelector(".cert__close");

document.querySelectorAll(".cert__img").forEach(img => {
    img.addEventListener("click", () => {
        certModal.classList.remove("hidden");
        certModal.classList.add("flex");
        certFullView.src = img.src;
    });
});

certClose.addEventListener("click", () => {
    certModal.classList.add("hidden");
    certModal.classList.remove("flex");
});

certModal.addEventListener("click", (e) => {
    if (e.target === certModal) {
        certModal.classList.add("hidden");
        certModal.classList.remove("flex");
    }
});

// Duplicate certificate track contents to ensure seamless infinite looping
document.querySelectorAll('.cert__content').forEach(track => {
    const images = [...track.children];
    images.forEach(img => {
        track.appendChild(img.cloneNode(true));
    });
});