import React, { memo } from "react";
import { FaCheck } from "react-icons/fa";

const List = memo(({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
));

const Item = ({ item, onRemoveItem }) =>
  console.log("B:List") || (
    <li className="item" key={item.objectID}>
      <span style={{ width: "40%" }}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{ width: "30%" }}>{item.author}</span>
      <span style={{ width: "10%" }}>{item.num_comments}</span>
      <span sytle={{ width: "10%" }}>{item.points}</span>
      <span style={{ width: "10%" }}>
        <button
          type="button"
          onClick={() => onRemoveItem(item)}
          className="button button_small"
        >
          <FaCheck />
        </button>
      </span>
    </li>
  );

export default List;
