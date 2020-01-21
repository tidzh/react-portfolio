import React from "react";
import style from "./WidgetResume.module.scss";
import Grid from "@material-ui/core/Grid";

const WidgetResume = ({ skills }) => {
  const skillsResult = skills.map(skillsParent => (
    <Grid item md={6} xs={12} key={skillsParent._id}>
      <div className={style.title}>{skillsParent.name}</div>
      <div className={style.wrapItemContent}>
        {skillsParent.elements.map((skillsChild, item) => (
          <WidgetResumeItem key={item} skillsChild={skillsChild} />
        ))}
      </div>
    </Grid>
  ));
  return (
    <Grid container spacing={3}>
      {skillsResult}
    </Grid>
  );
};
const WidgetResumeItem = ({ skillsChild }) => {
  return (
    <div className={style.skills}>
      <div className={style.skillsTitle}>{skillsChild.name}</div>
      <div className={style.progress}>
        <div
          className={style.progressBar}
          style={{ width: `${skillsChild.level}%` }}
        />
      </div>
    </div>
  );
};
export default WidgetResume;
