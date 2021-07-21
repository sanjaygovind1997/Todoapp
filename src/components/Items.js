import './Items.css'

export default function Items(props) {

    const {deleteItem,editItem,items} = props;
    return (
            <ul>
                    {
                        items.map((item,index) => (
                            <li key={index}>
                                <input value={item} onChange={(event)=>editItem(index,event.target.value)} />
                                <i onClick={() => deleteItem(index)} className="fas fa-trash-alt"></i>
                            </li>
                        ))
                    }
            </ul>
    )
}
