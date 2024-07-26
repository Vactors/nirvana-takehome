import React from 'react'
import { Card } from "antd"

const { Meta } = Card;

export type VideoCardProps = {
    id: number
    name: string
    url: string
    createdAt: Date
    updatedAt: Date
}

export default function(props: VideoCardProps){
    return (
        <Card
            bordered={false}
            hoverable
            cover={
            <img
                alt="example"
                src="https://media.tenor.com/cyQJ9ahIZi8AAAAe/javascript-interview-with-senior-js-developer.png"
            />
            }
        >
            <Meta title={props.name}/>
        </Card>
    )
}