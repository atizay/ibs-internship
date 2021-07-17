import React from "react";

export const SearchFormSelectRegions = ({regionRef, regions}) => {
  return (
    <select ref={regionRef} >
      {
        !!regions ? (
          regions.map(item => {
            return (
              <option key={item.id} value={item.areaName} >
                {item.areaName}
              </option>
            )
          })
        ) : (<option>---</option>)
      }
    </select>
  )
}