import { Card, CardHeader, Typography, CardActions, Button } from '@material-ui/core';

const GroupDialog = ({ group }) => {
    return (
        <Card style={{height: 225, width: 250}}>
            <CardHeader align="center" style={{backgroundColor: "#f57e42", body: "white"}} title={`Group ${group.num}`}></CardHeader>
            <div>
                
                <Typography style={{marginTop: 5}} align="center" variant="body1">{group.mem1}</Typography>
                <Typography align="center" variant="body1">{group.mem2}</Typography>
                <Typography align="center" variant="body1">{group.mem3}</Typography>
                <Typography align="center" variant="body1">{group.mem4}</Typography>
            </div>
            <CardActions>
                <Button style={{margin: "auto", backgroundColor: "#f57e42"}} size="small">Join Team</Button>
            </CardActions>
        </Card>
    )
}
export default GroupDialog;