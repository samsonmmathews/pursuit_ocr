import { useEffect } from 'react';
import './banner.css'

const Banner = ({image}) => {

   

    return(
        <section aria-hidden="true" id="banner-container" style={{
            backgroundImage: `url(${image})`
        }}>
        </section>
    );
}

export default Banner;