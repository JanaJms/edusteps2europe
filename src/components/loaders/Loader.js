import { useEffect, useState } from "react";

export default function Loader({ progressValue = 70, onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = progressValue / 50; // smooth steps
        const interval = setInterval(() => {
            start += increment;
            if (start >= progressValue) {
                start = progressValue;
                clearInterval(interval);
                if (onComplete) onComplete();
            }
            setProgress(Math.floor(start));
        }, 20); // updates every 20ms
        return () => clearInterval(interval);
    }, [progressValue, onComplete]);

    return (
        <div className="w-full h-6 bg-white/30 rounded-full overflow-hidden relative">
            <div
                className="h-6 rounded-full bg-gradient-to-r from-orange via-light-orange to-reddish-orange shadow-md"
                style={{
                    width: `${progress}%`,
                    transition: "width 0.2s ease-in-out",
                }}
            >
                {/* animated shimmer effect */}
                <div className="absolute top-0 left-0 h-6 w-full rounded-full bg-white/20 animate-pulse"></div>
                <div className="absolute right-5 text-xs top-1">{progress}%</div>
            </div>
        </div>
    );
}
