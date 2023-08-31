import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const { id } = useParams();
    let navigate = useNavigate();

    const [input, setInput] = useState({
        name: ''
    })

    const getrecord = () => {
        let data = JSON.parse(localStorage.getItem('crud'));
        if (data === null) {
            return [];
        } else {
            return data;
        }
    }
    const [record, setRecord] = useState(getrecord);

    const onchangedata = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        })
    }

    const oneditdata = () => {
        const { name } = input;
        let ans = record.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    name: name
                }
            }
            return item;
        })
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans));
        navigate('/view');
    }

    useEffect(() => {
        let ans = record.filter((item) => {
            return item.id == id
        })
        setInput(ans[0]);
    }, [])

    return (
        <>
            <div className="round"></div>
            <div className="box">
                <table>
                    <tbody>
                        <tr>
                            <td><input type="text" name="name" value={input.name} onChange={onchangedata} /></td>
                        </tr>
                        <tr>
                            <td style={{ display: "flex", justifyContent:"center", padding: "30px 0" }}>
                                <input style={{ width: "60%" }} type="button" value="Submit" onClick={() => oneditdata()} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Edit;