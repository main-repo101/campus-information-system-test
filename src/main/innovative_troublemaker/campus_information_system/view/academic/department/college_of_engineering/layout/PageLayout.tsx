import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = (props: LayoutProps ) => {
  return (
    <div className="font-sans min-w-full">
      {props.children}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Campus Information System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PageLayout;
