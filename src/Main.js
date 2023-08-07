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

export default function Main() {
  return (
    <>
      <Img />
      <br />
      <ImgC />
      <Js />
      <Props />
      <CndtRender title="강아지와 고양이의 공통점" />
      <RenderList />
      <ResEvnt />
      <CmpMem />
      <SnapShot />
      <QueState />
      <UpdateSt />
      <br />
      <UpdateArr />
    </>
  );
}
