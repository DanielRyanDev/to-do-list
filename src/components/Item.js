import "./Item.css"

export const Item = ({ item, handleDelete, handleChecked }) => (
    <li className={`itemWrapper ${item.checked ? "checked" : ""}`}>
        <div className="content">
            <p>{item.value}</p>
            <p className="date">{item.date.toLocaleString()}</p>
        </div>
        <div className="actions">
            <input type="checkbox" checked={item.checked} onChange={handleChecked} />
            <button onClick={handleDelete}>DELETE</button>
        </div>
    </li>
)