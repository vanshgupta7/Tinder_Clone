import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Bookmark from '@material-ui/icons/Bookmarks';
import IconButton from '@material-ui/core/IconButton';
import "./Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
        <IconButton>
          <Bookmark className="footer_icon_bookmark" fontSize="large" />
        </IconButton>
        <IconButton>
          <FavoriteIcon className="footer_icon_love" fontSize="large" />
        </IconButton>
        <IconButton>
          <ThumbUp className="footer_icon_like" fontSize="large" />
        </IconButton>
        <IconButton>
          <ThumbDown className="footer_icon_dislike" fontSize="large" />
        </IconButton>
        

    </div>
  )
}


