import { Link } from "react-router-dom";

import { Badge } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useCart } from "../context/CustomHooks";

export const CartWidget = () => {
  const { quantityProduct } = useCart();
  return (
    <Link to={"/cart"} className="text-[#ffb603] font-semibold text-lg">
      <Badge badgeContent={quantityProduct()} color="primary">
        <LocalMallOutlinedIcon className="" />
      </Badge>
    </Link>
  );
};
