import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";
import Paper from "@material-ui/core/Paper";
import CommentList from "./CommentList";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { OutlinedInput } from "@material-ui/core";
const Comments = props => {
  const inputRef = useRef(0);
  const [comment, setState] = useState(0);

  const setValue = e => {
    setState(e.target.value);
  };
  const addComment = () => e => {
    if (comment.length === 0) {
      return null;
    } else {
      props.addComment({
        id: props.postId,
        ownId: props.ownId,
        body: comment
      });
      inputRef.current.firstChild.value = "";
    }
  };
  return (
    <div className="commentBlock">
      <Paper className="comments">
        <h2>
          <Translate value="comments" />
          {props.postId !== null ? <span>#{props.postId + 1}</span> : null}{" "}
        </h2>

        {props.postId !== null ? (
          <div className="commentsWrapper">
            <CommentList comments={props.comments} active={props.active} />
          </div>
        ) : null}
        {props.postId !== null ? (
          <div className="commentFieldWrapper">
            <div className="commentField">
              <Avatar sizes="medium" variant="square" />{" "}
                <OutlinedInput
                    multiline
                    id="outlined-basic"
                    variant="outlined"
                    className="textField"
                    size="small"
                    onChange={setValue}
                    ref={inputRef}
                    rowsMax={3}
                />
            </div>
            <div className="btnWithLine">
              <div className="lineForBtn"></div>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="btn"
                    onClick={addComment()}
                >
                <Translate value="addNew" />{" "}
              </Button>
            </div>
          </div>
        ) : null}
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    postId: state.todoState.active,
    ownId: state.todoState.commentId,
    comments: state.todoState.comments,
    active: state.todoState.active
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => {
    dispatch({
      type: "ADD_COMMENT",
      payload: comment
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
