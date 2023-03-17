import { useState } from 'react';
import * as S from './style';
import { IFOption } from './type/TOption';

interface IFProps {
  options: IFOption[];
  checkedOption: number;
  handleChangeCheckedOption: (checkedOption: number, newValue: number) => void;
}

const TabBar = ({
  options,
  checkedOption,
  handleChangeCheckedOption,
}: IFProps) => {
  return (
    <S.Wrapper>
      {options.map((option, idx) => (
        <>
          <S.RadioInput
            type="radio"
            name="tab"
            id={option.value}
            onClick={() => handleChangeCheckedOption(checkedOption, option.id)}
            defaultChecked
          />
          <S.Tab htmlFor={option.value}>{option.value}</S.Tab>
        </>
      ))}

      <S.Selected num={checkedOption}></S.Selected>
    </S.Wrapper>
  );
};
export default TabBar;
