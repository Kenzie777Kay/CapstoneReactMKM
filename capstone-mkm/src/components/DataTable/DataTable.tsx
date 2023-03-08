import React, { useState } from 'react'
import {DataGrid, GridColDef} from '@material-ui/data-grid';
import {useGetData} from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import {CanningForm} from '../CanningForm';
import {makeStyles} from '@material-ui/core';

const useStyles  = makeStyles({
    background:{
        background:'#D5F5E3',
        width: '100%',
        height:'100%',
        backgroundPosition:'center',
        position:'absolute',
        zIndex: -1,
    }
});


const columns: GridColDef[] = [
    { field: 'fruit_or_vegetable', headerName: 'Fruit or Vegetable', flex:2 },
    { field: 'style_of_pack', headerName: 'Style Of Pack', flex: 1 },
    { field: 'jar_size', headerName: 'Jar Size', flex: 1 },
    { field: 'one_to_three_thousand_ft', headerName: '1,000 to 3,000 ft', flex: 1 },
    { field: 'three_to_six_thousand_ft', headerName: '3,001 to 6,000 ft', flex: 1 },
    { field: 'over_six_thousand_ft', headerName: 'Over 6,000 ft', flex : 1},
];

interface gridData {
    data: {
        fruit_or_vegetable?:string
    }
}

export const DataTable = () => {
    let {contactData, getData } = useGetData();
    let [ open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<gridData>({data:{}})
    const [selectionModel, setSelectionModel] = useState<any>([]);
    const classes = useStyles();

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    return (
        <div style={{ height: 400, width: '75%' }}>
            <h2>Canning Specifications</h2>

        <DataGrid rows={ contactData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
          }}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog pop-up */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Canner {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update My Canner</DialogContentText>
                    <CanningForm fruit_or_vegetable={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>    
        </div>
    )
} 