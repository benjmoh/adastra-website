import "./globals.css";

export const metadata = {
  title: "Adastra Systems – AI Automation Consultancy",
  description:
    "Premium AI automation services to streamline operations, reduce manual work, and unlock scalable growth."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-adastra-bg text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

