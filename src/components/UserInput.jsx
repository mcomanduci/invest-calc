import InputGroup from "./InputGroup";

function UserInput({ onInput }) {
  return (
    <section id="user-input">
      <InputGroup
        text1="Initial Investment"
        text2="Annual Investment"
        name1="initialInvestment"
        name2="annualInvestment"
        handleChange={onInput}
      />
      <InputGroup
        text1="Expected Return"
        text2="Duration"
        name1="expectedReturn"
        name2="duration"
        handleChange={onInput}
      />
    </section>
  );
}

export default UserInput;
