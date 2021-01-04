import React from "react";
import { data } from "../../projects";
import { BookCard } from "../BookCard/BookCard";
import "./ProjectList.scss";

export default function ProjectList() {
  return (
    <div className="projects-wrapper">
      {data.map((item) => (
        <BookCard key={item.id} {...item} />
      ))}
    </div>
  );
}
