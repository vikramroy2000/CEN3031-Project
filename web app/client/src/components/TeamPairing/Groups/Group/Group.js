import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
const Group = () => {
    return (
        <Card>
            <div>
                <Typography variant="h6">Title</Typography>
                <Typography variant="body2">Body</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Desc</Typography>
            </CardContent>
        </Card>
    )
}
export default Group;