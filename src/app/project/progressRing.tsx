import React from "react";

interface ProgressRingsProps {
    progress: number;
    color: string;
    label?: string;
}

const ProgressRing: React.FC<ProgressRingsProps> = ({progress, color, label}) => {
    const radius = 40;
    const stroke = 6;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center space-y-1">
            <svg height={radius * 2} width ={radius * 2}>
                <circle
                    stroke="#e5e7eb"
                    fill="transparent"
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
            <div className="text-[10px] text-black text-center leading-tight">
                <div>{label}</div>
                <div>{progress}%</div>
            </div>
        </div>
    );
};

export default ProgressRing;
