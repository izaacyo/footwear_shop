import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <div className="filter-result">{this.props.count}</div>
                <div className="filter-sort">Order {" "}
                    <select
                        value={this.props.sort}
                        onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lower">Lower price first</option>
                        <option value="higher">Higher price first </option>
                    </select>
                </div>
                <div className="filter-size">Filter
                    <select value={this.props.size} onChange={this.props.filterProducts}>
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
