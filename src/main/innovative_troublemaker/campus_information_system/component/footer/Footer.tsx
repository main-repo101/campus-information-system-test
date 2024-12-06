import React from 'react';
import { FooterProps } from "@innovative_troublemaker/campus_information_system/model/footer/FooterProps";
import * as MUIIcon from "@mui/icons-material";


const Footer: React.FC<FooterProps> = ({ companyInfo, socialLinks, footerLinks }) => {
  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case 'fb':
        return <MUIIcon.FacebookRounded />;
      case 'linkedin':
        return <MUIIcon.LinkedIn />;
      default:
        return <MUIIcon.LinkRounded />;
    }
  };
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/*REM: Company Info Section */}
          <div className={`text-left`}>
            <h3 className="font-bold text-lg mb-2">{companyInfo.name}</h3>
            <p className="text-sm">{companyInfo.address}</p>
            <p className="text-sm">Phone: {companyInfo.phone}</p>
            <p className="text-sm">Email: {companyInfo.email}</p>
          </div>
          
          {/*REM: Footer Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-sm text-gray-400 hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/*REM: Social Media Links Section */}
          <div className={`flexflex-row place-items-center`}>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4 flex-row place-items-center">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          {/*REM: Newsletter or Subscription Section (optional) */}
          <div>
            <h3 className="font-bold text-lg mb-2">Subscribe to our Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg w-full text-black"
            />
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg w-full">Subscribe</button>
          </div>
        </div>

        {/*REM: Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;