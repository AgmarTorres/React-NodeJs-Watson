import React from 'react'
import MetisMenu from 'react-metismenu';
const SideBarBlog= props =>{

    const content=[
        {
            icon: 'icon-class-name',
            label: 'Label of Item',
            to: '#a-link',
        },
        {
            icon: 'icon-class-name',
            label: 'Second Item',
            content: [
                {
                    icon: 'icon-class-name',
                    label: 'Sub Menu of Second Item',
                    to: '#another-link',
                },
            ],
        },
    ];
    return (
        <div className='sidebar-blog'>
            <h2> SideBar</h2>
            <MetisMenu content={content} activeLinkFromLocation />
            <a target="_blank" href="google.com">
                Link Child
            </a>
        </div>
    )
}

export default SideBarBlog