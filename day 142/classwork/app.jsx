function App() {


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
        loading: true,
      };
    }

    componentDidMount() {
      fetch('https://fakestoreapi.com/products/')
        .then(response => response.json())
        .then(data => this.setState({ products: data, loading: false }))
        .catch(err => {
          console.error(err);
          this.setState({ loading: false });
        });
    }

    render() {
      const { products, loading } = this.state;

      if (loading) return <p style={{textAlign: 'center'}}>Loading products...</p>;

      return (
        <div className="product-list">
          {products.map(product => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>
      );
    }
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}
