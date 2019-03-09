import React from 'react';
import Button, {ButtonTypes, ButtonThemes} from '../../atoms/button';


const Top = () => {
    return (
        <div><Button type={ButtonTypes.RESET} theme={ButtonThemes.GREEN}><span>fuga</span></Button></div>
    )
}

export default Top;