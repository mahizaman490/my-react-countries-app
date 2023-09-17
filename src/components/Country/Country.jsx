/* eslint-disable react/prop-types */
import 'Count'

const Country = ({country}) => {
    console.log(country)
    const {name,flags,population,area} = country;
    return (
        <div>
            <img src={flags.png} alt="" />
            <h2>name:{name.common}</h2>
            <h3>population : {population}</h3>
            <h3>area : {area}</h3>
      

        </div>
    );
};

export default Country;