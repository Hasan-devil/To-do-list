export default function Nav(props)
{
  return (
    <nav className="navbar bg-dark text-light fixed-top">
    <h2>{props.name}</h2>
    <button className = "navbar-toggler"><i className="fas fa-bars">
    </i> </button>
    </nav> 
    )
}