import {useState} from 'react'

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState("");
    const products = [
        { name: "Apple", price: 1, category: "Fruit" },
        { name: "Banana", price: 2, category: "Fruit" },
        { name: "Bread", price: 3, category: "Bakery" },
        { name: "Milk", price: 4, category: "Dairy" },
        { name: "Eggs", price: 5, category: "Dairy" },
    ];
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.name}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}