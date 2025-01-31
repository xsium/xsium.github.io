import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
    <>
    <footer>
    <div className="footContent">
        <p>&copy; {currentYear} Tyrfing's personal Website</p>
    </div>
    </footer>
    </>
  );
  }