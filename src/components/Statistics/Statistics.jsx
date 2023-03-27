import PropTypes from 'prop-types';
import {
  FiUserPlus,
  FiUserMinus,
  FiTrendingUp,
  FiUserX,
  FiUsers,
} from 'react-icons/fi';
import { Clause } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
    <>
      <Clause>
        <FiUserPlus />
        Good: <span>{good}</span>
      </Clause>
      <Clause>
        <FiUserMinus />
        Neutral: <span>{neutral}</span>
      </Clause>
      <Clause>
        <FiUserX />
        Bad: <span>{bad}</span>
      </Clause>
      <Clause>
        <FiUsers />
        Total: <span>{total}</span>
      </Clause>
      <Clause>
        <FiTrendingUp />
        Positive feedback: <span>{positivePercentage}</span>%
      </Clause>
    </>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
