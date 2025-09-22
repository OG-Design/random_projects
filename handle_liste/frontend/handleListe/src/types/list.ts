import type {item} from './item'
export type list = {
    id: string | number,
    title: string,
    items: item[]
}
export type listProps = list & {
    saveLocal: () => {
        
    }
    onAddItem: () => void
    onItemChange: (id: item['id'], patch: Partial<item>) => void
}