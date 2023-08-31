import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const SocialMediaIcons = () => {
    
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/jake-h-isaacs/"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInIcon alt="linkedin-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/jake_h_isaacs"
                target="_blank"
                rel="noreferrer"
            >
                <InstagramIcon alt="linkedin-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com/jake.isaacs.18"
                target="_blank"
                rel="noreferrer"
            >
                <FacebookIcon alt="linkedin-link" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;