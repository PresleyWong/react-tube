import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "0px",
    paddingBottom: "0px"
  },
  inline: {
    display: "inline"
  },
  desc: {
    marginLeft: "10px"
  }
}));

const VideoListItem = props => {
  const imageUrl = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;
  const description = props.video.snippet.description;
  const classes = useStyles();

  const handleClick = (event, video) => {
    console.log("click");
    props.onVideoSelect(video);
  };

  return (
    <List className={classes.root}>
      <ListItem
        alignItems="flex-start"
        button
        divider={true}
        onClick={event => handleClick(event, props.video)}
      >
        <img src={imageUrl} className={classes.thumbnail} alt={title} />
        <ListItemText
          className={classes.desc}
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="caption"
                className={classes.inline}
                color="textSecondary"
              >
                {description}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default VideoListItem;
