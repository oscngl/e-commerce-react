import React, { useEffect, useState } from "react";
import CategoryService from "../services/categoryService";
import {
  selectCategory,
  deselectCategory,
} from "../redux/actions/categoryActions";
import { useDispatch } from "react-redux";

export default function Filter() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  let categoryService = new CategoryService();

  useEffect(() => {
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, []);

  const select = (category) => {
    dispatch(selectCategory(category));
  };

  const deselect = () => {
    dispatch(deselectCategory());
  };

  return (
    <div>
      <div className="card bg-dark" style={{ marginTop: "8.5em" }}>
        <article className="filter-group">
          <header className="card-header">
            <h6 className="title text-center text-warning">
              <b>Categories</b>
            </h6>
          </header>
          <div className="filter-content collapse show" id="collapse_1">
            <div className="card-body">
              <ul className="list-group">
                <li
                  key="All"
                  className="list-group-item bg-warning"
                  onClick={() => deselect()}
                >
                  {" "}
                  <b>All</b>{" "}
                </li>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="list-group-item bg-warning"
                    onClick={() =>
                      select({ id: category.id, name: category.name })
                    }
                  >
                    {" "}
                    <b>{category.name}</b>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
