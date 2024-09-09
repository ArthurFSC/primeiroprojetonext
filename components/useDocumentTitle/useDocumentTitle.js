// hooks/useDocumentTitle.js
import { useEffect } from 'react';

/**
 * Hook que atualiza o título do documento com base no valor do estado.
 * @param {string} title - O título a ser definido no documento.
 */
export function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
