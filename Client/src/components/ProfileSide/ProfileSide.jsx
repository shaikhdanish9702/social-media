import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import './ProfileSide.css'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard/ProfileCard'
export default function ProfileSide() {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard location="homepage"/>
        <FollowersCard/>
        </div>
  )
}
