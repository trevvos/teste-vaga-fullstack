import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';

export function NewMovimentoModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Novo movimento</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action=''>
                    <input type="file" placeholder="Arquivo CSV" required />

                    <button type="submit">
                        Importar
                    </button>
                </form>

                
            </Content>
        </Dialog.Portal>
    )
}