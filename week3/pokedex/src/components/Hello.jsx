function Hello(props) {
    console.log(props)
    const fruits = ['orange','mango','guava'];
    const persons = [
        {fname:'srinu'},
        {fname:'chari'},
        {fname:'kurma'},
    ]
        
    return <>
        <h1> Hello </h1>
        {fruits.map((e) => { return <h1>{e}</h1>})}
        {
            persons.map(function(obj){
                return <h3>{obj.fname}</h3>
            })
        }
    </>
}

export default Hello;