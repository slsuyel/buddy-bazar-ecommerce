
const Address = () => {
    const addressDataString = localStorage.getItem("address");
    const addressData = JSON.parse(addressDataString);

    return (
        <div className="fs-3 w-100">
            <h2>Address Details</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Address:</td>
                        <td>{addressData?.address}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>{addressData?.city}</td>
                    </tr>
                    <tr>
                        <td>District:</td>
                        <td>{addressData?.district}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{addressData?.email}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{addressData?.name}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{addressData?.phone}</td>
                    </tr>
                    <tr>
                        <td>Postcode:</td>
                        <td>{addressData?.postcode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Address;
