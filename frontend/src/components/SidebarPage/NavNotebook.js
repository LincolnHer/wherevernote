import { NavLink } from "react-router-dom"

function NavNotebook({ notebooks }) {
  const notebooksArr = Object.values(notebooks)
//   console.log(notebooksArr)

  return (
    <ul>
      <div>
        {notebooksArr?.length > 0 && notebooksArr?.map((notebook) => (
          <li key={notebook.id}
          className="nav-links"
          >
            <NavLink
            to={`/notebooks/${notebook.id}`}
            style={{color: 'white', textDecoration: 'none'}}
            >
                {notebook.title}
            </NavLink>
          </li>
        ))}
        <li className="nav-links">New Notebook</li>
      </div>
    </ul>
  )
}

export default NavNotebook
