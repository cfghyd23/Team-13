import "../App.css";
import AppFooter from "./AppFooter/Footer";
import AppHeader from "./AppHeader";
import PageContent from "./PageContent";
import SideMenu from "./SideMenu";
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
