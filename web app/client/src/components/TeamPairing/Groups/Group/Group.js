import React, { useState } from 'react';
import { Card, Typography,  CardHeader, CardActions, Button, Dialog } from '@material-ui/core';
import GroupDialog from './GroupDialog';
function DisplayGroup(props) {
    const { onClose, selectedValue, open, group } = props;
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <GroupDialog group={group} onClose={handleClose}/>
      </Dialog>
    )
  }

const Group = ({ group }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

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
                <Button style={{margin: "auto", backgroundColor: "#f57e42"}} size="small" onClick={handleOpen}>View Team</Button>
                <DisplayGroup group={group} open={open} onClose={handleClose}/>
            </CardActions>
        </Card>
    )
}
export default Group;