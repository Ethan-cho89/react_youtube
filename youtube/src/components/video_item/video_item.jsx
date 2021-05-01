import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  //deconstruction으로 props안에 video가 있으면 바로 쓸수 있다
  // ({video : 새이름}) 이렇게 하면 video에 대한 변수명을 바꿀수 있다
  // ({ video: { snippet } }) 이렇게 하면 props내의 video안에 snippet을 잡는다
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="videoThumbnail"
        ></img>
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
