import Elem from "./Elem";
import "./Jatekter.css";
function Jatekter(props) {
    function kattintasKezelo(szoveg){
        console.log(szoveg)
        props.kattintasKezelo("üzenet")
    }
  return (
    <div className="jatekter">
    {
        props.lista.map((elem,index)=>{
            return(
                <Elem ertek={elem} kattintasKezelo={kattintasKezelo} key={index} index={index}/>
            )
        })
    }     
    </div>
  );
}

export default Jatekter;