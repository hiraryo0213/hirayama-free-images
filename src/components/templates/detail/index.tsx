import React, { FunctionComponent } from 'react';
import { match } from 'react-router-dom';

interface ParamsProps {
    id: string;
}

interface DetailProps {
    match: match<ParamsProps>
}

const Detail: FunctionComponent<DetailProps> = ({ match }) => {
    return (
        <div>hakase{
            match.params.id
        }</div>
    )
}

export default Detail;