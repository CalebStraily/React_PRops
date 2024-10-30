import React from "react";

const fakeData =
[
    {
        fname: "Scott",
        lname: "Syverson",
        transportation: "car",
        age: 50,
        old: false
    },
    {
        fname: "Nicole",
        lname: "Torres",
        transportation: "car",
        age: 32,
        old: false
    },
    {
        fname: "Caleb",
        lname: "Straily",
        transportation: "home",
        age: 24,
        old: true
    }
]

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
            let bruh = name.charAt(0).toUpperCase()
            + name.substring(1);

            return <p>{bruh}</p>;
        }
    )

    console.log (capitalize);

    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

    const pokemonPTags = pokemon.map(
        (mon) => 
        {
            return <p>{mon}</p>
        }
    )

    const listComponents = fakeData.map(
        (currentItem) =>
        {
            return <TempItem 
            firstName={currentItem.fname} 
            lastName={currentItem.lname} 
            transportation={currentItem.transportation} 
            ageNum={currentItem.age} 
            bool={currentItem.old} />
        }
    )

    return(
        <div className="row">
            <div className="col-12">
                <h1>Array Mapping Section!</h1>
            </div>
            <div className="col-12">
                {capitalize}
            </div>
            <div className="col-12">
                {pokemonPTags}
            </div>
            {listComponents}
        </div>
    )
}

function TempItem(props)
{
    return (
        <div className="col-3">
            <p>First Name: {props.firstName} Last Name: {props.lastName} </p>
            <p>Transportation: {props.transportation} </p>
            <p>Age: {props.ageNum}</p>
            <p>Old Status: {props.bool}</p>
        </div>
    )
}

export default Arraymap;