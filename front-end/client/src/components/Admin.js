
import "../App.css";
import AppFooter from "./AppFooter.js";
import AppHeader from "./AppHeader.js";
import PageContent from "./PageContent.js";
import SideMenu from "./SideMenu.js";
const Admin = () => {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
};

export default Admin;
