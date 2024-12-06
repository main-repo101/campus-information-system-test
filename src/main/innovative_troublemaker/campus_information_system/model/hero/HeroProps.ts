export interface HeroProps {
    title: string; //REM: Main heading
    subtitle?: string; //REM: Optional subheading
    backgroundImageUrl?: string; //REM: Background image URL
    actions?: React.ReactNode; //REM: Call-to-action buttons/links
    overlayOpacity?: string; //REM: Custom overlay opacity (e.g., "bg-opacity-50")
    className?: string; //REM: Additional custom styles
}
