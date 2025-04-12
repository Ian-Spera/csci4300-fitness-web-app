import Image from 'next/image'; // Import Image from next/image
import food_background from '../assets/food_background.png'; 

interface ContentProps {
    children: React.ReactNode;
    className?: string;
  }
  const Content = ({ children, className = "" }: ContentProps) => {
    return (
        <div className={className}>
        <Image 
            src={food_background}
            alt="Background Architecture" 
            fill
            priority={true}
            className=""
        />
        {children}
      </div>
    );
  };

export default Content;
