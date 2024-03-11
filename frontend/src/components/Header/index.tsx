import { NewMovimentoModal } from "../NewMovimentoModal";
import { HeaderContainer, HeaderContent, NewMovimentoButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h1>Teste Full Stack</h1>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewMovimentoButton>Importar CSV</NewMovimentoButton>
                    </Dialog.Trigger>

                    <NewMovimentoModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}