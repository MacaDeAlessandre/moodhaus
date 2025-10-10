import '../css/itemListContainer.css';

const ItemListContainer = ({message, slogan}) => {

    return (
        <div className='item-list-container'>
            <h1>{message}</h1>
            <h2>{slogan}</h2>
        </div>
    )
};

export default ItemListContainer;