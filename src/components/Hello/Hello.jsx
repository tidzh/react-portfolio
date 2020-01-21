import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typed from "react-typed";
import style from "./Hello.module.scss";
import "react-typed/dist/animatedCursor.css";

const Hello = () => {
  return (
    <Box component="section" className={style.root} pt={25} pb={25}>
      <Container>
        <div className={style.title}>
          Привет, я&nbsp;
          <Typed
            strings={["разработчик", "веб девелопер", "красавчик"]}
            loop
            typeSpeed={70}
            backSpeed={30}
          />
          <div>Cоздаю сайты и веб-приложения.</div>
          <div>Живу в Воронеже</div>
        </div>
      </Container>
    </Box>
  );
};
export default Hello;
