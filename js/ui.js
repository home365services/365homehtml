const UI = {
    renderHome: () => {
        const app = document.getElementById('app');
        app.innerHTML = `
            <section class="hero">
                <div class="hero-slider" id="main-slider">
                    <!-- Slides... -->
                    <div class="slide active" style="background-image: url('assets/slider_electrician_branded.png')">
                        <div class="slide-overlay"></div>
                        <div class="slide-content">
                            <h2>${currentLang === 'en' ? 'Professional Electrician Services' : 'পেশাদার ইলেকট্রিশিয়ান পরিষেবা'}</h2>
                            <div class="slide-subnote">${currentLang === 'en' ? 'Just ₹49* only' : 'মাত্র ₹৪৯* থেকে শুরু'}</div>
                            <div>
                                <button class="btn btn-primary" onclick="appRouter.navigate('service', 'electrician')">${t('bookNow')}</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="slide" style="background-image: url('assets/slider_plumber_branded.png')">
                        <div class="slide-overlay"></div>
                        <div class="slide-content">
                            <h2>${currentLang === 'en' ? 'Expert Plumbing Solutions' : 'বিশেষজ্ঞ প্লাম্বিং সমাধান'}</h2>
                            <div class="slide-subnote">${currentLang === 'en' ? 'Within 30 minutes' : '৩০ মিনিটের মধ্যে'}</div>
                            <div>
                                <button class="btn btn-primary" onclick="appRouter.navigate('service', 'plumber')">${t('bookNow')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="slide" style="background-image: url('assets/slider_ac.png'); background-position: center 20%;">
                        <div class="slide-overlay"></div>
                        <div class="slide-content">
                            <h2>${currentLang === 'en' ? 'AC Service & Repair' : 'এসি সার্ভিস ও মেরামত'}</h2>
                            <div class="slide-subnote">${currentLang === 'en' ? 'Just ₹449 only' : 'মাত্র ₹৪৪৯ মাত্র'}</div>
                            <div>
                                <button class="btn btn-primary" onclick="appRouter.navigate('service', 'ac-repair')">${t('bookNow')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="slide" style="background-image: url('assets/slider_civil.png'); background-position: center center;">
                        <div class="slide-overlay"></div>
                        <div class="slide-content">
                            <h2>${currentLang === 'en' ? 'Premium Civil Works' : 'প্রিমিয়াম সিভিল কাজ'}</h2>
                            <div class="slide-subnote">${currentLang === 'en' ? 'Build your building with engineers in MISTRI Rate' : 'মিস্ত্রির রেটে ইঞ্জিনিয়ারদের মাধ্যমে আপনার বাড়ি তৈরি করুন'}</div>
                            <div>
                                <button class="btn btn-primary" onclick="appRouter.navigate('service', 'civil-works')">${t('getAQuote')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="slide" style="background-image: url('assets/service_ev_motorcycle_final.png'); background-position: center center;">
                        <div class="slide-overlay"></div>
                        <div class="slide-content">
                            <h2>${currentLang === 'en' ? 'Problem in Electric Scooty?' : 'ইলেকট্রিক স্কুটিতে সমস্যা?'}</h2>
                            <div class="slide-subnote">${currentLang === 'en' ? 'just 1 call and we will be there' : 'মাত্র ১টি কল, আর আমরা পৌঁছে যাব'}</div>
                            <div>
                                <button class="btn btn-primary" onclick="appRouter.navigate('service', 'ev-service')">${t('bookNow')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="slide" style="background-image: url('assets/slider_tiles.png')">
                        <div class="slide-overlay"></div>
                        <div class="slide-content">
                            <h2>${currentLang === 'en' ? 'Marbel & Tiles - Perfect fittings than Anyone' : 'মার্বেল ও টাইলস - সবার চেয়ে নিখুঁত ফিটিং'}</h2>
                            <div class="slide-subnote">${currentLang === 'en' ? 'Expert Masonry' : 'বিশেষজ্ঞ রাজমিস্ত্রি'}</div>
                            <div>
                                <button class="btn btn-primary" onclick="appRouter.navigate('service', 'tiles-installation')">${t('bookNow')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="slide" style="background-image: url('assets/slider_appliance.png')">
                        <div class="slide-overlay"></div>
                        <div class="slide-content">
                            <h2>${currentLang === 'en' ? 'Repair Home Appliance' : 'হোম অ্যাপ্লায়েন্স মেরামত'}</h2>
                            <div class="slide-subnote">${currentLang === 'en' ? 'Just ₹20*' : 'মাত্র ₹২০*'}</div>
                            <div>
                                <button class="btn btn-primary" onclick="appRouter.navigate('services')">${t('bookNow')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="slider-controls">
                        <div class="slider-dot active" data-index="0"></div>
                        <div class="slider-dot" data-index="1"></div>
                        <div class="slider-dot" data-index="2"></div>
                        <div class="slider-dot" data-index="3"></div>
                        <div class="slider-dot" data-index="4"></div>
                        <div class="slider-dot" data-index="5"></div>
                        <div class="slider-dot" data-index="6"></div>
                    </div>
                </div>
            </section>

            <div class="search-strip">
                <div class="container">
                    <div class="search-container">
                        <input type="text" id="service-search-input" class="search-input" placeholder="${t('searchPlaceholder')}">
                        <div class="location-pick">
                            <i class="fas fa-location-dot"></i>
                            <span>Uluberia, WB</span>
                        </div>
                        <button class="btn btn-primary" onclick="UI.filterServices()">${t('searchBtn')}</button>
                    </div>
                </div>
            </div>

            <section class="container services-section" id="services">
                <div class="section-header">
                    <div>
                        <h2 class="section-title">${t('exploreServices')}</h2>
                        <p>${currentLang === 'en' ? '17+ Categories to help you manage your home better.' : 'আপনার ঘরকে আরও ভালোভাবে পরিচালনা করতে ১৭টিরও বেশি বিভাগ।'}</p>
                    </div>
                    <div class="filter-tabs">
                        <!-- Potential for filters here -->
                    </div>
                </div>
                <div class="category-grid" id="service-grid">
                    ${SERVICES.filter(s => s.type !== 'blog').map(service => `
                        <div class="category-card" onclick="appRouter.navigate('service', '${service.id}')">
                            ${service.isEmergency ? '<span class="badge">URGENT</span>' : ''}
                            <div class="category-photo" style="background-image: url('${service.image}')"></div>
                            <div class="category-info">
                                <h3>${currentLang === 'en' ? service.name : (service.name_bn || service.name)}</h3>
                                <div class="category-price">${service.price}</div>
                                <div class="btn btn-primary" style="padding: 5px 10px; font-size: 0.7rem; margin-top: 5px;" 
                                     onclick="event.stopPropagation(); UI.bookOnWhatsApp('${currentLang === 'en' ? service.name : (service.name_bn || service.name)}')">
                                    ${t('bookNow')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: 50px;">
                    <button class="btn btn-secondary" onclick="appRouter.navigate('services')">
                        ${currentLang === 'en' ? 'View All Services' : 'সব পরিষেবা দেখুন'} 
                        <i class="fas fa-arrow-right" style="margin-left: 10px;"></i>
                    </button>
                </div>
            </section>

            <section class="recent-works-section">
                <div class="container">
                    <div class="section-header" style="text-align: center; justify-content: center; margin-bottom: 40px;">
                        <div>
                            <h2 class="section-title">Our Recent Works</h2>
                            <p>${currentLang === 'en' ? 'Quality and excellence delivered in every project.' : 'প্রতিটি প্রকল্পে মানসম্পন্ন এবং চমৎকার কাজ সরবরাহ করা হয়েছে।'}</p>
                        </div>
                    </div>
                    <div class="works-slider-container">
                        <div class="works-slider" id="works-slider">
                            <div class="work-slide"><img src="assets/ac.png" alt="AC Work"></div>
                            <div class="work-slide"><img src="assets/chad.png" alt="Chad Work"></div>
                            <div class="work-slide"><img src="assets/civil.png" alt="Civil Work"></div>
                            <div class="work-slide"><img src="assets/electrician.png" alt="Electrician Work"></div>
                            <div class="work-slide"><img src="assets/maid.png" alt="Maid Work"></div>
                            <div class="work-slide"><img src="assets/marbel.png" alt="Marbel Work"></div>
                            <div class="work-slide"><img src="assets/painting.png" alt="Painting Work"></div>
                            <div class="work-slide"><img src="assets/pipe.png" alt="Pipe Work"></div>
                            <div class="work-slide"><img src="assets/putti.png" alt="Putti Work"></div>
                            <div class="work-slide"><img src="assets/tiles.png" alt="Tiles Work"></div>
                            <div class="work-slide"><img src="assets/toilet.png" alt="Toilet Work"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features-section">
                <div class="container">
                    <div class="section-header" style="justify-content: center; text-align: center; margin-bottom: 60px;">
                        <div>
                            <h2 class="section-title">${t('whyChoose')}</h2>
                            <p>${currentLang === 'en' ? 'We ensure quality and safety in every visit.' : 'আমরা প্রতিটি ভিজিটে গুণমান এবং নিরাপত্তা নিশ্চিত করি।'}</p>
                        </div>
                    </div>
                    <div class="features-grid">
                        <div class="feature-item">
                            <i class="fas fa-shield-halved"></i>
                            <h3>${t('verifiedExperts')}</h3>
                            <p>${currentLang === 'en' ? 'Background checked and certified professionals for your peace of mind.' : 'আপনার মানসিক শান্তির জন্য ব্যাকগ্রাউন্ড যাচাইকৃত এবং প্রত্যয়িত পেশাদার।'}</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-clock"></i>
                            <h3>${t('timedServices')}</h3>
                            <p>${currentLang === 'en' ? 'We value your time. Guaranteed on-time arrival for every booking.' : 'আমরা আপনার সময়ের মূল্য দিই। প্রতিটি বুকিংয়ের জন্য সময়মতো আগমনের গ্যারান্টি।'}</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-indian-rupee-sign"></i>
                            <h3>${t('transparentPricing')}</h3>
                            <p>${currentLang === 'en' ? 'No hidden charges. Upfront pricing before we start the work.' : 'কোনো লুকানো চার্জ নেই। কাজ শুরু করার আগে সরাসরি মূল্য নির্ধারণ।'}</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
        window.scrollTo(0,0);
        UI.initSlider();
        UI.initWorksSlider();
        UI.updateWhatsAppMessage('Home');
    },

    initWorksSlider: () => {
        const slider = document.getElementById('works-slider');
        if (!slider) return;

        // Clone slides for infinite loop effect
        const slides = Array.from(slider.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            slider.appendChild(clone);
        });

        // Simple CSS animation fallback or JS interval
        let scrollAmount = 0;
        const step = () => {
            scrollAmount += 1;
            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
            }
            slider.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(step);
        };
        
        requestAnimationFrame(step);
    },

    initSlider: () => {
        const slider = document.getElementById('main-slider');
        if (!slider) return;

        const slides = slider.querySelectorAll('.slide');
        const dots = slider.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        let slideInterval;

        const goToSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        const nextSlide = () => {
            let next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        };

        const startAutoPlay = () => {
            slideInterval = setInterval(nextSlide, 5000);
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                goToSlide(index);
                startAutoPlay();
            });
        });

        startAutoPlay();
    },

    filterServices: () => {
        const query = document.getElementById('service-search-input').value.toLowerCase();
        const filtered = SERVICES.filter(s => 
            s.type !== 'blog' && (s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query))
        );
        
        const grid = document.getElementById('service-grid');
        grid.innerHTML = filtered.map(service => `
            <div class="category-card" onclick="appRouter.navigate('service', '${service.id}')">
                ${service.isEmergency ? '<span class="badge">URGENT</span>' : ''}
                <div class="category-photo" style="background-image: url('${service.image}')"></div>
                <div class="category-info">
                    <h3>${currentLang === 'en' ? service.name : (service.name_bn || service.name)}</h3>
                    <div class="category-price">${service.price}</div>
                    <div class="btn btn-primary" style="padding: 5px 10px; font-size: 0.7rem; margin-top: 5px;" 
                         onclick="event.stopPropagation(); UI.bookOnWhatsApp('${currentLang === 'en' ? service.name : (service.name_bn || service.name)}')">
                        ${t('bookNow')}
                    </div>
                </div>
            </div>
        `).join('');
        
        if (filtered.length === 0) {
            grid.innerHTML = `<div style="text-align: center; grid-column: 1/-1; padding: 50px;">No services found for "${query}". Try searching "Plumber" or "AC".</div>`;
        }
    },

    renderServiceDetail: (serviceId) => {
        const service = SERVICES.find(s => s.id === serviceId);
        if (!service) return UI.renderHome();

        const app = document.getElementById('app');
        const isQuote = service.id === 'civil-works' || service.id === 'house-building-plan' || service.type === 'quote';

        app.innerHTML = `
            <div class="service-header">
                <div class="container">
                    <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 10px; opacity: 0.8;">${currentLang === 'en' ? service.category : 'কারিগরি'}</p>
                    <h1>${currentLang === 'en' ? service.name : (service.name_bn || service.name)}</h1>
                    <p>${currentLang === 'en' ? service.description : (service.description_bn || service.description)}</p>
                </div>
            </div>

            <div class="container booking-container">
                <div class="service-info">
                    <h2 style="margin-bottom: 25px;">What's Included</h2>
                    <ul class="checklist" style="margin-bottom: 40px;">
                        <li style="margin-bottom: 15px;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 15px;"></i> Professional background-checked technician</li>
                        <li style="margin-bottom: 15px;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 15px;"></i> Standard material assessment included</li>
                        <li style="margin-bottom: 15px;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 15px;"></i> 30-day service warranty</li>
                        <li style="margin-bottom: 15px;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 15px;"></i> Damage protection up to ₹10,000</li>
                    </ul>

                    <h2 style="margin-bottom: 25px;">Customer Reviews</h2>
                    <div style="background: var(--white); padding: 30px; border-radius: var(--radius); border: 1px solid var(--border);">
                        <p style="margin-bottom: 10px; font-weight: 700;">"${service.review ? service.review.text : 'Excellent service, arrived on time and fixed my problem in no time. Highly recommended!'}"</p>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="color: #ffb100;">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">- ${service.review ? service.review.user : 'Rahul Sharma, Dwarka'}</span>
                        </div>
                    </div>
                </div>

                <div class="booking-card">
                    <div class="price-tag">
                        ${service.price === 'Custom Quote' ? 'Free Quote' : service.price}
                    </div>
                    <p style="margin-bottom: 30px; color: var(--text-muted);">Secure your slot for a professional visit.</p>
                    
                    <form id="booking-form">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-control" placeholder="E.g. John Doe" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" placeholder="+91 XXX XXXXXXX" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Full Address</label>
                            <textarea class="form-control" id="booking-address" rows="2" placeholder="Street, Building, Landmark..." required></textarea>
                        </div>
                        
                        ${isQuote ? `
                            <div class="form-group">
                                <label class="form-label">Project Details</label>
                                <textarea class="form-control" rows="4" placeholder="Briefly describe your requirement..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px;">Request a Quote</button>
                        ` : `
                            <div class="form-group">
                                <label class="form-label">Schedule Visit</label>
                                <select class="form-control" id="schedule-type" required onchange="UI.toggleSpecificDate(this.value)">
                                    <option value="Today">Today</option>
                                    <option value="Tomorrow">Tomorrow</option>
                                    <option value="Specific">Enter specific date</option>
                                </select>
                            </div>
                            <div class="form-group" id="specific-date-group" style="display: none;">
                                <label class="form-label">Pick Date</label>
                                <input type="date" class="form-control" id="specific-date">
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px;">Book Now</button>
                        `}
                    </form>
                    <div style="text-align: center; margin-top: 20px; font-size: 0.85rem; color: var(--text-muted);">
                        <i class="fas fa-lock"></i> SSL Secured Payment available
                    </div>
                </div>
            </div>
        `;
        window.scrollTo(0,0);
        UI.updateWhatsAppMessage(service.name);
        
        document.getElementById('booking-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = e.target.querySelector('input[type="text"]').value;
            const phone = e.target.querySelector('input[type="tel"]').value;
            const address = document.getElementById('booking-address').value;
            const scheduleType = document.getElementById('schedule-type')?.value || 'N/A';
            const specificDate = document.getElementById('specific-date')?.value || '';
            
            const schedule = scheduleType === 'Specific' ? specificDate : scheduleType;
            
            const ownerNumber = "919103826966";
            const message = `*NEW SERVICE BOOKING*\n\n*Service:* ${service.name}\n*Customer:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n*Schedule:* ${schedule}`;
            
            window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, '_blank');
            
            alert('Your request has been submitted via WhatsApp! We will contact you shortly.');
            appRouter.navigate('home');
        });
    },

    renderBlog: () => {
        const app = document.getElementById('app');
        app.innerHTML = `
            <section class="container" style="padding: 80px 0;">
                <h1 style="font-size: 3rem; margin-bottom: 10px;">Buying Tips</h1>
                <p style="margin-bottom: 50px; color: var(--text-muted);">Save money with our expert guides on buying home products.</p>
                
                <div class="blog-grid">
                    ${BLOG_POSTS.map(post => `
                        <div class="blog-card">
                            <div class="blog-img" style="background-image: url('${post.image}')"></div>
                            <div class="blog-content">
                                <h3>${post.title}</h3>
                                <p style="color: var(--text-muted); margin: 15px 0;">${post.excerpt}</p>
                                <a href="#" class="btn btn-secondary" style="display: inline-block;">Read more</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
        window.scrollTo(0,0);
        UI.updateWhatsAppMessage('Buying Tips');
    },

    renderServices: (filterCategory = 'All') => {
        const app = document.getElementById('app');
        const categories = ['All', ...new Set(SERVICES.filter(s => s.type !== 'blog').map(s => s.category))];
        const filteredServices = filterCategory === 'All' 
            ? SERVICES.filter(s => s.type !== 'blog')
            : SERVICES.filter(s => s.category === filterCategory);

        app.innerHTML = `
            <div class="services-page-header">
                <div class="container">
                    <h1 class="section-title">${t('exploreServices')}</h1>
                    <p>${currentLang === 'en' ? 'Choose from our range of 17+ professional home services.' : 'আমাদের ১৭টিরও বেশি পেশাদার হোম সার্ভিসের পরিসর থেকে বেছে নিন।'}</p>
                </div>
            </div>

            <div class="services-filter-bar">
                <div class="container">
                    <div class="filter-pills">
                        ${categories.map(cat => `
                            <div class="filter-pill ${cat === filterCategory ? 'active' : ''}" 
                                 onclick="UI.renderServices('${cat}')">
                                ${cat}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="container services-grid-container">
                <div class="services-count">
                    Showing ${filteredServices.length} services ${filterCategory !== 'All' ? `in ${filterCategory}` : ''}
                </div>
                <div class="category-grid">
                    ${filteredServices.map(service => `
                        <div class="premium-card" onclick="appRouter.navigate('service', '${service.id}')">
                            <div class="premium-card-img" style="background-image: url('${service.image}')">
                                ${service.isEmergency ? '<span class="badge">URGENT</span>' : ''}
                            </div>
                            <div class="premium-card-content">
                                <div class="premium-card-category">${service.category}</div>
                                <h3 class="premium-card-title">${currentLang === 'en' ? service.name : (service.name_bn || service.name)}</h3>
                                <p class="premium-card-desc">${currentLang === 'en' ? service.description : (service.description_bn || service.description)}</p>
                                <div class="premium-card-footer" style="justify-content: center;">
                                    <div class="premium-card-btn" onclick="event.stopPropagation(); UI.bookOnWhatsApp('${currentLang === 'en' ? service.name : (service.name_bn || service.name)}')">
                                        ${t('bookNow')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        window.scrollTo(0,0);
        UI.updateWhatsAppMessage('Services');
    },

    updateWhatsAppMessage: (context) => {
        const waBtn = document.getElementById('floating-whatsapp');
        if (!waBtn) return;
        
        const number = "916289929656";
        let message = `Hi, I'm interested in your services on 365Home`;
        
        if (context === 'Home') {
            message = `Hi, I want to book a home service from 365Home`;
        } else if (context === 'Buying Tips') {
            message = `Hi, I need some expert buying tips for home services from 365Home`;
        } else {
            message = `Hi, I want ${context} service from 365Home`;
        }
        
        waBtn.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    },

    renderContact: () => {
        const app = document.getElementById('app');
        app.innerHTML = `
            <section class="hero-static" style="background-image: url('assets/telecallers_indian.png');">
                <div class="slide-overlay" style="background: linear-gradient(rgba(102, 0, 51, 0.7), rgba(102, 0, 51, 0.5));"></div>
                <div class="container contact-hero-content" style="position: relative; z-index: 5; color: var(--white);">
                    <h1 style="font-size: 3.5rem; margin-bottom: 20px;">We're Here to Help</h1>
                    <p style="font-size: 1.25rem; max-width: 600px;">Our dedicated support team is available 24/7 to ensure your home service experience is seamless and professional.</p>
                </div>
            </section>

            <section class="container" style="padding: 80px 0;">
                <div style="text-align: center; margin-bottom: 60px;">
                    <h2 class="section-title">${t('contact')}</h2>
                    <p>${currentLang === 'en' ? 'Get in touch with us for any queries or support.' : 'যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।'}</p>
                </div>

                <div class="booking-container">
                    <div class="contact-details">
                        <div style="margin-bottom: 40px;">
                            <h2 style="margin-bottom: 20px;">Contact Information</h2>
                            <div style="display: flex; flex-direction: column; gap: 20px;">
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="width: 50px; height: 50px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary);">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700;">Phone</div>
                                        <div style="color: var(--text-muted);">+91 9103826966</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="width: 50px; height: 50px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary);">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700;">Email</div>
                                        <div style="color: var(--text-muted);">help@365home.in</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="width: 50px; height: 50px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary);">
                                        <i class="fas fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700;">Corporate Office</div>
                                        <div style="color: var(--text-muted);">New Delhi, India</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="width: 50px; height: 50px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary);">
                                        <i class="fas fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700;">Regional Office</div>
                                        <div style="color: var(--text-muted);">Uluberia, Howrah, WB</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: var(--bg-light); padding: 30px; border-radius: var(--radius); border: 1px solid var(--border);">
                            <h3 style="margin-bottom: 15px;">Working Hours</h3>
                            <p style="margin-bottom: 5px;"><strong>Monday - Saturday:</strong> 08:00 AM - 08:00 PM</p>
                            <p><strong>Sunday:</strong> 09:00 AM - 06:00 PM</p>
                            <p style="margin-top: 15px; color: var(--primary); font-weight: 600;">24/7 Emergency support available via Insta-Help</p>
                        </div>
                    </div>

                    <div class="booking-card">
                        <h2 style="margin-bottom: 30px;">Send us a message</h2>
                        <form id="contact-form">
                            <div class="form-group">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" placeholder="Your name" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Your email address" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Subject</label>
                                <input type="text" class="form-control" placeholder="What can we help you with?" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Message</label>
                                <textarea class="form-control" rows="5" placeholder="Tell us more about your inquiry..." required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px;">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        `;
        window.scrollTo(0,0);
        UI.updateWhatsAppMessage('Contact');

        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you within 24 hours.');
            appRouter.navigate('home');
        });
    },

    bookOnWhatsApp: (serviceName) => {
        const number = "916289929656";
        const message = `Hi, I want ${serviceName} service from 365Home`;
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
    },

    toggleSpecificDate: (value) => {
        const group = document.getElementById('specific-date-group');
        const input = document.getElementById('specific-date');
        if (value === 'Specific') {
            group.style.display = 'block';
            input.required = true;
        } else {
            group.style.display = 'none';
            input.required = false;
        }
    }
};
