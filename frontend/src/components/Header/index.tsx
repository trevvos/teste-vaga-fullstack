import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h1>Teste Full Stack</h1>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Novo movimento</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}