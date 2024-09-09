"use client";
import {Modal} from "../ui/modal"
import {useStoreModal} from "@/hooks/use-store-modal";

export const StoreModal = () =>{
    const storeModal = useStoreModal();
    return(
    <Modal title="create store"
           description="add a new astore to manage products"
           isOpen={storeModal.isOpen}
           onCLose={storeModal.onClose}>
        Future create store Form
    </Modal>
    )}