import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, handleDel }) {
  const [index, setindex] = useState(0);
  console.log(courses[index]);
  const { title, price, content } = courses[index];
  const handleRandom = () => {
    let newIndex = Math.round(Math.random() * (courses.length - 1));
    while (newIndex == index) {
      newIndex = Math.round(Math.random() * (courses.length - 1));
    }
    setindex(newIndex);
  };
  const handleChangeP = () => {
    index === 0 ? setindex(0) : setindex(index - 1);
  };
  const handleChangeC = () => {
    index === courses.length - 1
      ? setindex(courses.length - 1)
      : setindex(index + 1);
  };
  return (
    <div className="courseMainDiv">
      <div>
        <h2>My courses</h2>
      </div>
      <button className="cardDeleteBtn" onClick={handleRandom}>
        Random Course
      </button>
      <div className="cardContainer">
        <button onClick={handleChangeP} className="changeCourse">
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button onClick={handleChangeC} className="changeCourse">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
