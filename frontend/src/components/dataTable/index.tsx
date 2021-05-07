
function DataTable() {
    return (
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
                    <tr>
                        <td>22/02/2019</td>
                        <td>Luck Allen</td>
                        <td>31</td>
                        <td>18</td>
                        <td>3017.00</td>
                    </tr>
                    
                    <tr>
                        <td>22/02/2017</td>
                        <td>Jeff Jones</td>
                        <td>109</td>
                        <td>90</td>
                        <td>200034.00</td>
                    </tr>
                    
                    

                </tbody>


            </table>
        </div>
    );
}

export default DataTable;
