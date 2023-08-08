import { useState } from "react";

import Img from "./comps/Img.js";
import ImgC from "./comps/ImgClass.js";
import Js from "./comps/Js.js";
import Props from "./comps/Props.js";
import CndtRender from "./comps/CndtRender.js";
import RenderList from "./comps/RenderList.js";
import ResEvnt from "./interact/ResEvnt.js";
import CmpMem from "./interact/CmpMem.js";
import SnapShot from "./interact/SnapShot.js";
import QueState from "./interact/QueState.js";
import UpdateSt from "./interact/UpdateSt.js";
import UpdateArr from "./interact/UpdateArr.js";
import InputSt from "./mng/InputSt.js";
import Choose from "./mng/Choose.js";

export default function Main() {
  const [tab, setTab] = useState("com");

  let viewTab;

  if (tab === "com") {
    viewTab = (
      <>
        <Img />
        <br />
        <hr />
        <ImgC />
        <hr />
        <Js />
        <hr />
        <Props />
        <hr />
        <CndtRender title="강아지와 고양이의 공통점" />
        <hr />
        <RenderList />
      </>
    );
  } else if (tab === "int") {
    viewTab = (
      <>
        <ResEvnt />
        <hr />
        <CmpMem />
        <hr />
        <SnapShot />
        <hr />
        <QueState />
        <hr />
        <UpdateSt />
        <br />
        <hr />
        <UpdateArr />
      </>
    );
  } else if (tab === "mng") {
    viewTab = (
      <>
        <Choose />
      </>
    );
  }

  return (
    <>
      <InputSt setTab={setTab} tab={tab} />
      {viewTab}
    </>
  );
}
