const appRouter = {
    currentRoute: 'home',
    params: null,

    init: () => {
        // Handle initial load
        appRouter.handleRoute();

        // Logo click
        const homeLink = document.getElementById('home-link');
        if (homeLink) {
            homeLink.addEventListener('click', () => {
                appRouter.navigate('home');
            });
        }

        // Floating Emergency
        const floatEmergency = document.getElementById('floating-emergency');
        if (floatEmergency) {
            floatEmergency.addEventListener('click', (e) => {
                e.preventDefault();
                appRouter.navigate('service', 'insta-help');
            });
        }

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = menuToggle.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            });
        }

        // Navigation links (Delegated for better performance and dynamic support)
        document.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-item');
            if (link) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (menuToggle) menuToggle.querySelector('i').className = 'fas fa-bars';
                }

                const href = link.getAttribute('href');
                if (href === '#services') appRouter.navigate('services');
                else if (href === '#blog') appRouter.navigate('blog');
                else if (href === '#contact') appRouter.navigate('contact');
                else if (href === '#about') {
                    appRouter.navigate('home');
                    setTimeout(() => {
                        const target = document.querySelector('.features-section');
                        if (target) window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
                    }, 100);
                }
            }
        });

        // Language Toggle
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                currentLang = currentLang === 'en' ? 'bn' : 'en';
                localStorage.setItem('365home_lang', currentLang);
                appRouter.updateStaticUI();
                appRouter.handleRoute();
            });
        }

        appRouter.updateStaticUI();

        // Promo Banner Logic
        appRouter.initPromoBanner();

        // Footer Services
        const footerList = document.getElementById('footer-service-list');
        if (footerList) {
            SERVICES.slice(0, 5).forEach(s => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#">${s.name}</a>`;
                li.onclick = () => appRouter.navigate('service', s.id);
                footerList.appendChild(li);
            });
        }
    },

    updateStaticUI: () => {
        // Buttons
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) langToggle.textContent = t('langBtn');
        
        // Nav Links (Refresh for translations)
        document.querySelectorAll('.nav-item').forEach(item => {
            const href = item.getAttribute('href');
            if (href === '#services') item.textContent = t('services');
            if (href === '#blog') item.textContent = t('buyingTips');
            if (href === '#about') item.textContent = t('howItWorks');
            if (href === '#contact') item.textContent = t('contact');
        });
        
        // Footer Headings
        const footerHeadings = document.querySelectorAll('#main-footer h4');
        if (footerHeadings[0]) footerHeadings[0].textContent = t('services');
        if (footerHeadings[1]) footerHeadings[1].textContent = t('quickLinks');
        if (footerHeadings[2]) footerHeadings[2].textContent = t('contactUs');

        // Footer Quick Links
        const quickLinks = document.querySelectorAll('.footer-links ul li a');
        if (quickLinks[5]) quickLinks[5].textContent = t('aboutUs');
        if (quickLinks[6]) quickLinks[6].textContent = t('careers');
        if (quickLinks[7]) quickLinks[7].textContent = t('terms');
        if (quickLinks[8]) quickLinks[8].textContent = t('privacy');

        // Floating Buttons
        const emergencySpan = document.querySelector('#floating-emergency span');
        if (emergencySpan) emergencySpan.textContent = t('instaHelp');
        
        const whatsappSpan = document.querySelector('#floating-whatsapp span');
        if (whatsappSpan) whatsappSpan.textContent = t('whatsApp');
    },

    navigate: (route, params = null) => {
        // Update URL first so handleRoute reads the new hash
        const newHash = `#${route}${params ? '/' + params : ''}`;
        window.history.pushState({route, params}, '', newHash);
        
        appRouter.currentRoute = route;
        appRouter.params = params;
        appRouter.handleRoute();
    },

    handleRoute: () => {
        const hash = window.location.hash || '#home';
        const parts = hash.replace('#', '').split('/');
        const route = parts[0];
        const params = parts[1] || null;
        
        // Highlight active nav item
        appRouter.updateActiveNav(route);

        // Simple View Switching
        switch(route) {
            case 'home':
                UI.renderHome();
                break;
            case 'services':
                UI.renderServices();
                break;
            case 'service':
                UI.renderServiceDetail(params);
                break;
            case 'blog':
                UI.renderBlog();
                break;
            case 'contact':
                UI.renderContact();
                break;
            case 'admin':
                UI.renderAdmin();
                break;
            default:
                UI.renderHome();
        }
    },

    updateActiveNav: (route) => {
        document.querySelectorAll('.nav-item').forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('active');
            if (route === 'services' && href === '#services') link.classList.add('active');
            if (route === 'blog' && href === '#blog') link.classList.add('active');
            if (route === 'contact' && href === '#contact') link.classList.add('active');
        });
    },

    // New render method for Admin Panel
    renderAdmin: () => {
        const app = document.getElementById('app');
        if (!app) return;
        app.innerHTML = `
            <section class="container" style="padding: 80px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
                    <h1>Admin Dashboard</h1>
                    <button class="btn btn-secondary" onclick="appRouter.navigate('home')">Logout</button>
                </div>
                
                <div style="background: var(--white); border-radius: var(--radius); padding: 40px; box-shadow: var(--shadow);">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px;">
                        <div style="background: var(--primary-light); padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 2rem; font-weight: 800; color: var(--primary);">24</div>
                            <div style="font-size: 0.9rem; color: var(--primary);">Today's Requests</div>
                        </div>
                        <div style="background: #e6fffa; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 2rem; font-weight: 800; color: #2d3748;">₹15,400</div>
                            <div style="font-size: 0.9rem; color: #2d3748;">Revenue (MTD)</div>
                        </div>
                        <div style="background: #fff5f5; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 2rem; font-weight: 800; color: var(--accent);">3</div>
                            <div style="font-size: 0.9rem; color: var(--accent);">Pending Verifications</div>
                        </div>
                    </div>

                    <h3 style="margin-bottom: 20px;">Recent Bookings</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="text-align: left; border-bottom: 2px solid var(--bg-light);">
                                <th style="padding: 15px;">ID</th>
                                <th style="padding: 15px;">Service</th>
                                <th style="padding: 15px;">Customer</th>
                                <th style="padding: 15px;">Status</th>
                                <th style="padding: 15px;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--bg-light);">
                                <td style="padding: 15px;">#BK-1204</td>
                                <td style="padding: 15px;">AC Repair</td>
                                <td style="padding: 15px;">Amit Verma</td>
                                <td style="padding: 15px;"><span style="background: #e6f0ff; color: var(--primary); padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">Scheduled</span></td>
                                <td style="padding: 15px;"><button class="btn btn-secondary" style="padding: 5px 15px;">View</button></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--bg-light);">
                                <td style="padding: 15px;">#BK-1205</td>
                                <td style="padding: 15px;">Insta-Help</td>
                                <td style="padding: 15px;">Sonia Roy</td>
                                <td style="padding: 15px;"><span style="background: #fffaf0; color: #9b2c2c; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">Urgent</span></td>
                                <td style="padding: 15px;"><button class="btn btn-secondary" style="padding: 5px 15px;">Dispatch</button></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--bg-light);">
                                <td style="padding: 15px;">#BK-1206</td>
                                <td style="padding: 15px;">Cleaning</td>
                                <td style="padding: 15px;">Arjun Singh</td>
                                <td style="padding: 15px;"><span style="background: #f0fff4; color: #276749; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">Completed</span></td>
                                <td style="padding: 15px;"><button class="btn btn-secondary" style="padding: 5px 15px;">Invoice</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        `;
    },

    initPromoBanner: () => {
        const promoModal = document.getElementById('promo-banner');
        const promoTrigger = document.getElementById('promo-trigger');
        const closeBtn = document.getElementById('close-promo');
        const timerDisplay = document.getElementById('timer-display');
        const startClaimBtn = document.getElementById('start-claim');
        const claimForm = document.getElementById('promo-claim-form');
        const initialState = document.getElementById('promo-initial-state');
        const successState = document.getElementById('promo-success');
        
        if (!promoModal || !promoTrigger) return;

        // Show trigger after 2 seconds delay
        setTimeout(() => {
            if (!sessionStorage.getItem('promo_shown')) {
                promoTrigger.style.display = 'flex';
                appRouter.startPromoTimer(30 * 60, timerDisplay);
            }
        }, 2000);

        // Clicking trigger shows the modal
        promoTrigger.addEventListener('click', () => {
            promoModal.classList.add('active');
            promoTrigger.style.display = 'none'; // Hide trigger when modal is open
            sessionStorage.setItem('promo_shown', 'true');
        });

        // Transition to Form
        if (startClaimBtn) {
            startClaimBtn.addEventListener('click', () => {
                if (initialState) initialState.style.display = 'none';
                if (claimForm) claimForm.style.display = 'block';
            });
        }
        
        // ... rest of the logic remains same ...
        if (claimForm) {
            claimForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('promo-name').value;
                const whatsapp = document.getElementById('promo-whatsapp').value;
                const address = document.getElementById('promo-address').value;
                const randomCode = Math.floor(100000 + Math.random() * 900000);
                const coupon = `365h${randomCode}`;
                const couponDisplay = document.getElementById('coupon-code');
                if (couponDisplay) couponDisplay.textContent = coupon;
                claimForm.style.display = 'none';
                if (successState) successState.style.display = 'block';
                const ownerNumber = "919103826966";
                const message = `*NEW PROMO CLAIM*\n\n*Name:* ${name}\n*WhatsApp:* ${whatsapp}\n*Address:* ${address}\n*Coupon:* ${coupon}`;
                setTimeout(() => {
                    window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, '_blank');
                }, 1500);
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                promoModal.classList.remove('active');
                // Re-show trigger if they closed it without finishing? 
                // Let's keep it hidden if they close it, or show it again.
                // User said "when anyone click on this the details will shown", 
                // so maybe we should show it again if they close.
                promoTrigger.style.display = 'flex';
            });
        }
    },

    startPromoTimer: (duration, display) => {
        if (!display) return;
        let timer = duration, minutes, seconds;
        const interval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                display.textContent = "00:00";
                const expiryText = document.querySelector('.promo-timer p');
                if (expiryText) expiryText.textContent = "Offer Expired";
            }
        }, 1000);
    }
};

// Initial routing
window.addEventListener('popstate', appRouter.handleRoute);
document.addEventListener('DOMContentLoaded', appRouter.init);
