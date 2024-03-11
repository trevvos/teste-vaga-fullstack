import { ReactNode, createContext, useEffect, useState } from "react";

export interface Movimento {
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

interface Summary {
    isInconsistent: number;
    ok: number;   
}

interface MovimentoContextType {
    movimentos: Movimento[],
    summary: Summary
    total: number
}

interface MovimentosProviderProps {
    children: ReactNode;
}

export const MovimentosContext = createContext({} as MovimentoContextType)

export function MovimentosProvider({ children }: MovimentosProviderProps) {

    const [movimentos, setMovimentos] = useState<Movimento[]>([])

    const [summary, setSummary] = useState<Summary>({} as Summary)

    const [total, setTotal] = useState(0)

    async function loadMovimentos(){
        const response  = await fetch(`http://localhost:3000/movimentos/all`)
        const data = await response.json()

        setMovimentos(data.movimentos)
        setSummary(data.summary)
        setTotal(data.total)
    }

    useEffect(() => {
        loadMovimentos()
    }, [])

    
    return (
        <MovimentosContext.Provider value={{ movimentos, summary, total  }}>
            { children }
        </MovimentosContext.Provider>
    )
}