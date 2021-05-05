import React, { useState } from "react";

const Members = () => {
  const [activity, setActivity] = useState(0);

  const activities = [
    { label: "@Lazereys joined MODA DAO" }
  ]

  return (
    <div>
      <h2>Member Activity</h2>
      <ul className="list-group">

        { activities.map((activity, index) => {
            <li class="list-group-item"></li>
            return <li key={ index }>{activity.label}</li>;
          })}
      </ul>
    </div>
  );
};

export default Members;
