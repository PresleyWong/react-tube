import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoListItem from "./videoListItem";

const useStyles = makeStyles(theme => ({
  videoListing: {
    listStyleType: "none"
  }
}));

const VideoList = props => {
  const classes = useStyles();
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className={classes.videoListing}>{videoItems}</ul>;
};

export default VideoList;
