export interface MenuItem {
    key?: string,
    label?: string,
    icon?: string,
    children?: MenuItem[],
    disabled?: boolean,
    path?: string
}