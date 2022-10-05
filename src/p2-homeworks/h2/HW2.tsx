import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "low" | "middle";

export type AffairType = {
  _id: number;
  name: string;
  priority: string;
};

export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: "React ", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (
  affairs: Array<AffairType>,
  filter: FilterType
) => {
  // need to fix any
  if (filter === "middle") { 
    return affairs.filter((e) => e.priority === "middle");
  } else if (filter === "low") {
    return affairs.filter((e) => e.priority === "low");
  } else if (filter === "high") {
    return affairs.filter((e) => e.priority === "high");
  }
  return affairs;
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number) => {
  // need to fix any
  return affairs.filter((e) => e._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id)); // need to fix any

  return (
    <div>
      <hr />
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
