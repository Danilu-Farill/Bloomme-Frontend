import { Link } from "react-router-dom";
import { Menu } from "../components/Menu.component";
import avatar from '../assets/avatar.svg';
import quiz from '../assets/quiz.svg';
// import diamond from '../assets/diamond.svg';
import '../styles/Quiz.style.css';
import { Title } from "../components/Title.component";

export const Quiz = () => {
  return(
    <div className="container-quiz">
      <div className="container-quiz-menu">
        <Menu title="Ana Maria" avatarUrl={avatar} />
      </div>
      <div className="container-quiz-title">
        <Title title="Quiz"/>
        {/* <h1>Quiz</h1> */}
        {/* <div className="container-quiz-diamond"> */}
        {/* <img src={diamond} alt="diamond" /> */}
        {/* </div> */}
      </div>
      <div className="container-quiz-star">
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Know yourself</p>
          <button className="button-quiz-star"><Link to={`/quizQuestion/Know yourself`} className="quiz-link"> Start Quiz </Link></button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Myths</p>
          <button className="button-quiz-star"><Link to={`/quizQuestion/Myths`} className="quiz-link"> Start Quiz </Link></button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>What would happen if...?</p>
          <button className="button-quiz-if"><Link to={`/quizQuestion/What would happen if...?`} className="quiz-link"> Start Quiz </Link></button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Diversity and Identity</p>
          <button className="button-quiz-star"><Link to={`/quizQuestion/Diversity and Identity`} className="quiz-link"> Start Quiz </Link></button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Moral Dilemma</p>
          <button className="button-quiz-star"> <Link to={`/quizQuestion/Moral Dilemma`} className="quiz-link"> Start Quiz </Link></button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Empathy Test</p>
          <button className="button-quiz-star"><Link to={`/quizQuestion/Empathy Test`} className="quiz-link"> Start Quiz </Link></button>
        </div>
      </div>
    </div>
  );
};