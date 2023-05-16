import React, { useContext, useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { useQuery } from "react-query";
import axios from "axios";
import { callApi } from "../../services/callApi";
import { UserContext } from "../../context/UserContext";

const Categories = () => {
  const { setPosts } = useContext(UserContext);
  const [categories, setCategories] = useState([]);

  useQuery({
    queryKey: ["Categories"],
    queryFn: async () => {
      return await callApi({
        relativePath: "/category",
        method: "get",
      });
    },
    onSuccess: ({ data }) => setCategories(data),
  });

  const filterPosts = async function (categoryName) {
    const response = await callApi({
      relativePath: `/post?category=${categoryName}&&isPrefix=${true}`,
      method: "get",
    });
    response && setPosts(response?.data);
  };

  return (
    <div className={styles.categorylist}>
      <h2 className={styles.categorylisttitle}>Categories</h2>
      <div className={styles.categorylistcontainer}>
        <div className={styles.scrollablecontainer}>
          {categories.map((category) => (
            <p
              key={category.name}
              style={{ cursor: "pointer" }}
              onClick={() => filterPosts(category?.name)}
            >
              {category?.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
