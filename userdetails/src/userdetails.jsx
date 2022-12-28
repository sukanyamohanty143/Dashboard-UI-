import React, { useEffect, useState } from "react";

const Alldetails = () => {
    const [userDetails, setUserDetails] = useState([]);

    const getUserDetails = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const userData = await response.json()
        setUserDetails(userData)
    }
    useEffect(() => {
        getUserDetails();
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Phone No.</th>
                    <th>Company Name</th>
                </tr>
            </thead>
            {
                userDetails.map((item, index) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.zipcode}</td>
                                <td>{item.phone}</td>
                                <td>{item.company.name}</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>

    );
}
export default Alldetails