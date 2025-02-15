// BOOTSTRAP 
import { NavLink } from 'react-router'
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <footer className="mb-0 text-center">
    <div className="d-flex align-items-center justify-content-center pb-5">
      <div className="flex flex-col items-center gap-y-5">
        <p className="mb-3 mb-md-0 text-xl">Made with ❤️ by Abubakar </p>
        <NavLink className="text-dark fs-4" to="https://github" target="_blank" rel="noreferrer">
            <FaGithub />
        </NavLink>
      </div>
    </div>
  </footer>
  )
}

export default Footer
