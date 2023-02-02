import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import Courses from "./Courses";

function App() {
  const [loading, setloading] = useState(true);
  const [courses, setcourses] = useState([]);
  const delHandle = (id) => {
    const crs = courses.filter((course) => {
      return id !== course.id;
    });
    setcourses(crs);
  };
  const fetchCourses = async () => {
    setloading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setcourses(response.data);
      setloading(false);
    } catch (err) {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="zeroCourse">
              <h2>You deleted all courses.</h2>
              <button className="cardDeleteBtn" onClick={fetchCourses}>
                Reload
              </button>
            </div>
          ) : (
            <Courses handleDel={delHandle} courses={courses} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
