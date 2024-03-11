import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Total de movimentos</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>20</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Movimentos Inconsistentes</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>5</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Movimentos OK</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>0</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}