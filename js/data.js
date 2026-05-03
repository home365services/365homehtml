const SERVICES = [
    // Technical
    {
        id: 'electrical-engineering',
        category: 'Technical',
        name: 'Electrical Engineering',
        name_bn: 'ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং',
        icon: 'fa-bolt-lightning',
        image: 'assets/service_electrical_engineering_premium.png',
        description: 'Professional industrial and commercial electrical solutions.',
        description_bn: 'পেশাদার শিল্প ও বাণিজ্যিক ইলেকট্রিক্যাল সমাধান।',
        price: 'Starts at ₹1499',
        type: 'booking',
        review: { text: "The industrial wiring work was top-notch. Very precise and followed all safety standards.", user: "Anirban Bhattacharya, Uluberia" }
    },
    {
        id: 'electrician',
        category: 'Technical',
        name: 'Electrician',
        name_bn: 'ইলেকট্রিশিয়ান',
        icon: 'fa-plug',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=300&fit=crop',
        description: 'Expert residential electrical repairs and installations.',
        description_bn: 'বিশেষজ্ঞ আবাসিক ইলেকট্রিক্যাল মেরামত এবং ইনস্টলেশন।',
        price: 'Starts at ₹59',
        type: 'booking',
        review: { text: "Fixed the short circuit in my kitchen within minutes. Very polite and professional.", user: "Sourav Paul, Bagnan" }
    },
    {
        id: 'plumber',
        category: 'Technical',
        name: 'Plumber',
        name_bn: 'প্লাম্বার',
        icon: 'fa-faucet-detergent',
        image: 'assets/service_plumber_expert.png',
        description: 'Reliable plumbing repairs, leaks, and drainage services.',
        description_bn: 'নির্ভরযোগ্য প্লাম্বিং মেরামত, লিক এবং ড্রেনেজ পরিষেবা।',
        price: 'Starts at ₹149',
        type: 'booking',
        review: { text: "Best plumber in Uluberia. Fixed a long-standing leakage issue that others couldn't.", user: "Priyanka Chatterjee, Uluberia" }
    },
    {
        id: 'ac-repair',
        category: 'Technical',
        name: 'AC Repair',
        name_bn: 'এসি মেরামত',
        icon: 'fa-snowflake',
        image: 'assets/service_ac_365.png',
        description: 'Deep cleaning, gas refill, and maintenance for all AC types.',
        description_bn: 'সমস্ত ধরণের এসির জন্য গভীর পরিষ্কার, গ্যাস রিফিল এবং রক্ষণাবেক্ষণ।',
        price: 'Starts at ₹499',
        type: 'booking',
        review: { text: "Excellent AC servicing. The cooling has improved significantly. Highly recommended!", user: "Biplab Das, Howrah" }
    },
    {
        id: 'washing-machine',
        category: 'Technical',
        name: 'Washing Machine Service',
        name_bn: 'ওয়াশিং মেশিন সার্ভিস',
        icon: 'fa-soap',
        image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=400&h=400&fit=crop',
        description: 'Quick repair and servicing for top/front load washers.',
        description_bn: 'টপ/ফ্রন্ট লোড ওয়াশারের দ্রুত মেরামত এবং সার্ভিসিং।',
        price: 'Starts at ₹199',
        type: 'booking',
        review: { text: "My washing machine was making noise, now it's running perfectly smooth. Thank you!", user: "Tanmoy Sarkar, Amta" }
    },
    {
        id: 'ev-service',
        category: 'Technical',
        name: 'Electric Scooty',
        name_bn: 'ইলেকট্রিক স্কুটি',
        icon: 'fa-charging-station',
        image: 'assets/service_ev_motorcycle_final.png',
        description: 'Specialized maintenance and repair for Electric Scooty.',
        description_bn: 'ইলেকট্রিক স্কুটির বিশেষ রক্ষণাবেক্ষণ এবং মেরামত।',
        price: 'Starts at ₹150',
        type: 'booking',
        review: { text: "Quick battery and motor checkup for my electric scooty. Very satisfied with the rate.", user: "Amitava Ghosh, Uluberia" }
    },
    {
        id: 'purifier-service',
        category: 'Technical',
        name: 'Purifier Service',
        name_bn: 'পিউরিফায়ার সার্ভিস',
        icon: 'fa-faucet',
        image: 'assets/service_purifier.png',
        description: 'RO & Water purifier filter replacement and repair.',
        description_bn: 'RO এবং জল পিউরিফায়ার ফিল্টার পরিবর্তন এবং মেরামত।',
        price: 'Starts at ₹299',
        type: 'booking'
    },
    {
        id: 'cctv-installation',
        category: 'Technical',
        name: 'CCTV Installation',
        name_bn: 'সিসিটিভি ইনস্টলেশন',
        icon: 'fa-video',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300&h=300&fit=crop',
        description: 'Security camera setup and maintenance for home/office.',
        description_bn: 'বাড়ি/অফিসের জন্য সুরক্ষা ক্যামেরা সেটআপ এবং রক্ষণাবেক্ষণ।',
        price: 'Starts at ₹999',
        type: 'booking'
    },
    
    // Home Improvement
    {
        id: 'tiles-installation',
        category: 'Home Improvement',
        name: 'Tiles Installation',
        name_bn: 'টাইলস ইনস্টলেশন',
        icon: 'fa-border-all',
        image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=300&h=300&fit=crop',
        description: 'Professional flooring and wall tile laying services.',
        description_bn: 'পেশাদার ফ্লোরিং এবং দেওয়ালের টাইলস বসানোর পরিষেবা।',
        price: 'Custom Quote',
        type: 'quote'
    },
    {
        id: 'civil-works',
        category: 'Home Improvement',
        name: 'Civil Works',
        name_bn: 'সিভিল কাজ',
        icon: 'fa-helmet-safety',
        image: 'assets/slider_civil.png',
        description: 'Renovation, masonry, and structural repairs.',
        description_bn: 'সংস্কার, রাজমিস্ত্রির কাজ এবং কাঠামোগত মেরামত।',
        price: 'Custom Quote',
        type: 'quote'
    },
    {
        id: 'house-building-plan',
        category: 'Home Improvement',
        name: 'House Building Plan',
        name_bn: 'বাড়ি তৈরির পরিকল্পনা',
        icon: 'fa-compass-drafting',
        image: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=400&h=400&fit=crop',
        description: '2D/3D structure plans and architecture consulting.',
        description_bn: '2D/3D কাঠামো পরিকল্পনা এবং স্থাপত্য পরামর্শ।',
        price: 'Custom Quote',
        type: 'quote'
    },
    {
        id: 'carpenter',
        category: 'Home Improvement',
        name: 'Carpenter',
        name_bn: 'কার্পেন্টার (ছুতার)',
        icon: 'fa-hammer',
        image: 'assets/service_carpenter_car.png',
        description: 'Furniture assembly, repair, and custom woodwork.',
        description_bn: 'আসবাবপত্র সংযোজন, মেরামত এবং কাস্টম কাঠের কাজ।',
        price: 'Starts at ₹299',
        type: 'booking'
    },
    {
        id: 'house-painter',
        category: 'Home Improvement',
        name: 'House Painter',
        name_bn: 'হাউস পেইন্টার (রং মিস্ত্রি)',
        icon: 'fa-paint-roller',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=300&fit=crop',
        description: 'Interior and exterior premium painting solutions.',
        description_bn: 'অভ্যন্তরীণ এবং বাহ্যিক প্রিমিয়াম পেইন্টিং সমাধান।',
        price: 'Custom Quote',
        type: 'quote'
    },
    
    // Lifestyle & Care
    {
        id: 'interior-decorator',
        category: 'Lifestyle & Care',
        name: 'Interior Decorator',
        name_bn: 'ইন্টেরিয়র ডেকোরেটর',
        icon: 'fa-couch',
        image: 'assets/service_interior.png',
        description: 'Transform your living space with our expert interior consultants.',
        description_bn: 'আমাদের বিশেষজ্ঞ ইন্টেরিয়র পরামর্শদাতাদের সাথে আপনার থাকার জায়গা রূপান্তর করুন।',
        price: 'Starts at ₹499',
        type: 'booking',
        review: { text: "Transformed our hall beautifully. Elegant design and great space management.", user: "Deblina Roy, Howrah" }
    },
    {
        id: 'maid-service',
        category: 'Lifestyle & Care',
        name: 'Maid Service',
        name_bn: 'পরিচারিকা পরিষেবা',
        icon: 'fa-hands-bubbles',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop',
        description: 'Verified part-time or full-time domestic help.',
        description_bn: 'যাচাইকৃত অংশকালীন বা পূর্ণকালীন গার্হস্থ্য সাহায্য।',
        price: 'Starts at ₹99',
        type: 'booking',
        review: { text: "Found a very reliable and well-behaved maid through 365Home. Great service.", user: "Mousumi Ray, Uluberia" }
    },
    {
        id: 'cleaning-service',
        category: 'Lifestyle & Care',
        name: 'Cleaning Service',
        name_bn: 'ক্লিনিং সার্ভিস',
        icon: 'fa-broom',
        image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=300&fit=crop',
        description: 'Deep home cleaning, sofa, and carpet cleaning.',
        description_bn: 'গভীর বাড়ি পরিষ্কার, সোফা এবং কার্পেট পরিষ্কার।',
        price: 'Starts at ₹999',
        type: 'booking'
    },
    {
        id: 'catering',
        category: 'Lifestyle & Care',
        name: 'Catering',
        name_bn: 'ক্যাটারিং (খাবার সরবরাহ)',
        icon: 'fa-utensils',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=300&h=300&fit=crop',
        description: 'Delicious food solutions for small to large events.',
        description_bn: 'ছোট থেকে বড় ইভেন্টের জন্য সুস্বাদু খাবারের সমাধান।',
        price: 'Custom Quote',
        type: 'quote'
    },
    {
        id: 'insta-help',
        category: 'Lifestyle & Care',
        name: 'Insta-Help Services',
        name_bn: 'ইনস্টা-হেল্প পরিষেবা',
        icon: 'fa-bolt',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop',
        description: 'Emergency 30-min response for urgent repairs.',
        description_bn: 'জরুরী মেরামতের জন্য ৩০ মিনিটের দ্রুত প্রতিক্রিয়া।',
        price: 'Starts at ₹99',
        type: 'booking',
        isEmergency: true,
        review: { text: "Emergency response was incredibly fast! They arrived in 20 minutes for my pipe burst.", user: "Joydeep Majumder, Bagnan" }
    },
    
    // Blog / Resources
    {
        id: 'buying-tips',
        category: 'Resources',
        name: 'Buying Tips Blog',
        icon: 'fa-blog',
        image: 'https://images.unsplash.com/photo-1454165833767-027eeef1593e?w=300&h=300&fit=crop',
        description: 'Tips on cheapest product buying for home appliances.',
        type: 'blog'
    }
];

