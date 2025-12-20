import React, { useState } from 'react';
import { Home, PlayCircle, PlusCircle, Layers, User } from 'lucide-react';

const BottomNav = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const navItems = [
        { label: 'Home', icon: <Home size={22} /> },
        { label: 'Tubeshop', icon: <PlayCircle size={22} /> },
        { label: 'Create', icon: <PlusCircle size={28} />, isSpecial: true },
        { label: 'Categories', icon: <Layers size={22} /> },
        { label: 'Me', icon: <User size={22} /> },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '52px',
            backgroundColor: 'var(--bg-color)', // Pure Black in Dark Mode
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderTop: '1px solid var(--border-color)',
            zIndex: 9999,
            paddingBottom: 'env(safe-area-inset-bottom)',
            transition: 'background-color 0.3s ease'
        }}>
            {navItems.map((item, index) => {
                const isActive = activeTab === item.label;
                
                // YouTube Style Colors:
                // Dark Mode: Active = White (#FFFFFF), Inactive = Ash (#94a3b8)
                // Light Mode: Active = Black (#000000), Inactive = Ash (#64748b)
                const mainColor = isActive ? 'var(--text-color)' : 'var(--text-muted)';

                return (
                    <div
                        key={index}
                        onClick={() => setActiveTab(item.label)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                            cursor: 'pointer',
                            height: '100%',
                            gap: '2px'
                        }}
                    >
                        <div style={{ 
                            color: mainColor,
                            transition: 'color 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {React.cloneElement(item.icon, { 
                                strokeWidth: isActive ? 2.5 : 2,
                                fill: (isActive && item.label !== 'Create') ? 'currentColor' : 'none' 
                            })}
                        </div>
                        
                        {!item.isSpecial && (
                            <span style={{ 
                                fontSize: '10px', 
                                fontWeight: isActive ? '600' : '400',
                                color: mainColor,
                                transition: 'color 0.2s ease'
                            }}>
                                {item.label}
                            </span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default BottomNav;
