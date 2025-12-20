import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
            title: "Summer Collection",
            subtitle: "Up to 50% Off"
        },
        {
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
            title: "Tech Essentials",
            subtitle: "Premium Gadgets"
        },
        {
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099",
            title: "New Arrivals",
            subtitle: "Explore curated items"
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
            padding: '12px 12px 0 12px',
            backgroundColor: 'var(--bg-color)',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '100%',
                aspectRatio: '16 / 8', // Keeps it perfectly responsive on all phones
                position: 'relative',
                borderRadius: '12px',
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
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 10%, transparent 60%), url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '15px',
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
                            lineHeight: '1'
                        }}>
                            {slide.title}
                        </h2>
                        <p style={{ 
                            color: 'rgba(255,255,255,0.8)', 
                            margin: '4px 0 0', 
                            fontSize: '0.75rem',
                            fontWeight: '500'
                        }}>
                            {slide.subtitle}
                        </p>
                    </div>
                ))}

                {/* Navigation Indicators */}
                <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    display: 'flex',
                    gap: '4px',
                    zIndex: 2
                }}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: currentSlide === index ? '16px' : '4px',
                                height: '4px',
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
