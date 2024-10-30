import React from "react";

function Arraymap()
{

    const nums = [1,2,3,4,5]

    nums.map(
        function square(x) 
        {
            return console.log(x * x);
        }
    )

    let square = nums.map(
        (x) => x * x
    )

    const names = ['alice', 'bob', 'charlie', 'danielle'];

    const capitalize = names.map(
        (name) => 
        {
            return name.charAt(0).toUpperCase()
            + name.substring(1);
        }
    )

    console.log (capitalize);

    return(
        <div className="row">
            <div className="col-12">
                <h1>Array Mapping Section!</h1>
            </div>
            <div className="col-12">
                {capitalize};
            </div>
        </div>
    )
}

export default Arraymap;