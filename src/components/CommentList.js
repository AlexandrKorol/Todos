import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  square: {
    color: "#ff",
    backgroundColor: deepOrange[500]
  }
}));

const CommentList = props => {
  const classes = useStyles();

  return (
    <ul>
      {props.comments !== undefined
        ? props.comments.map(item => {
            return item.id === props.active ? (
              <li key={item.ownId} className="commentItem">
                <Avatar variant="square" className={classes.square} />
                <span className='commentTextArea'>{item.body}</span>
              </li>
            ) : null;
          })
        : null}
    </ul>
  );
};

export default CommentList;
