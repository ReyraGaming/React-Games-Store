import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html>
      <body className="bg-gradient-to-l from-[#3546dd] to-[#372270] min-h-[100vh] flex-col justify-between">
        <Navbar />
        <div className="min-h-[80vh] m-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
