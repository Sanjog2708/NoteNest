import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share';

const ShareButton = ({ url, title, description }) => {
    const dummy = 'http://localhost:5173/pastes/m5qpiu1l'
  return (
    <div className='flex gap-4'>
      {/* Facebook Share Button */}
      <FacebookShareButton url={dummy} quote={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={dummy} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton url={dummy} title={title} separator=":: ">
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton url={dummy} title={title} summary={description}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButton;