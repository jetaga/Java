import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
            title: "Launch Your Shop",
            subtitle: "Own this Web App for just $10/month"
        },
        {
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
            title: "SaaS Business Model",
            subtitle: "Fully Managed Multi-tenant Platform"
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
            title: "Scale Instantly",
            subtitle: "Build, Test, and Push to Production"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section style={{
            width: '100%',
            padding: '10px 12px 0 12px',
            backgroundColor: 'var(--bg-color)',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '100%',
                aspectRatio: '16 / 4.5', // Reduced height for slim banner look
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#1a1a1a',
            }}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'opacity 0.6s ease-in-out',
                            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 80%), url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '0 20px',
                            boxSizing: 'border-box',
                            zIndex: currentSlide === index ? 1 : 0
                        }}
                    >
                        <h2 style={{
                            color: '#ffffff',
                            margin: 0,
                            fontSize: '1rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            lineHeight: '1.2',
                            maxWidth: '60% '
                        }}>
                            {slide.title}
                        </h2>
                        <p style={{
                            color: '#ff8c00', // Soft orange to match Lightning Deals
                            margin: '4px 0 0',
                            fontSize: '0.7rem',
                            fontWeight: '700',
                            maxWidth: '70%'
                        }}>
                            {slide.subtitle}
                        </p>
                        <div style={{
                            marginTop: '8px',
                            backgroundColor: '#ff8c00',
                            color: '#fff',
                            width: 'fit-content',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.6rem',
                            fontWeight: '900',
                            textTransform: 'uppercase'
                        }}>
                            Get Started >
                        </div>
                    </div>
                ))}

                {/* Navigation Indicators */}
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '15px',
                    display: 'flex',
                    gap: '4px',
                    zIndex: 2
                }}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: currentSlide === index ? '12px' : '4px',
                                height: '3px',
                                borderRadius: '2px',
                                backgroundColor: currentSlide === index ? '#ff8c00' : 'rgba(255,255,255,0.3)',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