const BLOG_POSTS = [
    {
        id: 1,
        title: "Where to buy cheapest ACs in 2026?",
        excerpt: "Compare prices between online marketplaces and local hubs to save up to 30%.",
        image: "assets/blog_bg.png"
    },
    {
        id: 2,
        title: "Top 5 hidden markets for building materials",
        excerpt: "A guide to wholesale markets for tiles, paint, and cement.",
        image: "https://images.unsplash.com/photo-1503387762-592dea58fe21?w=400"
    }
];

let currentLang = localStorage.getItem('365home_lang') || 'en';

const I18N = {
    en: {
        services: "Services",
        buyingTips: "Buying Tips",
        howItWorks: "How it Works",
        contact: "Contact",
        exploreServices: "Explore Services",
        searchPlaceholder: "Search for AC repair, electrician, plumber...",
        searchBtn: "Search",
        whyChoose: "Why Choose 365Home?",
        verifiedExperts: "Verified Experts",
        timedServices: "Timed Services",
        transparentPricing: "Transparent Pricing",
        bookNow: "Book Now",
        getAQuote: "Get a Quote",
        callUs: "Call Us",
        contactUs: "Contact Us",
        quickLinks: "Quick Links",
        aboutUs: "About Us",
        careers: "Careers",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        instaHelp: "Insta-Help",
        whatsApp: "WhatsApp",
        langBtn: "বাংলা"
    },
    bn: {
        services: "পরিষেবা",
        buyingTips: "কেনাকাটার টিপস",
        howItWorks: "কিভাবে এটি কাজ করে",
        contact: "যোগাযোগ",
        exploreServices: "পরিষেবা অনুসন্ধান করুন",
        searchPlaceholder: "এসি মেরামত, ইলেকট্রিশিয়ান, প্লাম্বার খুঁজুন...",
        searchBtn: "খুঁজুন",
        whyChoose: "কেন 365Home বেছে নেবেন?",
        verifiedExperts: "যাচাইকৃত বিশেষজ্ঞ",
        timedServices: "সময়মতো পরিষেবা",
        transparentPricing: "স্বচ্ছ মূল্য",
        bookNow: "এখনই বুক করুন",
        getAQuote: "একটি উদ্ধৃতি নিন",
        callUs: "আমাদের কল করুন",
        contactUs: "যোগাযোগ করুন",
        quickLinks: "দ্রুত লিঙ্ক",
        aboutUs: "আমাদের সম্পর্কে",
        careers: "ক্যারিয়ার",
        terms: "পরিষেবার শর্তাবলী",
        privacy: "গোপনীয়তা নীতি",
        instaHelp: "ইনস্টা-হেল্প",
        whatsApp: "হোয়াটসঅ্যাপ",
        langBtn: "English"
    }
};

const t = (key) => {
    return I18N[currentLang][key] || key;
};
