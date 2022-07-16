import React from 'react'
import "./EditProfile.css"
import ImgLogo from '../../assets/image.png'

const EditProfile:React.FC = () => {
  return (
    <div className='edit_profile'>
        <div>
            <h2>Edit Profile</h2>
        </div>
        <div className='edit_main'>
            <div className='edit_photo'>
                <div className='photo_container'>
                    <div className='photo_div'>
                        <img src={ImgLogo} alt="" />
                    </div>
                    <div className='photo_upload cursor'>
                        <span>Browse image</span>
                    </div>
                </div>
                <div className="edit_from">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile
