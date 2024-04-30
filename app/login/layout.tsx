export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <h1>Layout Login</h1>
        {children}
      </div>
    );
  }