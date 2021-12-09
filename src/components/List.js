import { Item } from "./Item"

const List = ({ items, handleDelete, handleChecked}) => (
    <ul>
        {items.map((item, index) => (
            <Item key={index} item={item} handleDelete={() => handleDelete(index)} handleChecked={() => handleChecked(index)} />
        ))}
    </ul>
)

export default List