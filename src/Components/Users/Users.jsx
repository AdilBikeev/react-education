import React from 'react';
import s from './Users.module.css';

export const Users = (props) => {
    let pages = [];
    let countPage = Math.ceil(props.countPages / props.totalUsersCount);
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {
                pages.map(x => {
                    return <span className={x === props.currentPage ? s.selectedPage : ''}
                        onClick={() => { props.selectedPage(x) }}>{x}</span>
                })
            }
        </div>
        {
            props.users.map(x => <div key={x.id}>
                <span>
                    <div>
                        <img alt='images' className={s.userPhoto} src={x.photos.small != null ? x.photos.small : 'https://avatars.mds.yandex.net/get-pdb/1920690/8846c29f-cdf4-4249-a1d0-83cef96661d0/s1200'} />
                    </div>
                    <div>
                        {x.followed === true ?
                            <button onClick={() => { props.unfollow(x.id) }}>Follow</button>
                            : <button onClick={() => { props.follow(x.id) }}>unFollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{x.name}</div>
                        <div>{x.status != null ? x.status : 'defaultStatus'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};
