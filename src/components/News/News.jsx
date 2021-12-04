import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../redux/features/NewsReducer";
import cl from "../News/news.module.css";
import ReadMoreReact from "read-more-react";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.newsList);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <div className={cl.around}>
      {news.map((news) => {
        return (
          <div className={cl.newsMainBlock}>
            <div className={cl.newsCard}>
              <div className={cl.imageBlock}>
                <img src={news.image} className={cl.newsImage} alt="..." />
              </div>
              <div className={cl.titleBlock}>
                <h4> {news.title} </h4>
                <div className={cl.textBlock}>
                  <ReadMoreReact
                    text={news.text}
                    ideal={100}
                    max={news.text.length}
                    readMoreText="...подробнее"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
