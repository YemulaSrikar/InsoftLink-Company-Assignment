import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <div className="head-bg-cont">
      <div className="Main-nav-cont">
        <div>
          <Link to="/" className="links">
            <img
              src="https://schoolaura.com/Content/assets/images/logo_school.png"
              className="schl-aura-logo"
              alt="schoolLogo"
            />
          </Link>
        </div>
        <ul className="lists">
          <li className="list-items">
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className="list-items">
            <Link to="/exam-solutions" className="links">
              Exam Solutions
            </Link>
          </li>
          <li className="list-items">
            <Link to="/online-study" className="links">
              Online Study
            </Link>
          </li>
          <li className="list-items">
            <Link to="/tutor-solution" className="links">
              TutorSolution
            </Link>
          </li>
          <li className="list-items">
            <Link to="/blogs" className="links">
              Blogs
            </Link>
          </li>
          <li className="list-items">School Management</li>
        </ul>
      </div>
    </div>
  </>
)

export default Header
