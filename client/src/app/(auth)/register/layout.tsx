export default function RegLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            Header Reg
            {children}
        </div>
    );
}