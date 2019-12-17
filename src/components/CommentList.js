<<<<<<< HEAD
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

=======
import React from 'react';
import PropTypes from 'prop-types';
import CommentListElement from './CommentListElement';
import {makeStyles} from "@material-ui/core"


const CommentList = props => {
	
	const styles=makeStyles({
		list:{
			padding:0
		}
	})

	const { comments, active } = props;
	const classes = styles();
	return (
		<ul className={classes.list}>
			{comments !== undefined
				? comments.map(item => {
						return item.id === active ? (
							<CommentListElement key={item.ownId}
								body={item.body}>
							</CommentListElement>
						) : null;
				  })
				: null}
		</ul>
	);
};
CommentList.propTypes = {
	comments: PropTypes.array.isRequired,
	active: PropTypes.number
};
>>>>>>> dev
export default CommentList;
