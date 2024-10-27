
import Link from "next/link";
import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import cssStyle from "./components/footer.module.css";
// import cssStyle from "./components/header.module.css";
// console.log(cssStyle,"CSS-Style");
// console.log(cssStyleF);
const Navbar =()=>{
    return(
    <body>
    <div>
        <Header></Header>
    <nav>
    <Link href="/about"><button>About</button></Link> 
    <Link href="/Contact"><button>Contact</button></Link>
    <Link href="/Service"><button>Services</button></Link>
    </nav>
        <br/>
        <Hero></Hero>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
           <br />
        <br />
        <br />
        <br />
        <br />
        <Footer></Footer>
        <br />
        <br />
        <br />
        
        </div>
        {/* <a>
        <img id="image" src="/images/school-img.jpg"/>
        </a>           */}
    </body>
    );
}
export default Navbar;
