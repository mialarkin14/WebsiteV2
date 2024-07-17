import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import { Link } from "react-router-dom"
import '../pages/portfolio.css'

const Portfolio = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
        <div className="portfolio" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', 
            padding: '100px', boxShadow: '10px 15px 20px #0951ff'}}>
            <p className="TextTitle" style={{width:'100%'}}>
                my portfolio:
            </p>
            <p className="SubHeading1" style={{width:'100%'}}>
                a collection of coding projects, circuit designs, and drawings
            </p>
            <div  style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'row', columnGap:'50px'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'column', rowGap:'10px'}}>
                    <Link to='/code'><img src="src/assets/portfolio/code.png" alt="code" /></Link>
                    <p className="SubHeading1">
                        code
                    </p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'column', rowGap:'10px'}}>
                    <Link to='/electronics'><img src="src/assets/portfolio/electronics.png" alt="electronics" /></Link>
                    <p className="SubHeading1">
                        electronics
                    </p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'column', rowGap:'10px'}}>
                    <Link to='/drawings'><img src="src/assets/portfolio/draw.png" alt="draw" /></Link>
                    <p className="SubHeading1">
                        drawings
                    </p>
                </div>
            </div>
        </div>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default Portfolio