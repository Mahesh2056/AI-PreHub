import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
        {/* <img 
            src="/assets/svg/logo.svg" 
            alt="" 
            className="min-w-10 min-h-10 object-contain" 
        /> */}
        <h3 className="text-xl font-bold text-green-500" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>AI PrepHub</h3>
    </Link>
  );
};
