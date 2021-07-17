import React from "react"

export const SearchFormSelectExperiences = ({expRef, experiences}) => {
  return (
    <select ref={expRef} >
      {
        !!experiences ? (
          experiences.map(item => {
            return (
              <option key={item.id} value={item.periodName}>
                {item.periodName}
              </option>
            )
          })
        ) : (<option>---</option>)
      }
    </select>

  )
}