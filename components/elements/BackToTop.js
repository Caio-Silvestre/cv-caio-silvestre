import { useEffect, useState } from "react";

export default function BackToTop() {
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);
    const [classs, setClasss] = useState('');
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top
    const scrollToTop = () => {
        setClasss('rocketAnimacao2');

        // Esperar 2 segundos
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // for smoothly scrolling
            });
            setClasss('');
        }, 500);
    };

    return (
        <>
            {showButton && (
                <a id="backtotop"  onClick={()=> {
                    scrollToTop()
                    }} className="backtotop show">
                    {/* <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >

                        <path
                            d="M5.52344 18.5234C5.3151 18.3151 5.3151 18.0938 5.52344 17.8594L13.7266 9.69531C13.9349 9.46094 14.1432 9.46094 14.3516 9.69531L22.5547 17.8594C22.763 18.0938 22.763 18.3151 22.5547 18.5234L21.7734 19.3047C21.5651 19.5391 21.3438 19.5391 21.1094 19.3047L14.0391 12.2344L6.96875 19.3047C6.73438 19.5391 6.51302 19.5391 6.30469 19.3047L5.52344 18.5234Z"
                            fill="#ffffff"
                        />
                    </svg> */}
                    <img src="/assets/images/rocketPng.png" className={classs} style={{width:'100%', height:'auto'}}/>
                {/* <video style={{cursor:'pointer'}}  autoPlay loop onClick={()=> scrollToTop()} src={'/assets/videos/galaxyaFinalPurple.webm'} />  */}
                </a>
            )}
        </>
    )
}