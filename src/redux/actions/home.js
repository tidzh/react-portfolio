import {SET_SKILLS} from "../../utils/constants/action";
import {skillsApi} from "../../utils/api";

export const setSkills = data => ({type:SET_SKILLS, data});

export const setSkillsRequest = () => {
  return (dispatch) => {
	skillsApi.get().then(data => {
	  dispatch(setSkills(data))
	})
  }
};