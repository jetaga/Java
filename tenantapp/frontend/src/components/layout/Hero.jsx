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
            padding: '0', // Removed side padding for edge-to-edge look
            backgroundColor: 'var(--bg-color)',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '100%',
                aspectRatio: '16 / 6', // Increased height from 4.5 to 6
                position: 'relative',
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
                            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 30%, transparent 90%), url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '0 25px',
                            boxSizing: 'border-box',
                            zIndex: currentSlide === index ? 1 : 0
                        }}
                    >
                        <h2 style={{
                            color: '#ffffff',
                            margin: 0,
                            fontSize: '1.2rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            lineHeight: '1.2',
                            maxWidth: '70%'
                        }}>
                            {slide.title}
                        </h2>
                        <p style={{
                            color: '#ff8c00',
                            margin: '6px 0 0',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            maxWidth: '80%'
                        }}>
                            {slide.subtitle}
                        </p>
                        <div style={{
                            marginTop: '12px',
                            backgroundColor: '#ff8c00',
                            color: '#fff',
                            width: 'fit-content',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '0.65rem',
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
                    bottom: '12px',
                    right: '20px',
                    display: 'flex',
                    gap: '6px',
                    zIndex: 2
                }}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: currentSlide === index ? '14px' : '5px',
                                height: '5px',
                                borderRadius: '2.5px',
                                backgroundColor: currentSlide === index ? '#ff8c00' : 'rgba(255,255,255,0.4)',
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
