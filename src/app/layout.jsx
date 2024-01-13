import Navbar from "./components/navbar"
import Footer from "./components/footer"
import './globals.css'

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>

  )
}
