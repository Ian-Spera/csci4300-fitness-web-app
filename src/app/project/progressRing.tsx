import React from "react";

interface ProgressRingsProps {
    progress: number;
    color: string;
}

const ProgressRing: React.FC<ProgressRingsProps> = ({progress, color}) => {
    const radius = 18;
    const stroke = 4;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg height={radius * 2} width ={radius * 2}>
            <circle
                stroke="#e5e7eb"
                fill="transplant"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                style={{strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    );
};

export default ProgressRing;
