import Logo from "../../components/Logo";
import Item from "./Item";
import {
  RiPieChart2Line as Pie,
  RiTeamLine as Agent,
  RiSuitcaseLine as Customer,
  RiMoneyDollarCircleLine as Money,
  RiSettings3Line as Settings,
  RiFireLine as Fire,
} from "react-icons/ri";
import Section from "./Section";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div className="sidebar-wrapper">
        <Section text="General" />
        <Item linkName={"dashboard"} iconComponent={Pie} />
        <Item linkName={"agents"} iconComponent={Agent} />
        <Item linkName={"customers"} iconComponent={Customer} />

        <Section text="Sales & Leads" />
        <Item linkName={"sales"} iconComponent={Money} />
        <Item linkName={"leads"} iconComponent={Fire} />

        <Section text="Options & Settings" />
        <Item linkName={"settings"} iconComponent={Settings} />
      </div>
    </div>
  );
};

export default Sidebar;
