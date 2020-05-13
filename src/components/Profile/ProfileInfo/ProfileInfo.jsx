import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img alt='images'
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                     alt='my Avatar'
                     src={props.photo ? props.photo : 'https://avatars.mds.yandex.net/get-pdb/251121/18031f2f-49e7-4728-8aa5-971444e25328/s1200'}/>
                <span>{props.fullName}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;