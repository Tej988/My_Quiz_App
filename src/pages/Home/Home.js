// import './Home.css'
// import React from 'react'
// import { Button, MenuItem, TextField } from "@material-ui/core";

// const Home = () => {
//     return (
//         <div className="content">
//             <div className="settings">
//                 <span style={{fontSize:30}} >Quiz setting</span>

//                 <div className="settings_select">
//                     <TextField
//                         style={{marinBottom:25}}
//                         label="Enter Your Name"
//                         variant="outlined"
//                     />

//                     <TextField
//                         select
//                         style={{marinBottom:30}}
//                         label="Select Category"
//                         variant="outlined"
//                     />
                     
//                 </div>
//             </div>
//             <img src="./images/quiz.png" alt="1" className="banner"/>
//         </div>
//     )
// }

// export default Home



import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMassage";
import Categories from "../../Data/Category";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/images/quiz.png" className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;