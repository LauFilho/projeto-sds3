import BarChart from "components/barchart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutchart/indext";
import Footer from "components/footer";
import NavBar from "components/navbar";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3" >Dashboard de Vendas</h1>
                <div className="row px-3" >
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary"> Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary"> Taxa de Sucesso</h5>
                        <DonutChart />
                    </div>
                    <h2 className="text-primary py-4" >Todas as Vendas</h2>
                    <DataTable />


                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Dashboard;
