import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./styles"
import { useContext } from "react"
import { MovimentosContext } from "../../contexts/MovimentosContext"

export function Summary() {
    const { total, summary } = useContext(MovimentosContext)

    console.log(summary)

    
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Total de movimentos</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>{total}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Movimentos Inconsistentes</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{summary.isInconsistent}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Movimentos OK</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>{summary.ok}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}