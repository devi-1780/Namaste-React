const Product=({item})=>{
    console.log(item)
    return(
        <div className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.category}</h3>
            <p>Price:{item.price}</p>
        </div>
    )
}
export default Product;