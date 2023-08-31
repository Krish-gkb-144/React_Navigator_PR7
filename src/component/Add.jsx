import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Add = () => {
    let navigate = useNavigate()
    const [input, setInput] = useState({
        name: ''
    })
    const [record, setRecord] = useState([]);

    const onchange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        })
    }

    const onsubmit = () => {
        const { name } = input;
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name: name
        }
        let data = [...record, obj];
        setRecord(data);
        localStorage.setItem('crud', JSON.stringify(data));
        navigate('/view');
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
            <div className="round"></div>
            <div className="box">
                <table>
                    <tbody>
                        <tr>
                            <td><input type="text" name="name" value={input.name} onChange={onchange} /></td>
                        </tr>
                        <tr>
                            <td style={{display:"flex",justifyContent:"space-between",padding:"30px 0"}}>
                                <input style={{ width: "48%" }} type="button" value="Submit" onClick={() => onsubmit()} />
                                <button className="viewbutton" style={{ width: "48%" }}><Link to={`/view`}>View</Link></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Add;