import { Card, CardHeader, Typography, CardActions, Button } from '@material-ui/core';

const GroupDialog = ({ group }) => {
    return (
        <Card style={{height: 225, width: 250}}>
            <CardHeader align="center" style={{backgroundColor: "#f57e42", body: "white"}} title={`Group ${group.num}`}></CardHeader>
            <div>
                {group.members && group.members.map((mem) => (
                    <Typography key={mem._id} align="center" variant="body1">{`${mem.first} ${mem.last}`}</Typography>
                ))}
            </div>
            <CardActions>
                <Button style={{margin: "auto", backgroundColor: "#f57e42"}} size="small">Join Team</Button>
            </CardActions>
        </Card>
    )
}
export default GroupDialog;