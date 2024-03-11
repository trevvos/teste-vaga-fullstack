import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Movimento {
    id:         string
    nrInst:     string
    nrAgencia:   string
    cdClient:    string
    nmClient:    string
    nrCpfCnpj:   string
    nrContrato:  string
    dtContrato:  Date
    qtPrestacoes: string
    vlTotal:     string
    cdProduto:   string
    dsProduto:   string
    cdCarteira:  string
    dsCarteira:  string
    nrProposta:  string
    nrPresta:    string
    tpPresta:    string
    nrSeqPre:    string
    dtVctPre:    Date
    vlPresta:    string
    vlMora:      string
    vlMulta:     string
    vlOutAcr:    string
    vlIof:       string
    vlDescon:    string
    vlAtual:     string
    idSituac:    string
    idSitVen:    string
    isInconsistent: boolean

}

export function Movimentos() {
    const [movimentos, setMovimentos] = useState<Movimento[]>([])

    async function loadMovimentos(){
        const response  = await fetch('http://localhost:3000/movimentos/all')
        const data = await response.json()

        setMovimentos(data.movimentos)
    }

    useEffect(() => {
        loadMovimentos()
    }, [])

    return (
        <div>
            <Header />
            <Summary />
            <SearchForm />
            <TransactionsContainer>
                
                <TransactionsTable>
                    <tbody>
                        {movimentos.map(movimento => {
                            return (
                                <tr>
                                       <td>
                                <PriceHighlight variant="income">
                                    {
                                        (movimento.isInconsistent ? 'Inconsistente' : 'OK')
                                    }
                                </PriceHighlight>
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
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}