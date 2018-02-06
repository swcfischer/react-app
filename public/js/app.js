
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: Seed.products
    })
  }
  handleProductUpVote(productId) {
    const nextProducts = this.state.products.map((item) => {
      if (productId === item.id) {
        return Object.assign({}, item, {votes: item.votes + 1});
      } else {
        return item;
      }
    });
    this.setState({products: nextProducts});
  }
  render() {
    const product = this.state.products.sort((a,b) => (
      b.votes - a.votes
    ));
    const productSet = product.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          url={item.url}
          votes={item.votes}
          submitterAvatarUrl={item.submitterAvatarUrl}
          productImageUrl={item.productImageUrl}
          onVote={this.handleProductUpVote}
          />
    ));

    return (
      <div className='ui unstackable items'>
        {productSet}
      </div>
    );
  }
}

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
