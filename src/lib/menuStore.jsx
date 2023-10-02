import { create } from "zustand"


export const menuStore = create((set) => ({
    open: false,
    onOpen: set(() => ({ open: true })),
    onClose: set(() => ({ open: false }))
}))