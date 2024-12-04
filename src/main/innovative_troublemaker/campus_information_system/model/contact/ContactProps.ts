export interface ContactProps {
    title: string; //REM: Form title
    subtitle?: string; //REM: Optional subtitle
    onSubmit: (data: { name: string; email: string; message: string }) => void; //REM: Form submit handler
    socialLinks?: { icon: React.ReactNode; url: string }[]; //REM: Array of social links
    className?: string; //REM: Additional custom styles
}