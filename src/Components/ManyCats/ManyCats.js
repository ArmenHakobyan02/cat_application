import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetManyCats } from "../../redux/ManyCatsReducer/ManyCatsReducer"
import { Loading } from "../Loading/Loading"
import "./ManyCats.css"

export const ManyCats = () => {

    const dispatch = useDispatch()
    const [CatImgLimit, SetCatImgLimit] = useState(0)

    const { data } = useSelector(state => state.ManyCatsReducer)

    const HandleClick = () => {
        if (!CatImgLimit) return alert("Input is Empty")

        dispatch(GetManyCats(CatImgLimit))
    }

    return (
        <div className="ManyCats_App">
            <div className="ManyCats_Search">
                <form onSubmit={(e) => e.preventDefault()} >
                    <input type="number" placeholder="Enter Your Number"
                        onChange={(e) => SetCatImgLimit(e.target.value)}
                        value={CatImgLimit}
                    />
                    <button onClick={HandleClick}>Random Cat</button>
                </form>
            </div>
            <div className='ManyCats_items'>
                {!data ? <Loading /> :
                    <div className="ManyCats_item">
                        {data.map((item) => {
                            return <img src={item.url} key={item.id} alt="Very-Cat" />
                        })}
                    </div>
                }

            </div>
        </div>
    )
}