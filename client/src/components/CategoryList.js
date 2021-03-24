import React, { Component } from "react";
import CategoryListItem from "./CategoryListItem";
import "../styles/category.css";

class CategoryList extends Component {
  render() {
    const categories = [
      "Antioxidants",
      "Cleansers",
      "Direct Acids",
      "Hydrators and Oils",
      "More Molecules",
      "Peptides",
      "Retinoids",
      "Suncare",
      "Vitamin C",
    ];
    return (
      <div className="category-list">
        <CategoryListItem categories={categories} modal={this.props.modal} />
      </div>
    );
  }
}

export default CategoryList;
