import axios from "axios";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

function DataTable() {

    const [activePage, setActivePage] = useState(0)

    function changePage(numeroPagina: number) {

        setActivePage(numeroPagina)

    }
    //UseState
    const [page, setPage] = useState<SalePage>({
        first: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
        last: true
    })
    //
    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=amount,desc`)
            .then(response => {
                setPage(response.data)
            })
    }, [activePage])
    return (
        <>

            <div className="table-responsive">

                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id} >
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    page={page}
                    onPageChange={changePage} />
            </div>
        </>
    );
}

export default DataTable;


