// Popup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setUserChoice } from "../actions/Gamesaction";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
const Popup = ({ onVerify }) => {
  const [age, setAge] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = age >= 22 && isCheckboxChecked;
    dispatch(setUserChoice(parseInt(age), isValid));
    if (isValid) {
      onVerify();
    }
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <Popups variants={fadeIn}initial="hidden" animate="show">
      <form onSubmit={handleSubmit}>
        <h2>Age Verification</h2>
        <p>This website may contain adult games.</p>
        <InputLabel variants={fadeIn}initial="hidden" animate="show">
          Age:
          <StyledInput variants={fadeIn}initial="hidden" animate="show"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </InputLabel>
        <CheckboxContainer variants={fadeIn}initial="hidden" animate="show">
          <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
            required
          />
          <label variants={fadeIn}initial="hidden" animate="show">I agree</label>
        </CheckboxContainer>
        <ContinueButton variants={fadeIn}initial="hidden" animate="show" type="submit" disabled={!isCheckboxChecked}>
          Continue
        </ContinueButton>
      </form>
    </Popups>
  );
};

const Popups = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const InputLabel = styled(motion.label)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(motion.input)`
  width: 90%;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 1rem;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff7676;
  }
`;

const CheckboxContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }

  label {
    font-size: 1rem;
    color: #333;
  }
`;

const ContinueButton = styled(motion.button)`
  font-size: 1.5rem;
  border: none;
  padding: 0.5rem 2rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background: ${({ disabled }) => (disabled ? "#ccc" : "#ff7676")};
  color: #fff;
`;

export default Popup;
