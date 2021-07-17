import React, {useEffect, useRef } from "react"
import {useAction} from "../../../../hooks/useAction"
import {useTypedSelector} from "../../../../hooks/useTypedSelector"
import {SearchFormInput} from "./SearchFormInput/SearchFormInput"
import {SearchFormSelectRegions} from "./SearchFormSelectRegions/SearchFormSelectRegions"
import {SearchFormSelectExperiences} from "./SearchFormSelectExperiences/SearchFormSelectExperiences"
import s from '../SearchForm/SearchForm.module.scss'

const SearchForm = () => {

  const { getRegions } = useAction()
  const { getExperiences } = useAction()
  const { getDataRequest } = useAction()

  const { regions } = useTypedSelector(state => state);
  const { experiences } = useTypedSelector(state => state);

  useEffect(() => {
    getRegions()
    getExperiences()
    // eslint-disable-next-line
  }, [])

  const createSendDataRequest = (keywords, region, experience) => {
    let obj = {
      keywords: keywords,
      selectedRegion: region,
      selectedExperience: experience
    }
    return obj
  }

  const regionRef = useRef();
  const keywordsRef = useRef();
  const expRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault()
    getDataRequest(
      createSendDataRequest(
        keywordsRef.current.value,
        regionRef.current.value,
        expRef.current.value,
      )
    )

    console.log( createSendDataRequest(
      keywordsRef.current.value,
      regionRef.current.value,
      expRef.current.value,
    ))
  }

  return (
    <>
      {
        <form onSubmit={handleSubmit} className={s.searchForm}>
          <SearchFormInput keywordsRef={keywordsRef} required />
          <SearchFormSelectRegions regionRef={regionRef} regions={regions}/>
          <SearchFormSelectExperiences expRef={expRef} experiences={experiences} />
          <button type="submit" className={`${s.btn} ${s.btn_primary}`}>Сформировать отчет</button>
        </form>

      }
    </>
  )
}

export {SearchForm}