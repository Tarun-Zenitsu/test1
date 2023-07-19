import Link from "next/link";
import {RiYoutubeLine, RiInstagramLine,RiFacebookLine, 
  RiGithubFill, RiDribbbleLine,RiBenanceLine,
RiPinterestLine,RiLinkedinLine,} from 'react-icons/ri';


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/tarunakanta-kumbhar-5775a4201/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/Tarun-Zenitsu'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={'https://www.instagram.com/tarun__kk/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
    </div>
    );
};

export default Socials;
