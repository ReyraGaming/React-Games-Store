import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html>
      <body className="bg-gradient-to-l from-[#3546dd] to-[#372270]">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
