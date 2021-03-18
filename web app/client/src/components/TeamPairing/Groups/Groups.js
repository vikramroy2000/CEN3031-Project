import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Group from './Group/Group';

const Groups = () => {
    return (
        <div>
            <Group></Group>
            <Group></Group>
        </div>
    )
}
export default Groups;