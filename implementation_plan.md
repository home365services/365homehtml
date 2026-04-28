# 365home.in - Platform Implementation Plan

Building a premium multi-category service marketplace using Vanilla Web technologies (HTML5, CSS3, ES6+ JS).

## 1. Design System (Blue & White)
- **Primary Color**: #0056b3 (Deep Trust Blue)
- **Secondary Color**: #00a8e8 (Action Blue)
- **Background**: #f8f9fa (Clean White/Gray)
- **Typography**: 'Inter' or 'Outfit' from Google Fonts.
- **Components**: Cards with glassmorphism touches, premium hover effects, and smooth transitions.

## 2. Core Features
- **SPA Routing**: Vanilla JS router to handle different views (Home, Service Details, Blog, Dashboard).
- **Service Directory**: Data-driven rendering of the 17 categories.
- **Booking System**: 
    - Standard services: Real-time calendar picker + payment flow.
    - Civil/Building: Quote request form.
- **Insta-Help**: Persistent floating emergency button with proximity logic (mocked).
- **Payment Gateway**: Simulated integration (Razorpay/Stripe UI mockups).
- **Admin Panel**: Client-side dashboard for managing logs and status.

## 3. Page Structure
- **Home**: Search, Category Grid, How it Works, Testimonials.
- **Category Details**: Filterable list, pricing info.
- **Blog**: "Cheapest Product Buying Tips" articles.
- **Dashboard**: Tabbed interface for Providers/Admin.

## 4. Technical Roadmap
1. [ ] Project initialization and basic layout.
2. [ ] Global Styling and Typography.
3. [ ] Category Data Integration.
4. [ ] Homepage & Grid UI.
5. [ ] Service Detail & Booking Flow.
6. [ ] Insta-Help & Search functionality.
7. [ ] Blog & Admin Dashboard UI.
8. [ ] Polish & Mobile Response.
