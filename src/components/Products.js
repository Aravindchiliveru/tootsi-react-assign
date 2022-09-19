import { Image } from 'antd'
import img from '../assets/item1.jpg'
export const products = [
    {
        id : 1,
        name : 'Relaxed Fit Sweatshirt',
        description : "Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        image : <Image src={img} height='70px' preview ={false}  />,
        price : 3000,
        color : 'Pink',
        categorysize : 'XL',
        categorytype : 'Hoodies',
        stocksize : 9,
        buy : 'buy'

    },
        {
        id : 2,
        name : "H&M Relaxed Fit Sweatshirt",
        description : "Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        image : <Image src={img} height='70px' preview ={false}  />,
        price : 30,
        color : 'Pink',
        categorysize : "XXL",
        categorytype : 'Hoodies',
        stocksize : 10,
        buy : 'buy'

    },
        {
        id : 3,
        name : "Fit Sweatshirt",
        description : "Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        image : <Image src={img} height='70px' preview ={false}  />,
        price : 300,
        color : 'Pink',
        categorysize : 'L',
        categorytype : 'Joggers',
        stocksize : 0,
        buy : 'buy'

    },
        {
        id : 4,
        name : "HSweatshirt",
        description : "Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        image : <Image src={img} height='70px' preview ={false} />,
        price : 67,
        color : 'Blue',
        stocksize : 1,
        buy : 'buy',
        categorysize : 'X',
        categorytype : 'Jackets',

    },
            {
        id : 5,
        name : "Fit Sweatshirt",
        description : "Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        image : <Image src={img} height='70px' preview ={false}  />,
        price : 300,
        color : 'Pink',
        categorysize : 'L',
        categorytype : 'Joggers',
        stocksize : 0,
        buy : 'buy'

    },
            {
        id : 6,
        name : "Fit Sweatshirt",
        description : "Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        image : <Image src={img} height='70px' preview ={false}  />,
        price : 300,
        color : 'Pink',
        categorysize : 'L',
        categorytype : 'Joggers',
        stocksize : 0,
        buy : 'buy'

    },
]