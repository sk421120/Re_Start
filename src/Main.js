import Img from "./comps/Img.js";
import ImgC from "./comps/ImgClass.js";
import Js from "./comps/Js.js";
import Props from "./comps/Props.js";
import CndtRender from "./comps/CndtRender.js";
import RenderList from "./comps/RenderList.js";

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
    </>
  );
}
