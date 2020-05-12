﻿import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

export const Users = (props) => {

    if(props.users.length === 0)
    {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then(response => {
                props.setUsers(response.data.items); 
             });
    }

    return (
        <div>
            {
                props.users.map(x => <div key={x.id}>
                    <span>
                        <div>
                            <img alt='images' className={s.userPhoto} src={x.photos.small != null ? x.photos.small : 'https://avatars.mds.yandex.net/get-pdb/1920690/8846c29f-cdf4-4249-a1d0-83cef96661d0/s1200' } />
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