import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../store/actions/actions'


class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts ?
                (<div> </div>)
                :
                <div>
                    <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                    <div className="filter-sort">Order {" "}
                        <select
                            value={this.props.sort}
                            onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                            <option value="latest">Latest</option>
                            <option value="lowest">Lower price first</option>
                            <option value="highest">Higher price first </option>
                        </select>
                    </div>
                    <div className="filter-size">Filter
                        <select value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="">ALL</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                        </select>
                    </div>

                </div>
        )
    }
}

export default connect((state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems
}), {
    filterProducts,
    sortProducts
})(Filter)