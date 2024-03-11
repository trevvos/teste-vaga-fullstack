import styled from "styled-components";

export const MovimentosContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1rem;
    overflow-x: auto;
    white-space: nowrap;

`;

export const MovimentosPagination = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1rem;

    .pagination {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 20px 0;
    }

    .pagination li {
        margin-right: 5px;
    }

    .pagination li a {
        color: ${props => props.theme['gray-300']};
        text-decoration: none;
        padding: 5px 10px;
        border: 1px solid ${props => props.theme['green-500']};;
        border-radius: 5px;
        cursor: pointer;
    }

    .pagination li.active a {
        background-color: ${props => props.theme['green-500']};
        color: ${props => props.theme.white};
    }

    .pagination li a:hover,
    .pagination li.active a:hover {
        background-color: ${props => props.theme['green-700']};
        color: ${props => props.theme.white};
    }

    `;

export const MovimentosTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.2rem;
    font-size: 0.9rem;
    
    
    td {
        padding: 0.25rem 1rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }

    }
`;

interface PriceHighlightProps {
    variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']}
`