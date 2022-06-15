import React, { useState } from "react";
import Form from 'react-bootstrap/Form'

const AddressForm = (props) => {
    let [userAddress, setUserAddress] = useState("0x5c146cd18fa53914580573c9b9604588529406ca");
    let [contractAddresses, setContractAddresses] = useState("0xad337077480134028b7c68af290e891ce28076eb");
    let [chain, setChain] = useState("ftm");

    const handleUserAddresInput = (e) => {
        setUserAddress(e.target.value);
    };

    const handleContractAddressInput = (e) => {
        setContractAddresses(e.target.value);
    };

    const handleSelectInput = (e) => {
        setChain(e.target.value);
    }

    const send = (e) => {
        props.fetchTx(userAddress, contractAddresses, chain);
    };

    return (
        <div className="address-input">
            
            <label>Customer Address</label><input type="text" id="userAdderss" onChange={handleUserAddresInput} value={userAddress}></input>
            <label>Contract Addresses</label><input type="text" id="contractAddress" onChange={handleContractAddressInput} value={contractAddresses}></input>
            <Form.Select aria-label="Default select example" size="sm" onChange={handleSelectInput}>
                <option value="ftm">FATOM</option>
                <option value="eth">ETHEREUM</option>
            </Form.Select>
            <button onClick={send}>Fetch Transactions</button>
        </div>
    );
};

export default AddressForm;