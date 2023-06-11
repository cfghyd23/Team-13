import "../../App.css";
import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import SideMenu from "../../components/SideMenu";
import PageContent from "../../components/PageContent";
function App() {
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
}
export default App;
