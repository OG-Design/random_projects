export type item = {
    id?:string | number,
    label?: string,
    price?: number,
    marked: boolean,
}
export type itemProps = item & {
    onChange: () => void
}