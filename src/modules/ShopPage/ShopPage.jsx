import React from 'react';
import './shoppage.scss';
import ButtonReverse from './../ButtonReverse/ButtonReverse';
import { Parallax } from 'react-parallax';
import plane from './../../plane2.jpg';
import italy from './../../italy.jpg';
import road from './../../road.jpg';

const ShopPage = () => {
    return (
        <div>
            <Parallax            
            bgImage = {road}
            bgImageAlt = 'Road'
            strength = {500}
            >
                <div className = 'parallax-imag'>
                    <div className = 'inside-txt'>
                        <h1>Check our offer</h1>
                        <h2>Your dream holidays made for measure.</h2>
                    </div>
                </div>
            </Parallax>
            <div className = 'first-middle-section'>
                <div className = 'middle-section-content'>
                    <h1>What can we do for you:</h1>
                    <h2>Preparation</h2>
                    <p>Brownie liquorice chocolate bar halvah pie fruitcake. 
                        Icing gummies dessert chocolate cake chocolate bar halvah pie. 
                        Carrot cake lemon drops gummi bears gummies toffee jelly-o dessert powder. 
                        Marzipan candy canes muffin cupcake pie wafer pudding chocolate cake. 
                        Danish cupcake donut pie pie danish lollipop jelly. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>Documents and Vaccines</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>Packing</h2>
                    <p>Sesame snaps oat cake marshmallow. 
                        Chocolate bar sweet roll cookie topping candy. 
                        Liquorice chocolate bar tootsie roll sweet jelly oat cake topping. 
                        Apple pie cotton candy gummi bears jujubes wafer marshmallow candy croissant apple pie.
                    </p>
                    <h2>Bookings</h2>
                    <p>Cake ice cream topping jelly beans macaroon gingerbread. 
                        Jelly cheesecake cake. 
                        Tootsie roll bonbon lollipop halvah jujubes cheesecake bonbon chupa chups. 
                        Halvah gummi bears cupcake biscuit donut. 
                        Gummi bears tiramisu cupcake. 
                        Tart sweet gummies soufflé tart powder macaroon ice cream. 
                    </p>
                    <h2>Rentals</h2>
                    <p>Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                    </p>
                    <h2>Excursions</h2>
                    <p>Gummies toffee chocolate cake pastry chocolate bar. 
                        Dragée pie halvah tootsie roll oat cake gingerbread gummi bears lemon drops marshmallow. 
                        Apple pie topping cupcake sweet halvah chocolate cake brownie jujubes. 
                        Pie pie gingerbread marshmallow chocolate chocolate cake tiramisu. 
                    </p>
                    <h2>VIP package</h2>
                    <p>Gingerbread soufflé cake cupcake oat cake pie. 
                        Halvah bear claw dessert pie. 
                        Jelly beans halvah gingerbread dragée. 
                        Toffee donut pastry. 
                        Sugar plum ice cream dragée. 
                        Candy canes muffin dragée.
                    </p>
                </div>
            </div>
            <Parallax
            bgImage = {italy}
            bgImageAlt = 'Italy'
            strength = {500}
            >
                <div className = 'parallax-imag'>
                    <div className = 'inside-txt'>
                        <h1>Ready to go?</h1>
                        <h2>Your dream holidays made for measure.</h2>
                    </div>
                </div>

            </Parallax>
            <div className = 'second-middle-section'>
                <h1>Schedule a meeting</h1>
                <h2>It's simple!</h2>
                <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                    Soufflé gummi bears icing topping liquorice apple pie. 
                    Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                    Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    Soufflé gummi bears icing topping liquorice apple pie. 
                    Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                    Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                </p>
                <ButtonReverse content = 'get started' />
            </div>
            <Parallax
            bgImage = {plane}
            bgImageAlt = 'Italy'
            strength = {500}
            >
                <div className = 'parallax-imag'>
                    <div className = 'inside-txt'>
                        <h1>Sky is the limit</h1>
                        <h2>Your dream holidays made for measure.</h2>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default ShopPage;