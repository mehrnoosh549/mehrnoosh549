import React, { useRef } from 'react';
import { firestore } from "../firebase"
import { addDoc, collection } from "@firebase/firestore"
//Test

export default function Home() {
    const messageRef = useRef();
    
    const ref = collection(firestore, "messages");

    const handleSave = async (e) => {
        e.preventDefault();

        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        };

        try {
            await addDoc(ref, data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1> Welcome to PTR Immigration </h1>
            <form onSubmit={handleSave}>
                <label>Please enter your case number</label>
                <input type="text" ref={messageRef} />
                <button type="submit">SAVE</button>
            </form>
        </div>
    );
}
