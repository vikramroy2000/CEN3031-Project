import { Card, CardHeader, Typography } from '@material-ui/core';

const GroupDialog = ({ group }) => {
    return (
        <Card style={{height: 225, width: 250}}>
            <CardHeader align="center" style={{backgroundColor: "#f57e42", body: "white"}} title={`Group ${group.num}`}></CardHeader>
            <div>
                {group.members && group.members.map((mem) => (
                    <Typography style={{margin: "5px 0"}} key={mem._id} align="center" variant="body1">{`${mem.first} ${mem.last}`}</Typography>
                ))}
            </div>
        </Card>
    )
}
export default GroupDialog;