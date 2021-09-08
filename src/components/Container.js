const Container = (props) => {

  return (
    <div className="container">
      <h2>{props.title}</h2>
      <div className="container-content">
        {props.children}
      </div>
    </div>
  )
}
 
export default Container