import "./Elem.css";
function Elem(props) {
    function kattintasKezelo(){
        console.log("kattint")
        props.kattintasKezelo(props.index)
    }
  return (
    <div className="elem" onClick={kattintasKezelo} >
        {props.ertek}
    </div>
  );
}

export default Elem;