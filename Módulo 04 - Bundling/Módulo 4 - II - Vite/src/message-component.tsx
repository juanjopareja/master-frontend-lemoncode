import { FC } from "react";
import classes from "./message.module.css";

export const MessageComponent: FC = () => {
  return (
    <>
      <h1 className={classes.message}>Hola Mundo desde React</h1>
      <p>{import.meta.env.DEV ? import.meta.env.VITE_DEV_MESSAGE : import.meta.env.VITE_PREV_MESSAGE}</p>
    </>
  );
}