import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Footer() {
  return (
    <div className='containerBottom'>
      <div className='innerContainer'>
        <div className='description'>
            <h2>FormNext</h2>
            <p>Formnext is one of the most popular online course marketplaces on the web. This educational platform has over 40 million students and 50 thousand instructors and subject matter experts creating online courses.</p>
        </div>
        <div className='links'>
            <a href="#">Become an Instructor</a>
            <a href="#">Frequently asked Questions</a>
            <a href="#">Contact for Queries</a>
            <a href="#">Collaborate with us</a>
            <a href="#">Any Suggestions</a>
            <a href="#">Cookie settings</a>
        </div>
        <div className='links'>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Help and Support</a>
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
        </div>
        <div className='address'>
            <BusinessIcon></BusinessIcon>
            <GroupsIcon></GroupsIcon>
            <span>Our Office</span>
            <span>Corporate Greens,Gurugram</span>
            <span>Haryana,INDIA</span>
        </div>

      </div>
    
      <div className='social'>
            <h4>@2023 FormNextIndia</h4>
            <span><YouTubeIcon></YouTubeIcon></span>
            <span><InstagramIcon></InstagramIcon></span>
            <span><FacebookIcon></FacebookIcon></span>
            <span><TwitterIcon></TwitterIcon></span>
       </div>

    </div>
  )
}


