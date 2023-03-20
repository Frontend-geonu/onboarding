import styled from 'styled-components';

import { IFOption } from './type/TOption';

interface IFProps {
  options: IFOption[];
  checkedOption: number;
  handleChangeCheckedOption: (checkedOption: number, newValue: number) => void;
}

const TabBar: React.FC<IFProps> = ({
  options,
  checkedOption,
  handleChangeCheckedOption,
}: IFProps) => {
  return (
    <StyledWrapper num={checkedOption}>
      {options.map((option, idx) => (
        <>
          <input
            className="radio-input"
            type="radio"
            name="tab"
            id={option.value}
            onClick={() => handleChangeCheckedOption(checkedOption, option.id)}
            defaultChecked
          />
          <label className="tab" htmlFor={option.value}>
            {option.value}
          </label>
        </>
      ))}

      <span className="selected"></span>
    </StyledWrapper>
  );
};
export default TabBar;

const StyledWrapper = styled.div<{ num: number }>`
  height: 48px;
  display: flex;

  .selected {
    position: absolute;

    border-bottom: 4px solid var(--dark-brown);

    top: 45px;
    width: calc(100vw / 3);
    transition: transform 0.2s ease-in-out;
    transform: translateX(calc(100vw / 3 * ${({ num }) => num}));
  }

  .tab {
    width: 100%;
    padding: 8px;

    text-align: center;

    border-bottom: 2px solid var(--light-gray);
  }

  .radio-input {
    display: none;
  }
`;
