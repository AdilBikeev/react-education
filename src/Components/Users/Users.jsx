import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

export const Users = (props) => {

    if(props.users.length === 0)
    {
        /*
        props.setUsers([
            {
                id: 1, photoUrl: 'https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/topics/global-review/2019/ey-staff-at-event.jpg',
                followed: false, fullName: 'Dima', status: 'I am a boss', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://www.yourdictionary.com/images/definitions/lg/10531.people.jpg',
                followed: true, fullName: 'Andrey', status: 'I am a boss', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://easyspeak.ru/assets/cache/images/blog/difference/people/619x291-pexels-photo-325521.6a4.jpg',
                followed: false, fullName: 'Sacha', status: 'I am a boss', location: { city: 'Moscow', country: 'Russia' }
            }
        ]);*/
        axios.get("https://social-network.samuraijs.com/api/1.0")
             .then(response => {
                debugger;   
             });
    }

    return (
        <div>
            {
                props.users.map(x => <div key={x.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} alt='Photo' src={x.photoUrl} />
                        </div>
                        <div>
                            {x.followed === true ?
                                <button onClick={() => { props.unfollow(x.id) }}>Follow</button>
                                : <button onClick={() => { props.follow(x.id) }}>unFollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{x.fullName}</div>
                            <div>{x.status}</div>
                        </span>
                        <span>
                            <div>{x.fullName}</div>
                            <div>{x.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};