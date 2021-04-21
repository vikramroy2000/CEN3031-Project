import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Group from './Group/Group';
/* function groupMaker(num, mem1, mem2, mem3, mem4) {
    return {num, mem1, mem2, mem3, mem4};
}

    const groups = [
        groupMaker(1, "jacob", "jim", "jerry", "john"),
        groupMaker(2, "carl", "cam", "carly", "carry"),
        groupMaker(3, "hank", "pym", "ant", "man"),
        groupMaker(4, "charlie", "bravo", "delta", "alpha"),
        groupMaker(5, "charlie", "bravo", "delta", "alpha"),
        groupMaker(6, "charlie", "bravo", "delta", "alpha"),
        groupMaker(7, "jacob", "jim", "jerry", "john"),
        groupMaker(8, "carl", "cam", "carly", "carry"),
        groupMaker(9, "hank", "pym", "ant", "man"),
        groupMaker(10, "charlie", "bravo", "delta", "alpha"),
        groupMaker(11, "charlie", "bravo", "delta", "alpha"),
        groupMaker(12, "charlie", "bravo", "delta", "alpha")
] */

const Groups = () => {
    const groups = useSelector((state) => state.groups);
    
    return (
        <Grid container alignItems="stretch" spacing={3}>
            {groups.map((group) => (
                <Grid key={group._id} item xs={12} sm={6} md={6} lg={3}>
                    <Group group={group} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Groups;