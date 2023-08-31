import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const View = () => {

    const [record, setRecord] = useState([]);

    const ondelete = (id) => {
        let ans = record.filter((item) => {
            return item.id !== id
        })
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans));
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('crud'));
        if (data === null) {
            setRecord([]);
        } else {
            setRecord(data);
        }
    }, [])

    return (
        <>
            <div class="round"></div>
            <div class="box">
                <table class="table1">
                    <thead>
                        <tr style={{ height: "80px" }}>
                            <th>#</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody className="record" style={{margin:"0 auot"}}>
                        {
                            record.map((item, no) => {
                                const { id, name } = item;
                                return (
                                    <tr key={id}>
                                        <td>{no}</td>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
                                            <button className="viewbutton" style={{ width: "48%" }} onClick={() => ondelete(id)}>Delete</button>
                                            <button className="viewbutton" style={{ width: "48%" }}><Link to={`/edit/${id}`}>Edit</Link></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr style={{ display: "flex", justifyContent: "center", padding: "10px 0 0 0" }}>
                            <td><button className="viewbutton" style={{ width: "200%" }}><Link to={`/`}>Form</Link></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default View;