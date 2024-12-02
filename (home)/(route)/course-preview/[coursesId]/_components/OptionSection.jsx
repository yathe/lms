import React from 'react';
import Image from 'next/image';
import './CoursePreview.css'; // Import the CSS file

const OptionSection = () => {
    const optionsList = [
        {
            id: 1,
            name: "Github",
            icon: "/github-sign.png"
        },
        {
            id: 2,
            name: "Youtube",
            icon: "/youtube.png"
        },
        {
            id: 3,
            name: "Demo",
            icon: "/demo.png"
        },
    ];

    return (
        <div className="option-section">
            {optionsList.map((option) => (
                <div key={option.id} className="option-item">
                    <Image src={option.icon} width={30} height={30} alt={`${option.name} icon`} />
                    <h2>{option.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default OptionSection;
