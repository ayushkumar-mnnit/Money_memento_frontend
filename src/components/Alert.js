function Alert(props){
    const capitalize = (word)=>{
      if(word==="danger"){
        word="error";
      }
      const lower = word ? word.toLowerCase() : ""; // Ensure word exists before calling toLowerCase()
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  
    return (
      <div style={{ height: "50px"}} >
        {props.alert && props.alert.type && props.alert.msg && ( // Check if props are defined
          <div className={`alert alert-${props.alert.type} alert-dismissable fade show`} role="alert" >
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
          </div>
        )}
      </div>
    )
  }
  
  export default Alert;
  
