import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { MovimentosContainer, MovimentosPagination, MovimentosTable, PriceHighlight } from "./styles";
import { Movimento, MovimentosContext } from "../../contexts/MovimentosContext";
import ReactPaginate from "react-paginate";



export function Movimentos() {
    const {  total } = useContext(MovimentosContext)
    const [currentPage, setCurrentPage] = useState(0)
    const [movimentos, setMovimentos] = useState<Movimento[]>([])
    const itemsPerPage = 10

    useEffect(() => {
      
        loadMovimentos(1);
    }, [])

    const loadMovimentos = async (page: number) => {
        const response = await fetch(`http://localhost:3000/movimentos/all?page=${page}&pageSize=${itemsPerPage}`);
        const data = await response.json()
        
        setMovimentos(data.movimentos)
    };


    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
        loadMovimentos(selectedItem.selected);
    };

    return (
        <div>
            <Header />
            <Summary />
            <SearchForm />
            <MovimentosContainer>
                <MovimentosTable>
                <thead>
                        <tr>
                            <th>Status</th>
                            <th>Nr. Inst</th>
                            <th>Nr. Agencia</th>
                            <th>Cd. Client</th>
                            <th>Nm. Client</th>
                            <th>Nr. CpfCnpj</th>
                            <th>Nr. Contrato</th>
                            <th>Qt. Prestacoes</th>
                            <th>Vl. Total</th>
                            <th>Cd. Produto</th>
                            <th>Ds. Produto</th>
                            <th>Cd. Carteira</th>
                            <th>Nr. Proposta</th>
                            <th>Nr. Presta</th>
                            <th>Tp. Presta</th>
                            <th>Nr. SeqPre</th>
                            <th>Dt. VctPre</th>
                            <th>Vl. Presta</th>
                            <th>Vl. Mora</th>
                            <th>Vl. Multa</th>
                            <th>Vl. Out Acr</th>
                            <th>Vl. Iof</th>
                            <th>Vl. Descon</th>
                            <th>Id. Situac</th>
            
                        </tr>
                    </thead>
                    <tbody>
                        {movimentos.map(movimento => {
                            return (
                                <tr>
                                       <td>
                                
                                    {
                                        (movimento.isInconsistent ? <PriceHighlight variant="outcome">Inconsistente</PriceHighlight> : <PriceHighlight variant="income">OK</PriceHighlight>)
                                    }
                                
                                </td>
                                <td>{movimento.nrInst}</td>
                                <td>{movimento.nrAgencia}</td>
                                <td>{movimento.cdClient}</td>
                                <td>{movimento.nmClient}</td>
                                <td>{movimento.nrCpfCnpj}</td>
                                <td>{movimento.nrContrato}</td>
                               
                                <td>{movimento.qtPrestacoes}</td>
                                <td>{movimento.vlTotal}</td>
                                <td>{movimento.cdProduto}</td>
                                <td>{movimento.dsProduto}</td>
                                <td>{movimento.cdCarteira}</td>
                                <td>{movimento.nrProposta}</td>
                                <td>{movimento.nrPresta}</td>
                                <td>{movimento.tpPresta}</td>
                                <td>{movimento.nrSeqPre}</td>
                                <td>{movimento.vlPresta}</td>
                                <td>{movimento.vlMora}</td>
                                <td>{movimento.vlMulta}</td>
                                <td>{movimento.vlOutAcr}</td>
                                <td>{movimento.vlIof}</td>
                                <td>{movimento.vlDescon}</td>
                                <td>{movimento.idSituac}</td>
                                <td>{movimento.idSitVen}</td>
                             
                            </tr>
                            )
                        })}

                    </tbody>
                </MovimentosTable>
                
            </MovimentosContainer>
            <MovimentosPagination>
                <ReactPaginate
                    pageCount={Math.ceil(total / itemsPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </MovimentosPagination>
        
        </div>
    )
}