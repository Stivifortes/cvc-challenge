import "./App.css";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
// import Repositories from "./pages/Repositories";

function App() {
  return (
    <div>
      <Layout>
        <div style={{ display: "flex" }}>
          <Profile />
        </div>
      </Layout>
    </div>
  );
}

export default App;
