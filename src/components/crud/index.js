import React, { useState, useEffect } from "react";
import StartFirebase from "../FirebaseConfig/index";
import { ref, set, get } from "firebase/database";

const Crud = () => {
    const [db, setDb] = useState(null);
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [dob, setDob] = useState("");

    useEffect(() => {
        const dbInstance = StartFirebase();
        setDb(dbInstance);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "fullname") setFullname(value);
        if (name === "phonenumber") setPhonenumber(value);
        if (name === "dob") setDob(value);
    };

    const insertData = () => {
        const newData = {
            Fullname: fullname,
            Phonenumber: phonenumber,
            dob: dob,
        };

        const usernameRef = ref(db, `Customer/${username}`);

        get(usernameRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const existingData = snapshot.val();
                    const dataArray = Array.isArray(existingData) ? existingData : [existingData];

                    const updatedArray = [...dataArray, newData];

                    set(ref(db, `Customer/${username}`), updatedArray)
                        .then(() => {
                            alert("Data was added successfully.");
                        })
                        .catch((error) => {
                            alert("There was an error. Details: " + error);
                        });
                } else {
                    set(ref(db, `Customer/${username}`), [newData])
                        .then(() => {
                            alert("Data was added successfully.");
                        })
                        .catch((error) => {
                            alert("There was an error. Details: " + error);
                        });
                }
            })
            .catch((error) => {
                alert("There was an error. Details: " + error);
            });
    };





    return (
        <>
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <br />
            <br />
            <label>Fullname</label>
            <input
                type="text"
                name="fullname"
                value={fullname}
                onChange={handleInputChange}
            />
            <br />
            <br />
            <label>Phone Number</label>
            <input
                type="text"
                name="phonenumber"
                value={phonenumber}
                onChange={handleInputChange}
            />
            <br />
            <br />
            <label>Date of Birth</label>
            <input
                type="text"
                name="dob"
                value={dob}
                onChange={handleInputChange}
            />
            <br />
            <br />

            <button id="addBtn" onClick={insertData}>
                Add Data
            </button>
        </>
    );
};

export default Crud;
