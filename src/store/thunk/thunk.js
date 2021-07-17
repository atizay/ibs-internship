import {setAllExperiences, setAllRegions, setItemsRequest} from "../actions/actions";
import {API} from "../../API";


export const getRegions = () => async (dispatch) => {
  try {
    const regions = await API.regions.getAll()
    dispatch(setAllRegions(regions));
    console.log(regions, ' - проверка получения регионов')
  }
   catch (e) {
     console.log(e, ' - error')
   }
}

export const getExperiences = () => async (dispatch) => {
  try {
    const experiences = await API.experiences.getAll()
    dispatch(setAllExperiences(experiences));
    console.log(experiences, ' - проверка получения опыта')
  }
  catch (e) {
    console.log(e, ' - error')
  }
}

export const getDataRequest = (dataForm) => async (dispatch) => {
  try {
    const items = await API.items.getAll(dataForm)
    dispatch(setItemsRequest(items))
    console.log(items, ' - ответ с сервера')
  }
  catch (e) {
    console.log(e, ' - error')
  }
}
