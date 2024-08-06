import React, { useEffect, useState } from 'react'
import Card  from './Cards'

let data = [
    {
        id: 1,
        img_title: "SubWay",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/36c15da5-700d-46e0-95dd-1414acb77a96_9296.JPG",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 2,
        img_title: "Burger King",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 3,
        img_title: "Pizza",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d20fdc8c86aa8bd0638f47dd013d46f9",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 4,
        img_title: "Barbeque Nation",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ffe4084febdec52732dffd3624f4e6c1",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 5,
        img_title: "Niloufer Classic",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1171b83d63d7c203e5f1c3e16980cd89",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 6,
        img_title: "The Good Bowl",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 7,
        img_title: "Shah Ghouse Hotel",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ks4d93rjtcbitkzkbqx0",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 8,
        img_title: "Daily Kitchen",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750389.JPG",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 9,
        img_title: "Lucky Resturant",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qems028i3da5rxf81rbp",
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 10,
        img_title: "McDonald's",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b10564e0-29ed-4c04-bd9a-541289ba74bb_23734.jpg",
        discount: "20% OFF UPTO ₹50"
    }
]
function RestaurantChains() {
    const [resdata, setData] = useState([])
    const [error, setError] = useState(false)


    const getData = () => {
        try {
            const respsonse = [...data]
            console.log("the data function is here")
            console.log(respsonse)
            setData(respsonse)
            setError(false)
        } catch (error) {
            setError(true)
            console.log("there is a error in the code", error)
        }
        finally {
            return;
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div >
            <div className="text-left  text-2xl">
                <b>Top restaurant chains in Hyderabad</b>
            </div>
            {/* {resdata.map((item, index) => (
                <div key={index}>
                    <img src={item.img_url} alt={item.img_title} />
                </div>
            ))}
            {error && <p>there is an error in the code</p>} */}
            <Card resdata={resdata}/>
        </div>
    )
}

export default RestaurantChains
