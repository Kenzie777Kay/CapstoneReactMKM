import React from 'react'
import {useDispatch, useSelector,useStore} from 'react-redux'
import {useForm} from 'react-hook-form';
import {chooseFruit_or_vegetable, chooseStyle_of_pack, chooseJar_size, chooseOne_to_three_thousand_ft, chooseThree_to_six_thousand_ft, chooseOver_six_thousand_ft} from '../../redux/slices/RootSlice';
import {Input} from '../SharedComponents/Input';
import {Button} from '@material-ui/core';
import {server_calls} from '../../api';

interface CanningFormProps {
    fruit_or_vegetable?:string;
    data?:{}
}

interface CanningState {
    fruit_or_vegetable: string;
    style_of_pack: string;
    jar_size: string;
    one_to_three_thousand_ft: string;
    three_to_six_thousand_ft: string;
    over_six_thousand_ft: string;
}

export const CanningForm = (props:CanningFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const fruit_or_vegetable = useSelector<CanningState>(state => state.fruit_or_vegetable);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.fruit_or_vegetable)
        if(props.fruit_or_vegetable!){
            server_calls.update(props.fruit_or_vegetable!, data);
            console.log(`Updated: ${data} ${props.fruit_or_vegetable}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseFruit_or_vegetable(data.fruit_or_vegetable));
            dispatch(chooseStyle_of_pack(data.style_of_pack));
            dispatch(chooseJar_size(data.jar_size));
            dispatch(chooseOne_to_three_thousand_ft(data.one_to_three_thousand_ft));
            dispatch(chooseThree_to_six_thousand_ft(data.three_to_six_thousand_ft));
            dispatch(chooseOver_six_thousand_ft(data.over_six_thousand_ft));
            
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="fruit_or_vegetable">Fruit or Vegetable</label>
                    <Input {...register('fruit_or_vegetable')} name="fruit_or_vegetable" placeholder='Fruit or Vegetable'/>
                </div>
                <div>
                    <label htmlFor="style_of_pack">Style Of Pack</label>
                    <Input {...register('style_of_pack')} name="style_of_pack" placeholder='Style Of Pack'/>
                </div>
                <div>
                    <label htmlFor="jar_size">Jar Size</label>
                    <Input {...register('jar_size')} name="jar_size" placeholder='Jar Size'/>
                </div>
                <div>
                    <label htmlFor="one_to_three_thousand_ft">1,000 to 3,000 ft</label>
                    <Input {...register('one_to_three_thousand_ft')} name="one_to_three_thousand_ft" placeholder='1,000 to 3,000 ft'/>
                </div>
                <div>
                    <label htmlFor="three_to_six_thousand_ft">3,001 to 6,000 ft</label>
                    <Input {...register('three_to_six_thousand_ft')} name="three_to_six_thousand_ft" placeholder='3,001 to 6,000 ft'/>
                </div>
                <div>
                    <label htmlFor="over_six_thousand_ft">Over 6,000 ft</label>
                    <Input {...register('over_six_thousand_ft')} name="over_six_thousand_ft" placeholder='Over 6,000 ft'/>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}