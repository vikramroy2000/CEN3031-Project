import React from 'react';
import { Card, Typography,  CardHeader, CardActions, Button } from '@material-ui/core';
const Group = ({ group }) => {
    return (
        <Card style={{height: 225, width: 250}}>
            <CardHeader align="center" title={"Group " + group.num}/>
            <div>
                <Typography align="center" variant="body1">{group.mem1}</Typography>
                <Typography align="center" variant="body1">{group.mem2}</Typography>
                <Typography align="center" variant="body1">{group.mem3}</Typography>
                <Typography align="center" variant="body1">{group.mem4}</Typography>
            </div>
            <CardActions>
                <Button style={{margin: "auto", backgroundColor: "#f57e42"}} size="small">View Team</Button>
            </CardActions>
        </Card>
    )
}
export default Group;