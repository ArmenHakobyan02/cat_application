import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../Loading/Loading"
import { GetCat } from "../../redux/Cat_Reducer/Cat_Reducer";

import "./Cat.css"

export const Cat = () => {

    const dispatch = useDispatch()
    const { data, loading, error } = useSelector(state => state.Cat_Reducer)
    console.log(data)
    if (!data) return;
    return (
        <div className="Cat_App">
            {error ? <h1 className="Cat_ErrorMessage"> {error} </h1> :
                <div className='Cat_items'>
                    {loading ? <Loading /> :
                        <img src={data[0]?.url} />
                    }
                </div>
            }
            <button className="RandomCats_Button" onClick={() => dispatch(GetCat())}>Random Cat</button>
        </div>
    )
} 