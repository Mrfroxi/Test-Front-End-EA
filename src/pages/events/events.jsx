import React from "react";
import MainFrameTitle from "../../shared/titles/mainFrameTitle";
import "./indexxx.css";

const data = [
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "13.05.2005",
  },
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "some text",
  },
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "some text",
  },
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "some text",
  },
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "some text",
  },
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "some text",
  },
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "some text",
  },
  {
    img: "https://img1.akspic.ru/crops/5/9/8/1/7/171895/171895-peyzash-oblako-rastenie-gora-prirodnyj_landshaft-7680x4320.jpg",
    title: "Twitter",
    date: "13.05.2005",
  },
];

const Events = () => {
  const [visibleItem, setVisibleItem] = React.useState(0);

  function onClick(item) {
    setVisibleItem(item);
  }

  return (
    <section class="wrapper">
      <MainFrameTitle text="All events" secondClassName="allEventsTitle" />

      <div class="accordion_wrap">
        <ul className="acordingList">
          {data.map((elem, index) => (
            <li
              className={"row" + (index === visibleItem ? " active" : "")}
              key={index}
              onClick={() => onClick(index)}
            >
              <div class="accordion_item">
                <span className="accordion_item_title">
                  Network Design & Implementation
                </span>
                <span className="accordion_item_num">0{index + 1}</span>
              </div>

              <div class="accordion_menu">
                <div className={"acordionBlockInformation"}>
                  <span className="accordionBlockInformationIndex">
                    0{index + 1}
                  </span>
                  <div className="accordionBlockInformationTime">
                    <div className="accordingBlockConteinerInformation">
                      <div className="accordionBlockInformationTimeName">
                        <p className="accordionBlockInformationTimeNameTitle">
                          {elem.title}
                        </p>
                        <p className="accordionBlockInformationTimeNameDate">
                          {elem.date}
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="accordionBlockInformationTimeBtn"
                      >
                        <a href="https://github.com/" className='link'>More Information</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Events;
