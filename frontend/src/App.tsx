import DataTable from "components/dataTable";
import Footer from "components/footer";
import NavBar from "components/navbar";


function App() {
  return (
    <>
      <NavBar />
      <div className = "container">
       <h1 className="text-primary" >Hello Brothers</h1>
      <DataTable/>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
