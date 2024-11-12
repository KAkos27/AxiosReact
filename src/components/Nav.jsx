import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to={"/public"}>Public</Link>
      <Link to={"/admin"}>Admin</Link>
    </div>
  );
};

export default Nav;
