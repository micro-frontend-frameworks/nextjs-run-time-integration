import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { useRouter } from "next/router";
// import tenantConfig from "../mf-config";

const items = [
  <DashboardIcon key={"dashboard"} />,
  <ShoppingCartIcon key={"shoppingCart"} />,
  <PeopleIcon key={"people"} />,
  <BarChartIcon key={"barChart"} />,
  <LayersIcon key={"layers"} />,
];

function RandomIcon() {
  return items[Math.floor(Math.random() * items.length)];
}

function Item(props: ItemProps) {
  return (
    <ListItem button onClick={props.onClick}>
      <ListItemIcon>
        <RandomIcon />
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItem>
  );
}

export function ListItems() {
  const { push } = useRouter();

  return (
    <div>
      {/* {tenantConfig.items.map((item) => (
        <Item
          key={item.pageName}
          onClick={() => push(item.route)}
          title={item.title}
        />
      ))} */}
    </div>
  );
}

interface ItemProps {
  onClick: () => void;
  title: string;
}
