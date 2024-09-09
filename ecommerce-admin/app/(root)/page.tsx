"use client";

import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            // Make sure you actually call the onOpen function
            onOpen();
        }
    }, [isOpen, onOpen]);

    return (
        <div className="p-4">
            Root page
            {/* Ensure that you render the modal when isOpen is true */}
            {isOpen && <Modal />}
        </div>
    );
};

export default SetupPage;
