import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const [text, setText] = useState(""); // State to hold the currently typed text
    const fullText = "A source of Inspiration. A Muse. A Vibe. Learn while Doing and Never not Try.";
    const speed = 100; // Typing speed in milliseconds

    useEffect(() => {
        let index = 0; // To keep track of the current character
        const typeWriter = () => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText.charAt(index));
                index++;
                setTimeout(typeWriter, speed); // Call the function recursively
            }
        };
        typeWriter(); // Start the typing effect

        // Cleanup function to reset text on component unmount (optional)
        return () => setText("");
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    return (
        <div className="font-bold text-2xl">
            <span className="whitespace-nowrap">{text}</span>
            <span className="blinking-cursor">|</span>
        </div>
    );
};

export default Typewriter;
