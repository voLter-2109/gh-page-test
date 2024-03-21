import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";
import Portal from "../../components/portal/Portal";
import { HOME_PATH } from "../../type/constants";

const Header = () => {
  return (
    <div
      className="
        h-fit py-2 px-6 border border-spacing-1 shadow-2xl w-full flex 
          gap-2 justify-between items-center "
    >
      <Link to={HOME_PATH}>
        <span className="text-2xl">Test Page</span>
      </Link>
      <Link to={HOME_PATH}>
        <FaHeartbeat size={23} />
      </Link>
      <Portal />
    </div>
  );
};

export default Header;
