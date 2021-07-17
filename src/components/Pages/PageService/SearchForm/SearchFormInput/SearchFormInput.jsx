import React from "react";
import s from "./SearchFormInput.module.scss";

export const SearchFormInput = ({keywordsRef}) => {
  return (
    <input placeholder={'Вакансия'} ref={keywordsRef} required type="text" className={s.input} />
  )
}